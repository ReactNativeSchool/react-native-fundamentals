import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";

const EXERCISES = [
  {
    title: "Create a React Native App",
    lesson: "01",
  },
];

export const ExerciseList = ({ navigation }) => (
  <FlatList
    data={EXERCISES}
    keyExtractor={(item) => item.lesson}
    renderItem={({ item }) => (
      <TouchableOpacity
        onPress={() => navigation.push("Exercise", { lesson: item.lesson })}
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )}
  />
);
