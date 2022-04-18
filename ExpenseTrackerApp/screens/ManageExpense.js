/*----  
  Manage Expense screen
----*/

// Leslie: add button for AddExpense ExpenseForm
// CP: Added ManageExpense

import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import ExpensesForm from '../components/ExpensesInput/ExpensesForm';
import IconButton from '../components/commonUI/IconButton';
import { ExpensesContext } from './../store/ExpensesContext';
import { GlobalColors } from '../utilities/colors';


function ManageExpense({ route, navigation }) {
  
  const { expenses, dispatch } = useContext(ExpensesContext);
  
  const editedExpenseId = route.params?.expenseId; // Optional chaining 
  const isEditing = !!editedExpenseId; // Convert value to boolean
  
  const selectedExpense = expenses.find( 
    exp => exp.id === editedExpenseId
  )

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  const deleteExpenseHandler = () => {
    dispatch({ type: 'DELETE', payload: editedExpenseId })
    navigation.goBack()
  }
  const cancelHandler = () => {
      navigation.goBack()
  }

  const confirmHandler = (expenseData) => {
    if (isEditing) {
      dispatch({ type: 'UPDATE', payload: {
        id: editedExpenseId,
        data: expenseData
      }})
    } else {
      dispatch({ type: 'ADD', payload: expenseData })
    }
    navigation.goBack()
  }
  
  return (
    <View style={styles.container}>
      <ExpensesForm 
        submitButtonLabel={isEditing ? 'Update' : 'Add'}  
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && 
        <View style={styles.deleteContainer}>
          <IconButton icon='trash'
            color={GlobalColors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalColors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalColors.primary200,
    alignItems: 'center',
  },
});
export default ManageExpense;
