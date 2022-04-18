/*----  
  Manage Expense screen
----*/

// Leslie: add button for AddExpense ExpenseForm

import { Text, View, StyleSheet } from "react-native";
import ExpensesForm from "../components/ExpensesInput/ExpensesForm";
import { useContext, useLayoutEffect } from 'react';
import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';

function ManageExpense() {
  return (
    <View>
      <Text>ManageExpense</Text>
      <ExpensesForm />
    </View>
  );
}

export default ManageExpense;
