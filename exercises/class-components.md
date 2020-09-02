# Class Based Components

## Background

Throughout this workshop we've been using functional components. In reality, this is what you'll most likely be writing.

BUT they're a somewhat new concept. That means that some older tutorials/documentation will use the previous API - class components.

This API is still perfectly valid and will continue to be supported. Sometimes I still write them because I find it easier to reason about certain problems using that API.

With that said I wanted to make sure I introduce this API to you.

React class components use the `class` keyword and extend a `React.Component`.

```jsx
import React from "react";

class Example extends React.Component {}

export default Example;
```

Since we're extending `React.Component` we can specify implementations of our component. The major one is `render`. This is where we render the component the user will interact with.

```jsx
import React from "react";
import { View, Text } from "react-native";

class Example extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello!</Text>
      </View>
    );
  }
}

export default Example;
```

Tracking and using component state is also different.

```jsx
import React from "react";
import { View, Text } from "react-native";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello",
    };
  }
  render() {
    return (
      <View>
        <Text>{this.state.text}!</Text>
      </View>
    );
  }
}

export default Example;
```

We initialize it in a `constructor` and then access it in our component via `this.state`.

> Note: The super(props) is just some syntax you have to write. The official docs cover this in more detail.

Now changing state is also different.

You _never_ want to modify a value directly like so `this.state.text = 'goodbye'`. This will circumvent the React re-rendering engine and cause all kinds of problems.

Rather, you will change state via `this.setState({ text: "goodbye" })`.

`this.setState` is available because our component extends `React.Component` and will then modify `this.state` and ensure our component re-renders.

## Exercise

Using the `React.Component` render a screen that has a button. Count each time the button has been pressed and store it in state.

## Helpful Links

- [React.Component Docs](https://reactjs.org/docs/react-component.html)
- [JavaScript Class Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
