/*----  
  Expense input form 
----*/
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import PickerSelect from "react-native-picker-select";

import { GlobalColors } from "../../utilities/colors";
import { getFormattedDate } from "../../utilities/helpers.js";
import Button from "../commonUI/Button.js";
import Input from "./Input";

function ExpensesForm({ onCancel, onSubmit, submitBtnLabel, defaultValues }) {
  const [validAmount, setValidAmount] = useState(true);
  const [validDate, setValidDate] = useState(true);
  const [validDescp, setValidDescp] = useState(true);
  const [formNotValid, setFormNotValid] = useState(false);

  const [date, setDate] = useState(new Date(Date.now()));
  const [showDatePicker, setShowDatePicker] = useState(false);
  // const [text, setText] = useState(["Empty"]); // outputscreen

  const [category, setCategory] = useState("");

  const [inputs, setInputs] = useState({
    date: defaultValues
      ? getFormattedDate(defaultValues.date)
      : getFormattedDate(date),
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
    // console.log(validDate, validAmount, validDescp);

    if (validDate && validAmount && validDescp) {
      onSubmit(data);
      // console.log("Obj onSubmit", data);
    } else {
      // Alert.alert('Invalid Entry, Please Check Entry Again!')
      setFormNotValid(true);
    }
  };

  ///////////////// DatePicker
  const showMode = () => setShowDatePicker(true);

  const onChangeDatePicker = (event, selectedDate) => {
    if (Platform.OS === "android") {
      setShowDatePicker(false);
    }
    const currentDate = selectedDate || date;

    setDate(currentDate);
    let tempDate = getFormattedDate(currentDate);

    setInputs((current) => {
      return { ...current, ["date"]: tempDate };
    });

    // setText(tempDate); // outputscreen
    // console.log("tempDate, date: ", tempDate, date); // outputscreen
  };

  ///////////////// PickerSelect

  // console.log("submitBtnLabel: ", submitBtnLabel);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense</Text>
      {/* <Button style={styles.button} onPress={() => showMode()}>
        Date Picker
      </Button> */}
      <View style={styles.row}>
        <Pressable onPress={() => showMode()}>
          <Input
            style={styles.rowInput}
            inputLabel="Date"
            inputConfig={{
              // placeholder: "YYYY-MM-DD",
              maxLength: 10,
              showSoftInputOnFocus: false, // dismiss kkeyboard
              keyboardType: "number-pad",
              onChangeText: inputsChangeHandler.bind(this, "date"),
              value: inputs.date,
              onPressIn: () => showMode(), // allows input area pressable
            }}
            invalid={!validDate}
          />
        </Pressable>
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
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode={"date"}
          display="default"
          onChange={onChangeDatePicker}
        />
      )}

      {/* display DatePicker input */}
      {/* <Text style={styles.title}>{text}</Text> */}

      <PickerSelect
        onValueChange={(category) => setCategory(category)}
        placeholder={{ label: "Select Expense Category", value: null }}
        items={[
          { label: "Clothing", value: "Clothing" },
          { label: "Computing Hardware", value: "Computing Hardware" },
          { label: "Food", value: "Food" },
          { label: "Hobby", value: "Hobby" },
          { label: "Household", value: "Household" },
          { label: "Stationary", value: "Stationary" },
          { label: "Social", value: "Social" },
          { label: "Transport", value: "Transport" },
        ]}
        style={pickerSelectStyles}
      />

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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "white",
    borderRadius: 8,
    color: "white",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

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
