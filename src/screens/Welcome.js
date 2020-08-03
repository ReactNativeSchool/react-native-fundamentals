import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Welcome = ({ onOnboardingComplete = () => {} }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the React Native Fundamentals Workshop!</Text>
      <Button title="Let's Go!" onPress={() => onOnboardingComplete()} />
      <Text>
        Prepared by
        <Text>reactnativeschool.com</Text>
      </Text>
    </View>
  );
};
