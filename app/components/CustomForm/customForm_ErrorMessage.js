import React from "react";
import { View, StyleSheet } from "react-native";
// custom
import CustomText from "../custom/customText";

export default function ErrorMessage({ error }) {
  if (!error) return null;
  return (
    <View style={styles.container}>
      <CustomText numberOfLines={1} style={styles.errorMessageStyle}>
        {error}
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  errorMessageStyle: {
    color: "crimson",
    // backgroundColor: "lightgray",
    borderRadius: 20,
    padding: 5,
    marginHorizontal: 15,
  },
});
