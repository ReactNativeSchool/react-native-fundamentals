# Component Lifecycle

## Background

A component has a lifecycle, much like we do.

They're born (mount).

Things change (update).

And then they die (unmount).

Sometimes we need to take actions based on where the component is in the lifecycle.

The way we do this is via the `useEffect` hook from React, which we've previously discussed. If we write the following code:

```js
useEffect(() => {
  console.log("hello");
}, []);
```

We'll see "hello" logged when the component mounts (is born) and no other time.

What if we want to say goodbye when the component is about to unmount (die)?

```js
useEffect(() => {
  console.log('hello')

  return () => {
    console.log('goodbye)
  }
}, [])
```

If we return a function from a hook it will be called when that component unmounts.

Now, the statements above are only true because I'm passed an empty array as a second argument to `useEffect`. This means that this component has no dependencies that would cause it to re-run - it only happens when it mounts.

What if we want to log a message when someone changes a value in state? Well we would pass that value as a dependency.

```js
const [count, setCount] = useState(0);

useEffect(() => {
  if (count % 2) {
    console.log("an even number, nice!");
  } else {
    console.log("an odd one, eh?");
  }
}, [count]);
```

In this case, each time the `count` value changes our effect will re-run and log a unique message depending on if the new value is even or odd.

If you were to return a function from this effect it will be called each time that `count` changes as well.

```js
const [count, setCount] = useState(0);

useEffect(() => {
  if (count % 2) {
    console.log("an even number, nice!");
  } else {
    console.log("an odd one, eh?");
  }

  return () => {
    console.log("oh the count changed!");
  };
}, [count]);
```

A common use case for this is listeners. Say you have a chat app and when you're in a room you want to listen to all the new messages but once you leave that room you don't need to listen to the new messages there.

That brings me to the exercise for this lesson. You'll see that you're importing a `listener` function. This function, once started, will periodically console.log some text. It also returns an `unsubscribe` function that allows you to stop that logging.

## Exercise

Upon component mount, start listening to the `listener`. Store in state how many times it has been called. When leaving the exercise screen and going back to the exercise list screen the listener should stop.

## Extra Credit

1. While the component is still mounted, create a way to let you unsubscribe from one listener and subscribe to a new one. When doing so the old listener should unsubscribe and no long be running.

## Helpful Links

- [Effect Hook](https://reactjs.org/docs/hooks-overview.html#effect-hook)
- [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
