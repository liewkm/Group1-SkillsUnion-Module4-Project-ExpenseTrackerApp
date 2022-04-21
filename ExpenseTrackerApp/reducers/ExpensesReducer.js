/*----  
  Reducers for expense context methods
----*/

// Import dispatch constants {action.type} into consumer components
export const ADD_EXPENSE = "ADD_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";
export const EDIT_EXPENSE = "EDIT_EXPENSE";

/*
  Reducer function receives 2 arguments:
    1. state -> current state passed from context
    2. action -> { type, payload }
  
  Payload content changes according to action type
*/

function ExpensesReducer(state, action) {
  switch (action.type) {
    // payload -> new expense data

    case ADD_EXPENSE:
      const newId = new Date();
      return [{ ...action.payload, id: newId }, ...state];

    // payload.id   -> ID of item to edit
    // payload.data -> edited expense data

    case EDIT_EXPENSE:
      // 1. Find the index for editing
      const updateIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      // 2. Copy the item for editing
      const updateExpense = state[updateIndex];
      // 3. Over-write new data into update item
      const updateItem = { ...updateExpense, ...action.payload.data };
      // 4. Copy the entire state array
      const updatedExpenses = [...state];
      // 5. Replace the updated item in the array
      updatedExpenses[updateIndex] = updateItem;
      // 6. Replace the the newly edited array
      return updatedExpenses;

    // payload -> ID of item to delete

    case REMOVE_EXPENSE:
      // Copy all items in state array, EXCEPT for the id item
      // indicated in action.payload
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
}
export default ExpensesReducer;
