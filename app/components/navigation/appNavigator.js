import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// comps/nav
import MenuCard from "../menuCard";
import MenuList from "../Menu/menuList";
import AccountScreen from "../accountScreen";
// custom
import MenuButton from "./menuButton";
// icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
// refs
import routes from "./routes";
import CurrentOrder from "../orders/orders_CurrentOrder";

const TabNav = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <TabNav.Navigator>
      <TabNav.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <TabNav.Screen
        name="Menu"
        component={MenuList}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <MenuButton onPress={() => navigation.navigate(routes.MENU)} />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <TabNav.Screen
        name="Orders"
        component={CurrentOrder}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />
    </TabNav.Navigator>
  );
}
