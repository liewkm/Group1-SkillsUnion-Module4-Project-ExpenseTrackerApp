/*----  
  All Expenses screen
----*/

import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/ExpensesContext';

function AllExpenses() {
  const { expenses } = useContext(ExpensesContext)
  return (
    <ExpensesOutput 
      expenses={expenses}
      expensesPeriod='Total'
      fallbackText='No Expenses Yet.'
      />
  );
}

export default AllExpenses;