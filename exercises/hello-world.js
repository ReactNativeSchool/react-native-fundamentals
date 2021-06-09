// Hello, World!

// When using JSX React needs to be in scope. This means you have to import it.
import React from "react";

// Unlike working with HTML, the building blocks of our UI are not global. Therefore we need to
// import them.
import { View, Text, StyleSheet } from "react-native";

// TIP: A component is simply a function from which we return JSX.
const App = () => {
    return (
      <View style={styles.box}>
        <Text>Hello World</Text>
      </View>
    )
}

// TIP: Components can nest and have children. <View><Text></Text></View>

// TIP: Styling happens via the style prop. That style, in it's most basic form, is simply an
// object. style={{ ... }}
const styles = StyleSheet.create({
    box: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    }
})
// We need to export App/Component so it's rendered on the screen. To work in this example app you
// need to use export default. Dont' worry about this right now, we'll talk about it later.
export default App;
