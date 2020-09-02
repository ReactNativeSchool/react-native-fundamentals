import React, { useEffect, useState } from "react";
import _ from "lodash";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

import exercises from "../../Exercises";
import colors from "../constants/colors";

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
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <View style={{ flex: 1 }}>{Output ? <Output /> : null}</View>
        <SafeAreaView style={{ backgroundColor: "#fff" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              borderTopWidth: StyleSheet.hairlineWidth,
              borderTopColor: "rgb(216, 216, 216)",
            }}
          >
            {lessonData.code.map((ex, index) => {
              const selected = tabIndex === index;
              return (
                <TouchableOpacity
                  key={ex.name}
                  onPress={() => setTabIndex(index)}
                  style={{
                    paddingVertical: 20,
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <Text style={selected ? { color: colors.link } : {}}>
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
