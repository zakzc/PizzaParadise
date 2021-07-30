import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
// comps
import MenuCard from "../menuCard";
import Separator from "../views/separator";
import SwipeView from "../views/swipeView";
// custom comps
import CustomView from "../custom/customView";
// ui
import { MaterialCommunityIcons } from "@expo/vector-icons";

const initialMessages = [
  { id: 1, title: "Title 1", description: "message 1" },
  { id: 2, title: "Title 2", description: "message 2" },
  { id: 3, title: "Title 3", description: "message 3" },
];

const MenuList = ({ onPress }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshPage, setRefreshPage] = useState(false);

  const handleDelete = (item) => {
    console.log("Item: ", item);
    setMessages(messages.filter((m) => m.id !== item.id));
  };

  return (
    <CustomView style={styles.container}>
      <FlatList
        style={styles.listStyle}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={Separator}
        refreshing={refreshPage}
        onRefresh={() => {
          setMessages(initialMessages);
          setRefreshPage(false);
        }}
        renderItem={({ item }) => (
          <MenuCard
            cardHeading={item.title}
            cardText={item.description}
            swipeAction={() => (
              <SwipeView
                textContents={
                  <MaterialCommunityIcons
                    size={35}
                    name="trash-can-outline"
                    color="white"
                  />
                }
                onPress={() => handleDelete(item)}
              />
            )}
          />
        )}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cornsilk",
  },
  listStyle: {
    backgroundColor: "white",
    padding: 10,
  },
});

export default MenuList;
