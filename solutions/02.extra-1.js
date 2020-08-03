import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";

export default () => {
  return (
    <View>
      <Button title="Button 1" onPress={() => alert("hello!")} />
      <TouchableOpacity
        onPress={() => alert("hello 2!")}
        style={{
          backgroundColor: "blue",
          paddingHorizontal: 10,
          paddingVertical: 5,
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
};
