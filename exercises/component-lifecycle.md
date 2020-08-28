# Component Lifecycle

## Background

- Different component states (did mount, will unmount, did update)
- Explain how to tap into them
- Explain `listener` api

## Exercise

Upon component mount, start listening to the `listener`. Store in state how many times it has been called. When leaving the exerercise screen and going back to the exercise list screen the listener should stop.

## Extra Credit

1. While the component is still mounted, create a way to let you unsubscribe from one listener and subscribe to a new one. When doing so the old listener should unsubscribe and no long be running.

## Helpful Links

- [Effect Hook](https://reactjs.org/docs/hooks-overview.html#effect-hook)
- [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
