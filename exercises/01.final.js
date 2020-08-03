import React from "react";
import { View, Text } from "react-native";

export default () => (
  <View
    style={{
      flex: 1,
      justifyContent: "space-around",
      // justifyContent: "space-between",
      // justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      // flexDirection: 'column'
    }}
  >
    <View
      style={{
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7ce0f9",
      }}
    >
      <Text>Square 1</Text>
    </View>
    <View
      style={{
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#caeccf",
      }}
    >
      <Text>Square 2</Text>
    </View>
    <View
      style={{
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#76c4ae",
      }}
    >
      <Text>Square 3</Text>
    </View>
  </View>
);
