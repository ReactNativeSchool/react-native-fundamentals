import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

import exercises from "../../Exercises";

export const Exercise = ({ navigation, route }) => {
  const lesson = _.get(route, "params.lesson");
  const lessonData = _.find(exercises, (e) => e.lesson === lesson);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (!lessonData.instructions) {
      navigation.setOptions({
        headerRight: null,
      });
    }
  }, []);

  if (lessonData.code && lessonData.code.length > 0) {
    const Output = lessonData.code[tabIndex].source;
    return (
      <>
        <View style={{ flex: 1 }}>{Output ? <Output /> : null}</View>
        <SafeAreaView style={{ backgroundColor: "#fff" }}>
          <View
            style={{
              paddingVertical: 20,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {lessonData.code.map((ex, index) => {
              const selected = tabIndex === index;
              return (
                <TouchableOpacity
                  key={ex.name}
                  onPress={() => setTabIndex(index)}
                >
                  <Text style={selected ? { color: "red" } : {}}>
                    {ex.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </SafeAreaView>
      </>
    );
  }

  return null;
};
