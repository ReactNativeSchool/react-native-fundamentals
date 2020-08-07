export default [
  {
    lesson: "hello-world",
    title: "Hello, world!",
    code: [
      {
        name: "Exercise",
        source: require("./exercises/hello-world").default,
      },
      {
        name: "Final",
        source: require("./solutions/hello-world.final").default,
      },
    ],
    hintSource: require("./exercises/hello-world.md"),
  },
  {
    lesson: "capturing-taps",
    title: "Capturing Taps",
    code: [
      {
        name: "Exercise",
        source: require("./exercises/capturing-taps.js").default,
      },
      {
        name: "Final",
        source: require("./solutions/capturing-taps.final").default,
      },
      {
        name: "Extra 1",
        source: require("./solutions/capturing-taps.extra-1").default,
      },
    ],
    hintSource: require("./exercises/capturing-taps.md"),
  },
  {
    lesson: "custom-component",
    title: "Custom Component",
    code: [
      {
        name: "Exercise",
        source: require("./exercises/custom-component").default,
      },
      {
        name: "Final",
        source: require("./solutions/custom-component.final").default,
      },
      {
        name: "Extra 1",
        source: require("./solutions/custom-component.extra-1").default,
      },
    ],
    hintSource: require("./exercises/custom-component.md"),
  },
  {
    lesson: "state-props",
    title: "State & Props",
    code: [
      { name: "Exercise", source: require("./exercises/state-props").default },
      {
        name: "Final",
        source: require("./solutions/state-props.final").default,
      },
      {
        name: "Extra 1",
        source: require("./solutions/state-props.extra-1").default,
      },
    ],
    hintSource: require("./exercises/state-props.md"),
  },
  {
    lesson: "styling",
    title: "Styling",
    code: [
      { name: "Exercise", source: require("./exercises/styling").default },
      { name: "Final", source: require("./solutions/styling.final").default },
      {
        name: "Extra 1",
        source: require("./solutions/styling.extra-1").default,
      },
    ],
    hintSource: require("./exercises/styling.md"),
  },
  {
    lesson: "scrollable-content",
    title: "Scrollable Content",
    code: [
      {
        name: "Final",
        source: require("./solutions/scrollable-content.final").default,
      },
    ],
    // hintSource: require("./exercises/scrollable-content.md"),
  },
  {
    lesson: "building-a-form",
    title: "Building a Form",
    code: [
      {
        name: "Final",
        source: require("./solutions/building-a-form.final").default,
      },
    ],
  },
  {
    lesson: "long-lists",
    title: "Long Lists",
    code: [
      {
        name: "Final",
        source: require("./solutions/long-lists.final").default,
      },
      {
        name: "Extra 1",
        source: require("./solutions/long-lists.extra-1").default,
      },
    ],
  },
  {
    lesson: "working-with-api",
    title: "Working with an API",
    code: [
      {
        name: "Final",
        source: require("./solutions/working-with-api.final").default,
      },
      {
        name: "Extra 1",
        source: require("./solutions/working-with-api.extra-1").default,
      },
      {
        name: "Extra 2",
        source: require("./solutions/working-with-api.extra-2").default,
      },
    ],
  },
  {
    lesson: "multiple-files",
    title: "Mulitple Files",
    code: [
      {
        name: "Final",
        source: require("./solutions/multiple-files.final").default,
      },
    ],
  },
  {
    lesson: "class-components",
    title: "Class Components",
    code: [
      {
        name: "Final",
        source: require("./solutions/class-components.final").default,
      },
    ],
  },
  {
    lesson: "component-lifecycle",
    title: "Component Lifecycle",
    code: [
      {
        name: "Final",
        source: require("./solutions/component-lifecycle.final").default,
      },
      {
        name: "Extra 1",
        source: require("./solutions/component-lifecycle.extra-1").default,
      },
    ],
  },
];
