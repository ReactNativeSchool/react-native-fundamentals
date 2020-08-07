# Using State and Props

## Background

We've taken a look at props previously - props allow us to pass data down to a component to interact with it. These props can be static values or dynamic (changing) ones.

Where would a dynamic value come from? In React (Native) land that's where State comes in. State is a means to track a value and, upon change, tell React that something has changed and it should recompute what is being displayed on the screen.

The way you'll interact with state is via the `useState` hook from React.

The `useState` hook is a function that takes 1 argument - that argument is the initial value.

`useState` also returns an array of items. The first item is the value and the second value is a function that you'll call to change it.

You may be wondering why all this complexity? Can't I just define a variable and change it's value?

```js
let greeting = "hello";

const changeGreeting = () => {
  greeting = "hey";
};

// greeting === 'hello'
changeGreeting();
// greeting === 'hey'
```

You could, but then React won't know that it's changed and won't update the UI. We need to use the hook so that React can keep track of what's going on.

```js
const [greeting, setGreetingValue] = useState("hello");

const changeGreeting = () => {
  setGreeting("hey");
};

// greeting === 'hello'
changeGreeting();
// greeting === 'hey'
```

This is the most basic way (and most common way) you'll store values in a React (Native) app.

There are a few important rules when it comes to using hooks (I encourage you to read the "Introducing Hooks" article below) but you'll typically be fine if you follow these two rules:

1. Hooks can only be used in components (functions that return JSX)
2. Hooks (like `useState`) should be initialized at the very top of the component function. They should never be conditionally called.

## Exercise

Track how many times a user presses the button and display that number.

## Extra Credit

1. Dynamically update the text prop of the button as you press it.

## Helpful Links

- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
