/*----  
  Icon button for adding new expense
----*/

import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, size, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      styles={({ pressed }) => {
        pressed && styles.pressed;
      }}
    >
      <View style={styles.container}>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  container: {
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
    borderRadius: 12,
  },
  pressed: { opacity: 0.7 },
});
