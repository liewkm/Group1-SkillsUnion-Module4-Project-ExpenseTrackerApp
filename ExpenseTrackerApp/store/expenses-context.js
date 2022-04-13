/*----  
  Global context
----*/

import { createContext, useReducer } from 'react';

export const ExpensesContext = createContext({

})

const value = {
  
}

function ExpensesContextProvider({ children }) {
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider