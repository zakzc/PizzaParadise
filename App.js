import React, { useState } from "react";
import "react-native-gesture-handler";
// custom
import CustomView from "./app/components/custom/customView";
// navigation
import navigationTheme from "./app/components/navigation/navigationTheme";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// navigation comps
import WelcomeScreen from "./app/components/WelcomeScreen";
import IconComp from "./app/components/views/iconComp";
import LoginScreen from "./app/components/auth/logInScreen";
import AppNavigator from "./app/components/navigation/appNavigator";

export default function App() {
  const Stack = createStackNavigator();

  const AppNav = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "tomato" },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Log in" component={LoginScreen} />
      <Stack.Screen name="App navigation" component={AppNavigator} />
    </Stack.Navigator>
  );

  return (
    <CustomView style={{ backgroundColor: "ivory" }}>
      <NavigationContainer theme={navigationTheme}>
        <AppNav />
      </NavigationContainer>
    </CustomView>
  );
}
