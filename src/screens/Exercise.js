import React from "react";
import _ from "lodash";

import exerciseMap from "../../Exercises";

export const Exercise = ({ route }) => {
  const lesson = _.get(route, "params.lesson");

  if (lesson && exerciseMap[lesson]) {
    const Output = exerciseMap[lesson].source;

    return <Output />;
  }

  return null;
};
