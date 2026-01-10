import ImageButton from "@/app/utils/ImageButton";
import { Audio } from "expo-av"; // <-- Expo audio
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function MainMenu() {
  const router = useRouter();
  const [bgm, setBgm] = useState<Audio.Sound | null>(null);
  const [trackIndex, setTrackIndex] = useState(0);

  // List of tracks (static requires)
  const tracks = [
    require("@/assets/audio/bgm/Schubert - Serenade.mp3"),
    require("@/assets/audio/bgm/Chopin - Nocturne OP 55 No 1.mp3"),
  ];

  // Function to play a track
  const playTrack = async (index: number) => {
    // Unload previous sound
    if (bgm) {
      await bgm.stopAsync();
      await bgm.unloadAsync();
    }

    // Load new track
    const { sound } = await Audio.Sound.createAsync(tracks[index]);
    setBgm(sound);

    // Set a callback for when track ends
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        // Move to next track, loop to start if at end
        const nextIndex = (index + 1) % tracks.length;
        setTrackIndex(nextIndex);
      }
    });

    await sound.playAsync();
  };

  // Start playback and handle track changes
  useEffect(() => {
    playTrack(trackIndex);

    return () => {
      if (bgm) {
        bgm.stopAsync();
        bgm.unloadAsync();
      }
    };
  }, [trackIndex]);
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {/* Title Image */}
        <Image
          source={require("@/assets/images/main_menu/main_menu_title.png")}
          style={styles.title}
          resizeMode="contain"
        />

        {/* Buttons */}
        <View style={styles.buttons}>
          {/* Play Button */}
          <ImageButton
            idle={require("@/assets/images/main_menu/play_idle.png")}
            active={require("@/assets/images/main_menu/play_press.png")}
            sound={require("@/assets/audio/magic_shing.mp3")}
            onPress={() => router.push("/(tabs)/level_select")}
          />

          {/* Quit Button */}
          <ImageButton
            idle={require("@/assets/images/main_menu/quit_idle.png")}
            active={require("@/assets/images/main_menu/quit_press.png")}
            sound={require("@/assets/audio/magic_shing.mp3")}
            onPress={() => console.log("Quit")}
          />
        </View>

        <View style={styles.rowButtons}>
          {/* Settings Button */}
          <ImageButton
            idle={require("@/assets/images/main_menu/settings_idle.png")}
            active={require("@/assets/images/main_menu/settings_press.png")}
            sound={require("@/assets/audio/magic_shing.mp3")}
            onPress={() => console.log("Settings")}
          />

          {/* Menu Button */}
          <ImageButton
            idle={require("@/assets/images/main_menu/menu_idle.png")}
            active={require("@/assets/images/main_menu/menu_press.png")}
            sound={require("@/assets/audio/magic_shing.mp3")}
            onPress={() => console.log("Menu")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    gap: 24,
  },
  buttons: {
    gap: 16,
  },
  title: {
    width: 576,
    height: 320,
  },
  button: {
    width: 256,
    height: 96,
  },
  rowButtons: {
    flexDirection: "row",
    gap: 16,
  },
});
