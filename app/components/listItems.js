import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
// custom comps
import CustomText from "./custom/customText";
// icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { green } from "ansi-colors";

export default function ListItems({
  listHeading,
  listText,
  swipeAction,
  ImageComponent,
}) {
  return (
    <Swipeable renderRightActions={swipeAction}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => console.log("Pressed: ")}
      >
        <View style={styles.container}>
          {ImageComponent}
          <View style={styles.textArea}>
            <CustomText numberOfLines={1} style={styles.customHeadingStyle}>
              {listHeading}
            </CustomText>
            {listText && (
              <Text numberOfLines={2} style={styles.customTextStyle}>
                {listText}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons
            style={styles.chevronStyle}
            name={"chevron-right"}
            size={30}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // flex: 1,
    flexDirection: "row",
    margin: 5,
    padding: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  textArea: { paddingLeft: 15 },
  chevronStyle: {
    alignItems: "center",
    marginLeft: "65%",
    color: "white",
  },
});
