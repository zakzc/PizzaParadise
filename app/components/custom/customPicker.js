import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomText from "./customText";
import CustomView from "../../custom/customView";
import appStyles from "../../config/appStyles";
import ItemPicker from "./customPicker_ItemPicker";

function CustomPicker({
  iconName,
  items,
  onSelectItem,
  placeholder,
  itemPickerComponent = ItemPicker,
  selectedItem,
  width = "100%",
}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalShow(true)}>
        <View style={styles.container}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={"white"}
              style={styles.icon}
            />
          )}
          <CustomText numberOfLines={1} style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </CustomText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={"white"}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalShow} animationType="slide">
        <CustomView>
          <Button title="Close" onPress={() => setModalShow(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <ItemPickerComponent
                label={item.label}
                onPress={() => {
                  setModalShow(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </CustomView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cadetblue",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default CustomPicker;
