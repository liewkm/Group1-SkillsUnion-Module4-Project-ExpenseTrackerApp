/*----  
  Manage Expense screen
----*/

// Leslie: add button for AddExpense ExpenseForm
// CP: Added ManageExpense
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import ExpensesForm from "../components/ExpensesInput/ExpensesForm";
import IconButton from "../components/commonUI/IconButton";
import { ExpensesContext } from "./../store/ExpensesContext";
import { GlobalColors } from "../utilities/colors";
import {
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  ADD_EXPENSE,
} from "../reducers/ExpensesReducer";

function ManageExpense({ route, navigation }) {
  const { expenses, dispatch } = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId; // Optional chaining
  const isEditing = !!editedExpenseId; // Convert value to boolean

  const selectedExpense = expenses.find((exp) => exp.id === editedExpenseId);

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (expenseData) => {
    // console.log("isEditing : ", isEditing);
    console.log("expenseData : ", expenseData);

    if (isEditing) {
      dispatch({
        type: EDIT_EXPENSE,
        payload: {
          id: editedExpenseId,
          data: expenseData,
        },
      });
    } else {
      dispatch({ type: ADD_EXPENSE, payload: expenseData });
    }
    navigation.goBack();
  };

  const deleteExpenseHandler = () => {
    dispatch({ type: REMOVE_EXPENSE, payload: editedExpenseId });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpensesForm
        submitBtnLabel={isEditing ? "UPDATE" : "ADD"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            // color={GlobalColors.error500}
            color={GlobalColors.primary50}
            size={38}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalColors.primary800,
  },
  deleteContainer: {
    alignItems: "center",
    marginVertical: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalColors.primary50,
  },
});
export default ManageExpense;
