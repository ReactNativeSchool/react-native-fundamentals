import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

const Button = ({ text, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: "#ff637c",
      alignSelf: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 15,
    }}
  >
    <Text style={{ color: "#fff" }}>{text}</Text>
  </TouchableOpacity>
);

export default () => (
  <View>
    <Button text="Say hello" onPress={() => alert("hello!")} />
    <Button text="Say goodbye" onPress={() => alert("goodbye!")} />
  </View>
);
