import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
// * Other 3rd part imports
// ui: icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
// * local imports
// config
// import colors from "../../config/colors";
// comps
import MenuCard from "./Menu/menuCard";
// custom
import CustomButton from "./custom/customButton";
import CustomText from "./custom/customText";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={20} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" size={20} />
      </View>
      <View>
        <CustomText numberOfLines={1}>Hello again</CustomText>
      </View>
      <View style={styles.cardArea}>
        <MenuCard cardHeading="Hello" cardText="there" />
      </View>
      <View style={styles.iconPositioning}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "aliceblue" },
  iconPositioning: { top: 150 },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
    backgroundColor: "dodgerblue",
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    left: 280,
    backgroundColor: "dodgerblue",
  },
  cardArea: {
    top: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ViewImageScreen;
