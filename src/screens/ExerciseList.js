import React from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import exercises from "../../Exercises";

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(27,31,35,.05)",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  titleText: {
    fontSize: 16,
    paddingTop: 2,
  },
});

export const ExerciseList = ({ navigation }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.lesson}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.row}
            onPress={() =>
              navigation.push("Exercise", {
                lesson: item.lesson,
                title: item.title,
              })
            }
          >
            <View>
              <Text style={styles.headerText}>{`Exercise ${index + 1}`}</Text>
              <Text>{item.title}</Text>
            </View>
            <Entypo name="chevron-right" size={32} color="gray" />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};
