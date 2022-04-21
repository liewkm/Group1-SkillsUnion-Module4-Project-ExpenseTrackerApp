/*----  
  Expense input form 
----*/
import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { GlobalColors } from "../../utilities/colors";
import { getFormattedDate } from "../../utilities/helpers.js";
import Button from "../commonUI/Button.js";
import Input from "./Input";

function ExpensesForm({ onCancel, onSubmit, submitBtnLabel, defaultValues }) {
  const [validAmount, setValidAmount] = useState(true);
  const [validDate, setValidDate] = useState(true);
  const [validDescp, setValidDescp] = useState(true);
  const [formNotValid, setFormNotValid] = useState(false);

  const [inputs, setInputs] = useState({
    date: defaultValues ? getFormattedDate(defaultValues.date) : "",
    amount: defaultValues ? defaultValues.amount.toString() : "",
    description: defaultValues ? defaultValues.description : "",
  });

  const inputsChangeHandler = (inputType, enterValue) => {
    setInputs((current) => {
      return { ...current, [inputType]: enterValue };
    });
  };

  // console.log("Obj inputs", inputs);

  const submitHandler = () => {
    setFormNotValid(false);
    const data = {
      date: new Date(inputs.date),
      amount: +inputs.amount, // + converts to number
      description: inputs.description,
    };

    const validAmount = !isNaN(data.amount) && data.amount > 0;
    const validDate = data.date.toString() !== "Invalid Date";
    const validDescp = data.description.trim().length > 0;

    setValidAmount(validAmount);
    setValidDate(validDate);
    setValidDescp(validDescp);

    console.log(validDate, validAmount, validDescp);

    if (validDate && validAmount && validDescp) {
      console.log("Obj onSubmit", data);
      onSubmit(data);
    } else {
      // Alert.alert('Invalid Entry, Please Check Entry Again!')
      setFormNotValid(true);
    }
  };

  // console.log("submitBtnLabel: ", submitBtnLabel);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense</Text>

      <View style={styles.row}>
        <Input
          style={styles.rowInput}
          inputLabel="Date"
          inputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            keyboardType: "number-pad",
            onChangeText: inputsChangeHandler.bind(this, "date"),
            value: inputs.date,
          }}
          invalid={!validDate}
        />
        <Input
          style={styles.rowInput}
          inputLabel="Amount"
          inputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputsChangeHandler.bind(this, "amount"),
            value: inputs.amount,
          }}
          invalid={!validAmount}
        />
      </View>

      <Input
        inputLabel="Description"
        inputConfig={{
          multiline: true,
          onChangeText: inputsChangeHandler.bind(this, "description"),
          value: inputs.description,
        }}
        invalid={!validDescp}
      />

      <View style={styles.buttonRow}>
        <Button style={styles.button} onPress={onCancel} mode="flat">
          CANCEL
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitBtnLabel}
        </Button>
      </View>

      {formNotValid && (
        <Text style={styles.errorOutput}>
          Invalid Entry, Please Check Entry Again! {formNotValid}
        </Text>
      )}
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
  errorOutput: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
    color: GlobalColors.error50,
  },
});
