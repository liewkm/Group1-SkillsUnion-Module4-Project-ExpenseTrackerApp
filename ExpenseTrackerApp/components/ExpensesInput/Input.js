/*----  
  Input field component
----*/

import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalColors } from "../../utilities/colors";

function Input({ inputLabel, inputConfig }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{inputLabel}</Text>
      <TextInput style={styles.input} {...inputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: { 
    
    marginHorizontal: 6, 
    marginVertical: 8 },
  label: {
    fontSize: 16,
    marginVertical: 8,
    color: GlobalColors.primary100,
  },
  input: {
    fontSize: 16,
    backgroundColor: GlobalColors.primary100,
    color: GlobalColors.primary800,
    padding: 8,
    borderRadius: 4,

  },
});
