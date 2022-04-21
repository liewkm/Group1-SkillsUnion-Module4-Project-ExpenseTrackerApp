/*----  
  Global button component
----*/

import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalColors } from "../../utilities/colors";

function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => {
          pressed && styles.pressed;
        }}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.text, mode === "flat" && styles.flatText]}>
           {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 6,
    borderRadius: 16,
    backgroundColor: GlobalColors.primary200,
  },
  text: {
    textAlign: "center",
    color: GlobalColors.primary800,
    fontWeight: 'bold'
  },
  pressed: {
    opacity: 0.7,
    borderRadius: 4,
    backgroundColor: GlobalColors.primary100,
  },
  flat: { backgroundColor: "transparent" },
  flatText: { color: GlobalColors.primary200 },
});
