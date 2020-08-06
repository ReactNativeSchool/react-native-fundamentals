# Basic Hello, World

## Background

React Native is built on JSX. JSX is a HTML like syntax that allows us to declaratively build our UI.

A few important notes:

- Whenever you use JSX React must be in scope (that means imported in the file).
- Unlike on the web, React Native components are not global. Therefore we have to import them.

You'll here me refer to components having "children" a lot. This simply means some JSX is rendered inside of other JSX, like so:

```jsx
<View>
  <Text>I'm text</Text>
</View>
```

You can see that different components have different children. A `View` can take another component whereas `Text` takes plain text as a child. You'll learn more about which component to use and when as we go along.

Alternatively, you can pass `props` to some components. This is simply another way of passing data to a component. For example:

```jsx
<View exampleProp="this is an example"></View>
```

You can see that I define the prop `exampleProp` and pass a value to it.

## Exercise

Render a square with a background color. Inside of the square render the text "Hello, world".

## Helpful Links

- [React Native View Docs](https://reactnative.dev/docs/view)
- [React Native Text Docs](https://reactnative.dev/docs/text)
