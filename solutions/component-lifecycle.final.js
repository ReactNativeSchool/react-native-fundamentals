import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import { listener } from "../support/component-lifecycle";

export default () => {
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    setUpdateCount(0);
    const unsubscibe = listener(() => {
      setUpdateCount((value) => value + 1);
    });

    return () => {
      unsubscibe();
    };
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>The listener has updated {updateCount} time(s).</Text>
    </View>
  );
};
