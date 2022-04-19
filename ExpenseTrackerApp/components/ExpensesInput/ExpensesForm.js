/*----  
  Expense input form 
----*/

import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../commonUI/Button.js";
import { GlobalColors } from "../../utilities/colors";
import Input from "./Input";

function ExpensesForm({ onCancel, onSubmit, submitBtnLabel }) {
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

  const submitHandler = () => {
    const data = {
      date: new Date(inputs.date),
      amount: inputs.amount,
      description: inputs.description,
    };
    onSubmit(data);

    console.log("Obj onSubmit", data);
    console.log("submitBtnLabel: ", submitBtnLabel);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense</Text>

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

      <View style={styles.buttonRow}>
        {/* <Text>CANCEL</Text>          */}
        <Button style={styles.button} onPress={onCancel} mode="flat">
          CANCEL
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitBtnLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpensesForm;

const styles = StyleSheet.create({
  container: { marginTop: 40 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: { flex: 1 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: GlobalColors.primary50,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 130,
    marginHorizontal: 16,
    marginVertical: 8,
  },
});
