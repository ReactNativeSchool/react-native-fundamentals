# Working with a Remote API

## Background

Just like a web browser, React Native implements the `fetch` and `XMLHttpRequest` APIs. This means that the same logic and packages we would use to fetch data in a web browser will work in React Native. We'll just be talking about the `fetch` API here.

`fetch` does what it sounds like - it let's you fetch a value from somewhere else. When this happens it takes some amount of time to make the request and get the result. This is called an asynchronous action. The way that `fetch` handles these is via a Promise.

Essentially we say "get me the data and then once I have the data continue on". In code this looks like:

```js
fetch("https://example.com")
  .then((response) => response.json())
  .then((response) => console.log(response));
```

So what's happening there?

Well we make a fetch to "https://example.com". Then when we get a response we convert that response to JSON (you can convert it other ways if it's not a JSON response you're getting). Then we log the value.

Whenever you use a promise it's important to catch and handle any errors as well. That results in the following code.

```js
fetch("https://example.com")
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => console.log("error", error));
```

How do you actually request the data though?

You could do it on a button press

```js
onPress = () => {
  fetch("https://example.com")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => console.log("error", error));
};
```

but what about making a request for data when the pages loads? The `useEffect` hook is great for this. Here's some code that would fetch data on page load:

```js
useEffect(() => {
  fetch("https://example.com")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => console.log("error", error));
}, []);
```

The first argument to `useEffect` is the function that should be called. The second argument, the empty array, is any dependencies that would cause that function (the effect) to re-run. Since we only want to call this when the page initially loads we pass it an empty array.

## Exercise

Fetch data from the `https://randomuser.me/api/?results=100&inc=name` url (it returns JSON) and render it in the `FlatList`.

## Extra Credit

1. Implement a loading state while waiting for the data to download.
2. Package your data fetching code into a custom hook so it's easily reusable.

## Helpful Links

- [Fetch API Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Promise Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [useEffect Hook Docs](https://reactjs.org/docs/hooks-reference.html#useeffect)
- [useState Hook Docs](https://reactjs.org/docs/hooks-reference.html#usestate)
