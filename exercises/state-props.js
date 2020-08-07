// Using State and Props

// useState is a hook that is a named export from React.
import React from "react";
import { Text, Button, View } from "react-native";

export default () => {
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Text>You've pressed the button: ??? time(s)</Text>
      <Button title="Press me" onPress={() => {}} />
    </View>
  );
};
