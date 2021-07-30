import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";

const SwipeView = ({ textContents, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: "cadetblue",
          width: 70,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{textContents}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default SwipeView;
