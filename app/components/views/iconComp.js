import React from "react";
import { View, StyleSheet } from "react-native";
// icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function IconComp({
  iconName = "email",
  size = 40,
  backgroundColor = "tomato",
  iconColor = "white",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={iconName}
        color={iconColor}
        size={size * 0.6}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: { width: { size } },
// });
