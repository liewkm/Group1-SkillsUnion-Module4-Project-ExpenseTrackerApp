/*----  
  Expense Overview screen
----*/

import { Ionicons } from '@expo/vector-icons'
import { GlobalColors } from '../utilities/colors';
import IconButton from '../components/commonUI/IconButton'
import AllExpenses from './AllExpenses'
import RecentExpenses from './RecentExpenses'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const BottomTabs = createBottomTabNavigator();


function ExpensesOverview() {
  return (
  <BottomTabs.Navigator 
    screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: GlobalColors.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalColors.primary500 },
      tabBarActiveTintColor: GlobalColors.accent500,
      headerRight: ({ tintColor }) => (
        <IconButton 
          icon='add' size={24} color={tintColor} onPress={() => {
            navigation.navigate('ManageExpense')
          }} 
        />
      ),
    })}
  >
    <BottomTabs.Screen 
      name='RecentExpenses' 
      component={RecentExpenses} 
      options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({color, size}) => (
          <Ionicons name='hourglass' size={size} color={color} />
        ),
      }}  
    />
    <BottomTabs.Screen 
      name='AllExpenses' 
      component={AllExpenses}
      options={{
        title: 'All Expenses',
        tabBarLabel: 'All',
        tabBarIcon: ({color, size}) => (
          <Ionicons name='calendar' size={size} color={color} />
        ),
      }}  
    />
  </BottomTabs.Navigator>
  )
}

export default ExpensesOverview;