/*----  
  Expenses summary
----*/

// import { Text } from 'react-native'

// function ExpensesSummary() {
//   return (
//     <Text>ExpensesSummary</Text>
//   )
// }

// export default ExpensesSummary

import { View, Text, StyleSheet } from 'react-native';

import { GlobalColors } from '../../utilities/colors';

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

<<<<<<< HEAD
export default ExpensesSummary;
=======
export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalColors.primary55,
    // backgroundColor: GlobalColors.accent500,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 18,
    color: GlobalColors.primary60,
  },
  sum: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalColors.primary60,
  },
});
>>>>>>> cb9c1de6a18624ea457215db4455adeec7c10864
