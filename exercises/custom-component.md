# Custom Component

## Background

Previously we've been exclusively using component from React Native. But what about our creating our own?

That's one of the great things about React (Native) - how easy it is to build and reuse our own components.

At their core, most components use React Native primitives (the core components like `View` or `Text`), but have expanded functionality.

A component can be as simply as a function that returns JSX.

## Exercise

Build your own button component that accepts an `onPress` and `text` prop. Use the `TouchableOpacity` and `Text` components to accomplish this.

Then, using your component, render two buttons that say different things and do different things.

## Extra Credit

1. Have your button accept a `buttonStyle` prop as well that will _merge_ its custom styles with your button's default styles.
