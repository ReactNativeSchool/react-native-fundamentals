import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Asset } from "expo-asset";
import Markdown from "react-native-markdown-display";

import exerciseMap from "../../Exercises";

export const Hint = ({ route }) => {
  const lesson = _.get(route, "params.lesson");
  const [content, setContent] = useState("");

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

  return <Markdown>{content}</Markdown>;
};
