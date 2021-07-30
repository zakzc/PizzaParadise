import React from "react";
import { Image, StyleSheet, View } from "react-native";
// custom
import CustomText from "../custom/customText";

export default function Logo(props) {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          source={require("../../assets/pizza.png")}
        />
      </View>
      <View style={styles.logoText}>
        <CustomText numberOfLines={1}> It's pizza time! </CustomText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "crimson",
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    left: "35%",
  },
  logoImage: {
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    // top: 25,
  },
  logoText: {
    justifyContent: "center",
    alignItems: "center",
  },
});
