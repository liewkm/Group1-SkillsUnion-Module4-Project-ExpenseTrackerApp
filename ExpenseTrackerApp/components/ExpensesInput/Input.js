/*----  
  Input field component
----*/

import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalColors } from "../../utilities/colors";

function Input({ inputLabel, inputConfig, style, invalid }) {
  const inputStyles = [styles.input];
  if (inputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidEntry);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, styles.invalidEntry && invalid]}>
        {inputLabel}
      </Text>
      <TextInput style={inputStyles} {...inputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    marginVertical: 8,
  },
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
    borderRadius: 8,
    minWidth : "49%"
  },

  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },

  invalidEntry: {
    backgroundColor: GlobalColors.error50,
  },
});
