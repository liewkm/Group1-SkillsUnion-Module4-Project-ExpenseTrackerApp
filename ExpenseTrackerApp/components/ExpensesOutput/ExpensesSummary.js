/*----  
  Expenses summary
----*/

import { Text, View } from "react-native";

function ExpensesSummary({ expenses, periodName }) {        // expenses is an array of objects of expenses.
  const expensesSum = expenses.reduce((sum, expense) => {   // reduce() method combines all elements in an Array into a single value.
    return sum + expense.amount                             // expense is an object with assumed amount property.
  }, 0); 

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;