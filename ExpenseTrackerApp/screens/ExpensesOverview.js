/*----  
  Expense Overview screen
----*/

import { Ionicons } from "@expo/vector-icons";
import { GlobalColors } from "../utilities/colors";
import IconButton from "../components/commonUI/IconButton";
import AllExpenses from "./AllExpenses";
import RecentExpenses from "./RecentExpenses";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalColors.primary500 },
        headerTintColor: GlobalColors.primary100 ,
        tabBarStyle: { backgroundColor: GlobalColors.primary700 },
        // tabBarActiveTintColor: GlobalColors.primary55,
        tabBarActiveTintColor: GlobalColors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={28}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          // tabBarLabelStyle: { fontSize: 15 },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-sharp" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          // tabBarLabelStyle: { fontSize: 15 },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="archive-sharp" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default ExpensesOverview;
