import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";
// custom
import colors from "../../config/colors";

const CustomButton = ({ title, color = colors.accentColor, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.customButtonStyle, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.customTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  customButtonStyle: {
    alignItems: "center",
    borderRadius: 40,
    height: 35,
    justifyContent: "center",
    margin: 12,
    width: 120,
  },
  customTextStyle: {
    color: "white",
    textTransform: "uppercase",
  },
});
