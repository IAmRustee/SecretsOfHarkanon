import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

type ImageButtonProps = {
  idle: any;
  hover: any;
  active: any;
  onPress: () => void;
};

export default function MainMenu() {
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
          <ImageButton
            idle={require("@/assets/images/main_menu/play_idle.png")}
            hover={require("@/assets/images/main_menu/play_press.png")}
            active={require("@/assets/images/main_menu/play_press.png")}
            onPress={() => console.log("Start Game")}
          />

          <ImageButton
            idle={require("@/assets/images/main_menu/quit_idle.png")}
            hover={require("@/assets/images/main_menu/quit_press.png")}
            active={require("@/assets/images/main_menu/quit_press.png")}
            onPress={() => console.log("Options")}
          />
        </View>
      </View>
    </View>
  );
}

function ImageButton({ idle, hover, active, onPress }: ImageButtonProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
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
});
