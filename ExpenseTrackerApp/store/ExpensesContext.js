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
    amount: 59.99,
    date: new Date('2022-02-19'),
  },
  {
    id: '2',
    description: 'Trousers',
    amount: 89.99,
    date: new Date('2022-01-05'),
  },
  {
    id: '3',
    description: 'Bananas',
    amount: 7.59,
    date: new Date('2022-04-17'),
  },
  {
    id: '4',
    description: 'Book',
    amount: 18.65,
    date: new Date('2022-04-17'),
  },
  {
    id: '5',
    description: 'Pencils',
    amount: 2.5,
    date: new Date('2022-04-18'),
  },
  {
    id: '6',
    description: 'Apple Pie',
    amount: 7.99,
    date: new Date('2022-04-05'),
  },
  {
    id: '7',
    description: 'Bread',
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

export default ExpensesContextProvider