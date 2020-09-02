import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import _ from "lodash";
import { Asset } from "expo-asset";
import Markdown from "react-native-markdown-display";

import exercises from "../../Exercises";
import colors from "../constants/colors";

const mdStyles = {
  heading1: {
    flexDirection: "row",
    fontSize: 32,
    borderBottomColor: "rgba(27,31,35,.2)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
    paddingBottom: 5,
    marginTop: 10,
  },
  heading2: {
    flexDirection: "row",
    fontSize: 24,
    borderBottomColor: "rgba(27,31,35,.2)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  fence: {
    marginVertical: 10,
  },
  link: {
    color: colors.link,
  },
};

export const Instructions = ({ route }) => {
  const lesson = _.get(route, "params.lesson");
  const [content, setContent] = useState("");

  useEffect(() => {
    const getData = async () => {
      const lessonData = _.find(exercises, (e) => e.lesson === lesson);

      if (lesson && lessonData) {
        const src = lessonData.instructions;
        let file = Asset.fromModule(src);
        file = await fetch(file.uri);
        file = await file.text();
        setContent(file);
      }
    };
    getData();
  }, [lesson]);

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#fff",
      }}
    >
      <Markdown style={mdStyles} mergeStyle>
        {content}
      </Markdown>
      <View style={{ width: 1, height: 200, backgroundColor: "transparent" }} />
    </ScrollView>
  );
};
