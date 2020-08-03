import React, { useEffect } from "react";
import _ from "lodash";

import exerciseMap from "../../Exercises";

export const Exercise = ({ navigation, route }) => {
  const lesson = _.get(route, "params.lesson");
  const lessonData = _.get(exerciseMap, lesson, {});

  useEffect(() => {
    if (!lessonData.hintSource) {
      navigation.setOptions({
        headerRight: null,
      });
    }
  }, []);

  if (lessonData.source) {
    const Output = lessonData.source;

    return <Output />;
  }

  return null;
};
