import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// comps/nav
import MenuCard from "../Menu/menuCard";
import MenuList from "../Menu/menuList";
import AccountScreen from "../account/accountScreen";
// custom
import MenuButton from "./menuButton";
// icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
// refs
import routes from "./routes";
import CurrentOrder from "../orders/orders_CurrentOrder";

const TabNav = createBottomTabNavigator();

export default function AppNavigator({ navigation }) {
  return (
    <TabNav.Navigator initialRouteName="Menu" style={styles.container}>
      <TabNav.Screen
        name="Account"
        component={AccountScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        })}
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
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        })}
      />
    </TabNav.Navigator>
  );
}

const styles = StyleSheet.create({});
