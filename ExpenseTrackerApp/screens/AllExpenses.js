/*----  
  All Expenses screen
----*/

import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/ExpensesContext';

function AllExpenses() {
  return (
    <ExpensesOutput 
      expenses={expenses.expenses}
      expensesPeriod='Total'
      fallbackText='No Expenses Yet.'
      />
  );
}

export default AllExpenses;