import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableWithoutFeedback } from "react-native";
// comps
import MenuCard from "./menuCard";
import Separator from "../views/separator";
import SwipeView from "../views/swipeView";
// ui
import { MaterialCommunityIcons } from "@expo/vector-icons";
// photos
import cappricciosa from "../../assets/images/cappricciosa.png";
import fourCheese from "../../assets/images/fourCheese.png";
import pepperoni from "../../assets/images/pepperoni.png";
import margheritta from "../../assets/images/margheritta.png";
import vegan from "../../assets/images/vegan.png";

const initialMessages = [
  {
    id: 1,
    title: "Pizza Cappricciosa",
    description: "Topping: Italian baked ham, mushroom, artichoke and tomato",
    image: cappricciosa,
  },
  {
    id: 2,
    title: "Four Cheese",
    description: "Topping:",
    image: fourCheese,
  },
  {
    id: 3,
    title: "Margheritta",
    description: "Topping:",
    image: margheritta,
  },
  {
    id: 4,
    title: "Pepperoni",
    description: "Topping:",
    image: pepperoni,
  },
  {
    id: 5,
    title: "Vegan",
    description: "Topping:",
    image: vegan,
  },
];

const MenuList = ({ onPress }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshPage, setRefreshPage] = useState(false);

  const handleDelete = (item) => {
    console.log("Item: ", item);
    setMessages(messages.filter((m) => m.id !== item.id));
  };

  return (
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
          imageURI={item.image}
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
  );
};

const styles = StyleSheet.create({
  listStyle: {
    backgroundColor: "#f3f3f3",
    // padding: 5,
  },
});

export default MenuList;
