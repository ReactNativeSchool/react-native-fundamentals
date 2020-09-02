import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SectionList,
  StatusBar,
  Linking,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import _ from "lodash";

import _exercises from "../../Exercises";
import { get, set } from "../util/storage";
import colors from "../constants/colors";

const exercises = _.map(_exercises, (exercise, index) => ({
  exerciseNumber: index,
  ...exercise,
}));

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#fff",
    flex: 1,
    paddingLeft: 20,
    paddingRight: 10,
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
    color: "rgba(0, 0, 0, 0.9)",
  },
  titleText: {
    fontSize: 15,
    marginTop: 1,
    color: "rgba(0, 0, 0, 0.9)",
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
    backgroundColor: colors.link,
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

  if (incompleteData.length === 0) {
    incompleteData.push({
      exerciseNumber: 0,
      isPromo: true,
      title: "Keep Learning - Visit React Native School",
    });
  }

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
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <SectionList
        style={{ backgroundColor: "#EFEFF4" }}
        contentContainerStyle={{ paddingBottom: 200 }}
        sections={sections}
        keyExtractor={(item) => item.lesson}
        renderSectionHeader={({ section }) => {
          if (section.data.length === 0 && section.title !== "Incomplete") {
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
              onPress={() => {
                if (item.isPromo) {
                  Linking.openURL("https://reactnativeschool.com");
                } else {
                  navigation.push("Exercise", {
                    lesson: item.lesson,
                    title: item.title,
                  });
                }
              }}
            >
              <View style={styles.left}>
                {!item.isPromo ? (
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
                ) : null}
                <View>
                  <Text style={styles.headerText}>
                    {!item.isPromo
                      ? `Exercise ${item.exerciseNumber + 1}`
                      : "Congrats!"}
                  </Text>
                  <Text style={styles.titleText}>{item.title}</Text>
                </View>
              </View>
              <Entypo
                name={item.isPromo ? "export" : "chevron-right"}
                size={item.isPromo ? 28 : 32}
                color="rgba(0, 0, 0, 0.4)"
              />
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        SectionSeparatorComponent={() => <View style={styles.separator} />}
      />
    </>
  );
};
