import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Linking,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  link: {
    color: "#007aff",
  },
});

export const Welcome = ({ onOnboardingComplete = () => {} }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View />
      <View>
        <Text style={styles.title}>
          Welcome to the React Native Fundamentals Workshop!
        </Text>
        <Button title="Get Started" onPress={() => onOnboardingComplete()} />
      </View>
      <Text>
        {"Prepared By "}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://reactnativeschool.com")}
        >
          React Native School
        </Text>
      </Text>
    </SafeAreaView>
  );
};
