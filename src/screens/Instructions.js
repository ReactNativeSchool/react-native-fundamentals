import React, { useEffect, useState } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import _ from "lodash";
import { Asset } from "expo-asset";
import Markdown from "react-native-markdown-display";

import exercises from "../../Exercises";

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Markdown>{content}</Markdown>
      </ScrollView>
    </SafeAreaView>
  );
};
