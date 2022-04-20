/*----  
  Global context
----*/

import { createContext, useReducer } from 'react';

import ExpensesReducer from '../reducers/ExpensesReducer';

// Example data
const DUMMY_EXPENSES = [
  {
    id: '1',
    description: 'Shoes',
    category: 'Clothing',
    amount: 59.99,
    date: new Date('2022-02-19'),
  },
  {
    id: '2',
    description: 'Trousers',
    category: 'Clothing',
    amount: 89.99,
    date: new Date('2022-01-05'),
  },
  {
    id: '3',
    description: 'Bananas',
    category: 'Food',
    amount: 7.59,
    date: new Date('2022-04-17'),
  },
  {
    id: '4',
    description: 'Scissors',
    category: 'Stationery',
    amount: 18.65,
    date: new Date('2022-04-17'),
  },
  {
    id: '5',
    description: 'Pencils',
    category: 'Stationery',
    amount: 2.5,
    date: new Date('2022-04-18'),
  },
  {
    id: '6',
    description: 'Apple Pie',
    category: 'Food',
    amount: 7.99,
    date: new Date('2022-04-05'),
  },
  {
    id: '7',
    description: 'Bread',
    category: 'Food',
    amount: 2.99,
    date: new Date('2022-04-05'),
  },
];

// Create context objext
export const ExpensesContext = createContext()

function ExpensesContextProvider({ children }) {
  const [expenses, dispatch] = useReducer(
    ExpensesReducer, DUMMY_EXPENSES)
  
  return (
    <ExpensesContext.Provider value={{expenses, dispatch}}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider;