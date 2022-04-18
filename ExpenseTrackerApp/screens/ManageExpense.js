/*----  
  Manage Expense screen
----*/

// Leslie: add button for AddExpense ExpenseForm

import { Text, View } from "react-native";
import ExpensesForm from "../components/ExpensesInput/ExpensesForm";

function ManageExpense() {
  return (
    <View>
      <Text>ManageExpense</Text>
      <ExpensesForm />
    </View>
  );
}

export default ManageExpense;
