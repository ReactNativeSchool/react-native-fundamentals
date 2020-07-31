import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Text } from "react-native";
import { Asset } from "expo-asset";

import exerciseMap from "../../Exercises";

export const Hint = ({ route }) => {
  const lesson = _.get(route, "params.lesson");
  const [content, setContent] = useState("test");

  useEffect(() => {
    const getData = async () => {
      if (lesson && exerciseMap[lesson]) {
        const src = exerciseMap[lesson].hintSource;
        let file = Asset.fromModule(src);
        file = await fetch(file.uri);
        file = await file.text();
        setContent(file);
      }
    };
    getData();
  }, [lesson]);

  return <Text>{content}</Text>;
};
