import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "./customText";

function ItemPicker({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomText numberOfLines={1} style={styles.text}>
        {label}
      </CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    color: "blue",
  },
});

export default ItemPicker;
