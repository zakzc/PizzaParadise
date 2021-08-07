import React, { useState } from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
// custom
import CustomView from "./app/components/custom/customView";
// navigation
import navigationTheme from "./app/components/navigation/navigationTheme";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// navigation comps
import WelcomeScreen from "./app/components/WelcomeScreen";
// import IconComp from "./app/components/views/iconComp";
// import LoginScreen from "./app/components/auth/logInScreen";
// import RegistrationScreen from "./app/components/auth/registration";
import AuthNavigation from "./app/components/auth/authNavigation";
// nav
import AppNavigator from "./app/components/navigation/appNavigator";

export default function App() {
  const Stack = createStackNavigator();

  const AppNav = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // headerTitle: false,
        headerStyle: { backgroundColor: "#f3f3f3" },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Credentials" component={AuthNavigation} />
      <Stack.Screen name="App navigation" component={AppNavigator} />
    </Stack.Navigator>
  );

  return (
    // <CustomView>
    <NavigationContainer theme={navigationTheme} style={styles.container}>
      <AppNav />
    </NavigationContainer>
    //</CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
