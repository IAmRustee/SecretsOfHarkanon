import ImageButton from "@/app/utils/ImageButton";
import { StyleSheet, View } from "react-native";

export default function MainMenu() {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {/* Title Image */}
        {/* Buttons */}
        <View style={styles.rowButtons}>
          {/*Play Button*/}
          <ImageButton
            idle={require("@/assets/images/level_select/lvl_1_idle.png")}
            active={require("@/assets/images/level_select/lvl_1_press.png")}
            sound={require("@/assets/audio/magic_shing.mp3")}
            onPress={() => console.log("Playing?")}
          />
        </View>.
        <View style={styles.rowButtons}>
          {/*Settings Button*/}
          <ImageButton
            idle={require("@/assets/images/main_menu/settings_idle.png")}
            active={require("@/assets/images/main_menu/settings_press.png")}
            sound={require("@/assets/audio/magic_shing.mp3")}
            onPress={() => console.log("Settings")}
          />
          {/*Menu Button*/}
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
  gap: 0,
},
});
