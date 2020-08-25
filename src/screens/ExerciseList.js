import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SectionList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import _ from "lodash";

import _exercises from "../../Exercises";
import { get, set } from "../util/storage";

const exercises = _.map(_exercises, (exercise, index) => ({
  exerciseNumber: index,
  ...exercise,
}));

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
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  radio: {
    width: 20,
    height: 20,
    borderColor: "rgb(216, 216, 216)",
    borderWidth: StyleSheet.hairlineWidth,
    marginRight: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  radioFilled: {
    backgroundColor: "#007AFF",
    width: 15,
    height: 15,
    borderRadius: 8,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 5,
  },
  sectionText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

const sortSections = (completedLessons) => {
  const incompleteData = [];
  const completeData = [];

  _.forEach(exercises, (exercise) => {
    if (completedLessons.includes(exercise.lesson)) {
      completeData.push(exercise);
    } else {
      incompleteData.push(exercise);
    }
  });

  return [
    { title: "Incomplete", data: _.sortBy(incompleteData, ["exerciseNumber"]) },
    { title: "Complete", data: _.sortBy(completeData, ["exerciseNumber"]) },
  ];
};

export const ExerciseList = ({ navigation }) => {
  const [completedLessons, setCompletedLessons] = useState();
  const [sections, setSections] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (completedLessons) {
      setSections(sortSections(completedLessons));
      set("COMPLETED_LESSONS", JSON.stringify(completedLessons));
    }
  }, [completedLessons]);

  useEffect(() => {
    get("COMPLETED_LESSONS")
      .then((lessons) => {
        if (lessons) {
          setCompletedLessons(JSON.parse(lessons));
        } else {
          setCompletedLessons([]);
        }
      })
      .finally(() => {
        setDataLoaded(true);
      });
  }, []);

  if (!dataLoaded) {
    return null;
  }

  return (
    <SectionList
      style={{ backgroundColor: "#EFEFF4" }}
      contentContainerStyle={{ paddingBottom: 200 }}
      sections={sections}
      keyExtractor={(item) => item.lesson}
      renderSectionHeader={({ section }) => {
        if (section.data.length === 0) {
          return null;
        }
        return (
          <View style={styles.section}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        );
      }}
      stickySectionHeadersEnabled={false}
      renderItem={({ item }) => {
        const isCompleted = completedLessons.includes(item.lesson);

        return (
          <TouchableOpacity
            style={styles.row}
            onPress={() =>
              navigation.push("Exercise", {
                lesson: item.lesson,
                title: item.title,
              })
            }
          >
            <View style={styles.left}>
              <TouchableOpacity
                onPress={() => {
                  if (!isCompleted) {
                    setCompletedLessons((og) => [item.lesson, ...og]);
                  } else {
                    setCompletedLessons((og) => _.without(og, item.lesson));
                  }
                }}
              >
                <View style={styles.radio}>
                  {isCompleted ? <View style={styles.radioFilled} /> : null}
                </View>
              </TouchableOpacity>
              <View>
                <Text style={styles.headerText}>
                  {`Exercise ${item.exerciseNumber + 1}`}
                </Text>
                <Text>{item.title}</Text>
              </View>
            </View>
            <Entypo name="chevron-right" size={32} color="gray" />
          </TouchableOpacity>
        );
      }}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      SectionSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};
