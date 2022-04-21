/*----  
  Expenses output by Liew.
----*/
import {GlobalColors} from '../../utilities/colors';
import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

// import { Text } from 'react-native'

// function ExpensesOutput() {
//   return (
//     <Text>ExpensesOutput</Text>
//   )
// }

// export default ExpensesOutput

import { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View } from 'react-native';

import { GlobalColors } from '../../utilities/colors';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  const [pickerValue, setPickerValue] = useState(null)
  const [pickerItems, setPickerItems] = useState([])

  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  
  // Filters out category items into an array for dropdown menu
  
  useEffect(() => {
    let array = [];
    expenses.forEach((item) => {
      array.push(item.category);
    });
    const unique = [...new Set(array)];
    setPickerItems(unique)
  }, [expenses.length])

  // Updates selected category item from dropdown menu
  
  useEffect(() => {
    console.log('ExpensesOutput: pickerValue', pickerValue);
  }, [pickerValue])

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <Picker
        selectedValue={pickerValue}
        style={{color: 'white'}}
        dropdownIconColor={'white'}
        onValueChange={(value, index) => setPickerValue(value)}
      >
        {pickerItems.map((item, index) => {
          return <Picker.Item key={index} label={item} value={item} /> 
        })}
      </Picker>      
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalColors.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
