import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
// icon
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MenuButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="pizza" color="white" size={40} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "tomato",
    borderColor: "white",
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});
