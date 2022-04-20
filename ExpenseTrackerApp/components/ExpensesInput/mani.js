

function ExpensesForm({ onCancel, onSubmit, submitBtnLabel, defaultValues }) {
  const [validAmount, setValidAmount] = useState(false);
  const [validDate, setValidDate] = useState(false);
  const [validDescp, setValidDescp] = useState(false);
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
      <Text style={styles.title}>Expense</Text>{" "}
      <View style={styles.row}>
        
        <DatePicker
          style={styles.datePickerStyle}
          date={Date} // Initial date from state
          mode="Date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
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
      </View>{" "}
      <Input
        inputLabel="Description"
        inputConfig={{
          multiline: true,
          onChangeText: inputsChangeHandler.bind(this, "description"),
          value: inputs.description,
        }}
      />{" "}
      <View style={styles.buttonRow}>
        <Button style={styles.button} onPress={onCancel} mode="flat">
          CANCEL
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitBtnLabel}
        </Button>
      </View>{" "}
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
