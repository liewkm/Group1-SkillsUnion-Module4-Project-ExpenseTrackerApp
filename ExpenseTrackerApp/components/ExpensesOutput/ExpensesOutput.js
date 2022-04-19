/*----  
  Expenses output by Liew.
----*/
import {GlobalColors} from '../../utilities/colors';
import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    desciption: 'iPhone',
    amount: 1900.90,
    date: new Date('2022-04-18')
  },
  {
    id: 'e2',
    desciption: 'Macbook',
    amount: 1400.00,
    date: new Date('2021-12-18')
  },
  {
    id: 'e3',
    desciption: 'Apple Watch',
    amount: 299.70,
    date: new Date('2022-01-10')
  },
  {
    id: 'e4',
    desciption: 'Shoes',
    amount: 79.90,
    date: new Date('2022-04-16')
  }
]

function ExpensesOutput({ expenses, expensesPeriod }) {
  // expenses parameter is an array of objects with amount, desc & date.
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
