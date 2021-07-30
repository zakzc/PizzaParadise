import React from "react";
import "react-native-gesture-handler";
// comps
import LoginScreen from "../auth/logInScreen";
import WelcomeScreen from "../WelcomeScreen";
// navigation
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome Screen"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen name="Log in" component={LoginScreen}></Stack.Screen>
  </Stack.Navigator>
);

export default function AuthNavigation() {
  return <StackNavigator />;
}
