/*----  
  Expense input form 
----*/

import { View, Text, StyleSheet } from "react-native";
import { GlobalColors } from "../../utilities/colors";
import Input from "./Input";

function ExpensesForm() {
  const changeAmtHandler = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Input Expense</Text>

      <View style={styles.row}>
        <Input
          style={styles.rowInput}
          inputLabel="Date"
          inputConfig={{
            placeholder: "DD-MM-YYYY",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
        <Input
          style={styles.rowInput}
          inputLabel="Amount"
          inputConfig={{
            keyboardType: "decimal-point",
            onChangeText: changeAmtHandler,
          }}
        />
      </View>

      <Input
        inputLabel="Description"
        inputConfig={{
          keyboardType: "default",
          multiline: true,
          // autoCorrect: false
        }}
      />
    </View>
  );
}

export default ExpensesForm;

const styles = StyleSheet.create({
  flex: 1, 
  container: { marginTop: 60 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: GlobalColors.primary100,
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  rowInput: { flex: 1 },
});
