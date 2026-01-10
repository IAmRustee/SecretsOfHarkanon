import { Asset } from "expo-asset";
import { Audio } from "expo-av";
import { useEffect, useRef, useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";

type ImageButtonProps = {
  idle: any;
  active: any;
  onPress: () => void;
  sound?: any;
};

const COOLDOWN_MS = 250;

export default function ImageButton({
  idle,
  active,
  onPress,
  sound,
}: ImageButtonProps) {
  const [pressed, setPressed] = useState(false);

  // 🔹 Hold the loaded sound
  const soundRef = useRef<Audio.Sound | null>(null);

  // 🔹 Cooldown lock
  const lastPlayRef = useRef(0);

  useEffect(() => {
    // preload images
    Asset.fromModule(idle).downloadAsync();
    Asset.fromModule(active).downloadAsync();

    // preload sound ONCE
    if (sound) {
      (async () => {
        const { sound: loadedSound } =
          await Audio.Sound.createAsync(sound);
        soundRef.current = loadedSound;
      })();
    }

    // cleanup
    return () => {
      soundRef.current?.unloadAsync();
    };
  }, []);

  // 🔊 Safe sound playback with cooldown
  const playSound = async () => {
    if (!soundRef.current) return;

    const now = Date.now();
    if (now - lastPlayRef.current < COOLDOWN_MS) return;

    lastPlayRef.current = now;

    try {
      await soundRef.current.replayAsync();
    } catch (e) {
      console.warn("Sound failed:", e);
    }
  };

  return (
    <Pressable
      onPressIn={() => {
        setPressed(true);
        playSound(); // 🔥 SAFE now
      }}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
    >
      <Image
        source={pressed ? active : idle}
        style={styles.button}
        resizeMode="contain"
      />
    </Pressable>
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
