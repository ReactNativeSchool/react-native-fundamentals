import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import _ from "lodash";

import { Welcome } from "./screens/Welcome";
import { ExerciseList } from "./screens/ExerciseList";
import { Exercise } from "./screens/Exercise";
import { Hint } from "./screens/Hint";

const AppStack = createStackNavigator();
export const App = () => (
  <NavigationContainer>
    <StatusBar style="auto" />

    <AppStack.Navigator>
      <AppStack.Screen name="Welcome" component={Welcome} />
      <AppStack.Screen name="ExerciseList" component={ExerciseList} />
      <AppStack.Screen
        name="Exercise"
        component={Exercise}
        options={({ navigation, route }) => ({
          headerRight: () => {
            const lesson = _.get(route, "params.lesson");

            return (
              <Button
                title="Hint"
                onPress={() => navigation.push("Hint", { lesson })}
              />
            );
          },
        })}
      />
      <AppStack.Screen name="Hint" component={Hint} />
    </AppStack.Navigator>
  </NavigationContainer>
);
