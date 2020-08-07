import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Button, View } from "react-native";
import _ from "lodash";

import { Welcome } from "./screens/Welcome";
import { ExerciseList } from "./screens/ExerciseList";
import { Exercise } from "./screens/Exercise";
import { Instructions } from "./screens/Instructions";
import { get, set } from "./util/storage";

const AppStack = createStackNavigator();
const Main = () => (
  <AppStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
    <AppStack.Screen
      name="ExerciseList"
      component={ExerciseList}
      options={{ title: "Exercises" }}
    />
    <AppStack.Screen
      name="Exercise"
      component={Exercise}
      options={({ navigation, route }) => ({
        title: route.params.title,
        headerRight: () => {
          const lesson = _.get(route, "params.lesson");

          return (
            <View style={{ paddingRight: 10 }}>
              <Button
                title="Instructions"
                onPress={() => navigation.push("Instructions", { lesson })}
              />
            </View>
          );
        },
      })}
    />
  </AppStack.Navigator>
);

const RootStack = createStackNavigator();
const Root = () => {
  const [onboardingComplete, setOnboardingComplete] = useState();

  useEffect(() => {
    get("ONBOARDING_COMPLETE").then((onboarded) => {
      if (onboarded) {
        setOnboardingComplete(true);
      } else {
        setOnboardingComplete(false);
      }
    });
  }, []);

  if (onboardingComplete === undefined) {
    return null;
  }

  if (!onboardingComplete) {
    return (
      <Welcome
        onOnboardingComplete={() => {
          set("ONBOARDING_COMPLETE", "true");
          setOnboardingComplete(true);
        }}
      />
    );
  }

  return (
    <RootStack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    >
      <RootStack.Screen name="Main" component={Main} />
      <RootStack.Screen
        name="Instructions"
        component={Instructions}
        options={{ headerShown: true, title: "Instructions" }}
      />
    </RootStack.Navigator>
  );
};

export const App = () => (
  <NavigationContainer>
    <StatusBar style="auto" />
    <Root />
  </NavigationContainer>
);
