import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {},
});

export const Welcome = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Welcome to the React Native Fundamentals Workshop!</Text>
    <Button title="Let's Go!" onPress={() => navigation.push("ExerciseList")} />
    <Text>
      Prepared by
      <Text>reactnativeschool.com</Text>
    </Text>
  </View>
);
