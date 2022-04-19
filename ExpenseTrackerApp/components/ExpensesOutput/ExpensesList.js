/*----  
  Expenses list
----*/

// import { Text } from 'react-native'

// function ExpensesList() {
//   return (
//     <Text>ExpensesList</Text>
//   )
// }

// export default ExpensesList

import { FlatList } from 'react-native';

import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;