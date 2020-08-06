import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

import { listener2 } from "../support/component-lifecycle";

export default () => {
  const [updateCount, setUpdateCount] = useState(0);
  const [listenerName, setListenerName] = useState("cat");

  useEffect(() => {
    setUpdateCount(0);
    const unsubscibe = listener2(listenerName, () => {
      setUpdateCount((value) => value + 1);
    });

    return () => {
      unsubscibe();
    };
  }, [listenerName]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>The listener has updated {updateCount} time(s).</Text>
      <Text>Currently listening to the {listenerName} listener.</Text>

      <Button
        title="Change Listener Name"
        onPress={() => {
          setListenerName((value) => {
            if (value === "cat") {
              return setListenerName("dog");
            }

            return setListenerName("cat");
          });
        }}
      />
    </View>
  );
};
