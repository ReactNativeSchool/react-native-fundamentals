import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});

const Square = ({ text, bgColor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text>{text}</Text>
  </View>
);

export default () => null;
