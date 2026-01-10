import { Asset } from "expo-asset";
import { Audio } from "expo-av"; // <-- Expo audio
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";

type ImageButtonProps = {
  idle: any;
  active: any;
  onPress: () => void;
  sound?: any; // optional sound file
};

export default function ImageButton({ idle, active, onPress, sound }: ImageButtonProps) {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    Asset.fromModule(idle).downloadAsync();
    Asset.fromModule(active).downloadAsync();
  }, []);

  // Play sound when pressed
  const playSound = async () => {
    if (!sound) return;
    const { sound: soundObject } = await Audio.Sound.createAsync(sound);
    await soundObject.playAsync();
  };

  const handlePress = () => {
    playSound(); // play sound first
    onPress();   // then trigger the action
  };

  return (
    <Pressable
      onPressIn={() => {
        setPressed(true);
        playSound(); // play as soon as button is pressed
      }}
      onPressOut={() => setPressed(false)}
      onPress={onPress} // still trigger action on release
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
