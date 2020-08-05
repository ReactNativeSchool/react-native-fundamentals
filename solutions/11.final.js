import React from "react";
import { View, Button, Text } from "react-native";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressCount: 0,
    };
  }

  render() {
    return (
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text>Press Count: {this.state.pressCount}</Text>
        <Button
          title="Press Me"
          onPress={() =>
            this.setState((state) => {
              return {
                pressCount: state.pressCount + 1,
              };
            })
          }
        />
      </View>
    );
  }
}

export default App;
