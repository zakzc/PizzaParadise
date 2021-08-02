import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// comps/nav
import LoginScreen from "./logInScreen";
import RegistrationScreen from "./registration";
// custom
//import MenuButton from "./menuButton";
// icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
// refs
//import routes from "./routes";

const TabNav = createBottomTabNavigator();

export default function AuthNavigation() {
  return (
    <TabNav.Navigator initialRouteName="Log in">
      <TabNav.Screen
        name="Log in"
        component={LoginScreen}
        options={({ navigation }) => ({
          //   tabBarButton: () => (
          //     <MenuButton onPress={() => navigation.navigate(routes.MENU)} />
          //   ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" color={color} size={size} />
          ),
        })}
      />
      <TabNav.Screen
        name="Register"
        component={RegistrationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-edit-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </TabNav.Navigator>
  );
}
