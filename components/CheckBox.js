import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons/MaterialCommunityIcons";

const CheckBox = (props) => {
  const { title = "Default Title", isChecked, onPress } = props;

  const iconName = isChecked ? "checkbox-marked" : "checkbox-blank-outline";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={onPress}>
        <MaterialCommunityIcons name={iconName} size={24} color="#000" />
      </Pressable>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 325,
    marginTop: 17,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    color: "#000",
    marginLeft: 5,
  },
});