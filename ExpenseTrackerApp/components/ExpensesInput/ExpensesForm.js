/*----  
  Expense input form 
----*/

import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalColors } from "../../utilities/colors";
import Input from "./Input";

function ExpensesForm() {
  const [inputs, setInputs] = useState({
    date: "",
    amount: "",
    description: "",
  });

  const inputsChangeHandler = (inputType, enterValue) => {
    setInputs((current) => {
      return { ...current, [inputType]: enterValue };
    });
  };

  console.log("Obj inputs", inputs);

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
            keyboardType: "number-pad",
            onChangeText: inputsChangeHandler.bind(this, "date"),
            value: inputs.date,
          }}
        />
        <Input
          style={styles.rowInput}
          inputLabel="Amount"
          inputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputsChangeHandler.bind(this, "amount"),
            value: inputs.amount,
          }}
        />
      </View>

      <Input
        inputLabel="Description"
        inputConfig={{
          multiline: true,
          onChangeText: inputsChangeHandler.bind(this, "description"),
          value: inputs.description,
        }}
      />
    </View>
  );
}

export default ExpensesForm;

const styles = StyleSheet.create({
  container: { marginTop: 60 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: GlobalColors.primary100,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: { flex: 1 },
});
