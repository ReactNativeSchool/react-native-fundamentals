import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Screen1 = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Screen 1</Text>
    <Button onPress={() => navigation.push("Screen2")} title="Next Screen" />
  </View>
);

const Screen2 = () => (
  <View style={styles.container}>
    <Text>Screen 1</Text>
    <Button onPress={() => {}} title="Next Screen" />
  </View>
);

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ title: "Screen 1" }}
      />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
