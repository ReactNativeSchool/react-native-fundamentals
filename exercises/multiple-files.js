import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export const Button = ({ text, onPress, buttonStyle = {} }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: "#ff637c",
      alignSelf: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 15,
      ...buttonStyle,
    }}
  >
    <Text style={{ color: "#fff" }}>{text}</Text>
  </TouchableOpacity>
);

export default () => (
  <View style={{ marginTop: 20 }}>
    <Button text="Say hello" onPress={() => alert("hello!")} />
  </View>
);
