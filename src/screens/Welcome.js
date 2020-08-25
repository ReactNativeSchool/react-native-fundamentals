import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Linking,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";

import colors from "../constants/colors";

const screen = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.brand,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
    color: "#fff",
    fontFamily: "Menlo",
  },
  btn: {
    backgroundColor: colors.accent,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  logo: {
    width: screen.width * 0.8,
    height: screen.width * 0.8,
    resizeMode: "contain",
    position: "absolute",
    bottom: -80,
    opacity: 0.2,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
});

export const Welcome = ({ onOnboardingComplete = () => {} }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.brand} />
      <View />
      <View>
        <Text style={styles.title}>
          Welcome to the React Native Fundamentals Workshop!
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => onOnboardingComplete()}
          activeOpacity={0.8}
        >
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.logo} source={require("../assets/RNS.png")} />
      <Text
        style={styles.text}
        onPress={() => Linking.openURL("https://reactnativeschool.com")}
      >
        Prepared by React Native School
      </Text>
    </SafeAreaView>
  );
};
