import React, { useEffect } from "react";
import _ from "lodash";

import exercises from "../../Exercises";

export const Exercise = ({ navigation, route }) => {
  const lesson = _.get(route, "params.lesson");
  const lessonData = _.find(exercises, (e) => e.lesson === lesson);

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
