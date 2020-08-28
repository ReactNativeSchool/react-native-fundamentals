# Working with a Remote API

## Background

- RN implements the `fetch` API just like it is on the web
- `fetch` uses promises
- Ensure you only make a request when the page first loads
- Store the result in state so that it re-renders when it updates

## Exercise

Fetch data from the `https://randomuser.me/api/?results=100&inc=name` url and render it in the `FlatList`.

## Extra Credit

1. Implement a loading state while waiting for the data to download.
2. Package your data fetching code into a custom hook so it's easily reusable.

## Helpful Links

- [Fetch API Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [useEffect Hook Docs](https://reactjs.org/docs/hooks-reference.html#useeffect)
- [useState Hook Docs](https://reactjs.org/docs/hooks-reference.html#usestate)
