/*---- 
  NTU-SDI Cohort 3 (2022)
  Group 1 Project Module 4: Expense Tracker App 
  Group Members:
    King Mann
    Maniraja
    Charles
    Leslie
    Keith
    CP
----*/


import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { GlobalColors } from './utilities/colors';
import ExpensesContextProvider from './store/ExpensesContext';
import ExpensesOverview from './screens/ExpensesOverview';
import ManageExpense from './screens/ManageExpense';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalColors.primary500 },
              headerTintColor: 'white',
            }}
          >
            <Stack.Screen
              name='ExpensesOverview'
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='ManageExpense'
              component={ManageExpense}
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

