# Rendering Long Lists

## Background

When you have longs lists of data the `ScrollView` component won't cut it - it's just not built for it.

That's where the `FlatList` and `SectionList` come into play. They're both convenience wrappers around the `VirtualizedList` component which "massively improves memory consumption and performance of large lists by maintaining a finite render window of active items and replacing all items outside of the render window with appropriately sized blank space."

Basically, this means that these components are only rendering what's being shown on the screen. This frees up memory.

What's the difference between a `FlatList` and a `SectionList`? A `FlatList` is going to render a simple array of data. A `SectionList` is going to render groups of data.

Given this data:

```js
[
  {
    id: 1,
    title: "Hello",
  },
  {
    id: 2,
    title: "Good bye",
  },
];
```

A `FlatList` will be your best bet.

Alternatively, given the following data:

```js
[
  {
    title: "Greetings",
    data: [
      {
        id: 1,
        title: "Hello",
      },
      {
        id: 2,
        title: "Hi",
      },
    ],
  },
  {
    title: "Farewells",
    data: [
      {
        id: 3,
        title: "Good bye",
      },
      {
        id: 4,
        title: "See ya later",
      },
    ],
  },
];
```

A `SectionList` will be your best bet. It's important to note that each section's list of data needs to exist on the `data` key.

## Exercise

Render the array of people using the `FlatList` component.

## Extra Credit

1. Group the people based on their last name into sections and render these sections using a `SectionList`

## Helpful Links

- [FlatList](https://reactnative.dev/docs/flatlist#docsNav)
- [SectionList](https://reactnative.dev/docs/sectionlist#docsNav)
