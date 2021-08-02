import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
// custom
import CustomButton from "./custom/customButton";
import Logo from "./views/logo";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/images/pizzaBackground.jpg")}
    >
      <View style={styles.logoTextArea}>
        <Logo />
        <View style={styles.entryButtons}>
          <View style={styles.logInButton}>
            <CustomButton
              title={"Log in"}
              onPress={() => navigation.navigate("Log in")}
            />
          </View>
          <View style={styles.menuButton}>
            <CustomButton
              title={"Menu"}
              color={"#20B2AA"}
              onPress={() => navigation.navigate("App navigation")}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  logoTextArea: {
    top: 50,
  },
  entryButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logInButton: {
    // margin: 20,
  },
  logoImage: {
    width: 90,
    height: 90,
  },
  menuButton: {
    // margin: 20,
  },
});

export default WelcomeScreen;
