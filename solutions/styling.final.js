import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    // justifyContent: "space-between",
    // justifyContent: "center",
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7ce0f9",
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Square 1</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#4dc2c2" }]}>
        <Text>Square 2</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#ff637c" }]}>
        <Text>Square 3</Text>
      </View>
    </View>
  );
};
