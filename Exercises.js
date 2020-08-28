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
    instructions: require("./exercises/hello-world.md"),
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
    instructions: require("./exercises/capturing-taps.md"),
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
    instructions: require("./exercises/custom-component.md"),
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
    instructions: require("./exercises/state-props.md"),
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
    instructions: require("./exercises/styling.md"),
  },
  {
    lesson: "scrollable-content",
    title: "Scrollable Content",
    code: [
      {
        name: "Exercise",
        source: require("./exercises/scrollable-content").default,
      },
      {
        name: "Final",
        source: require("./solutions/scrollable-content.final").default,
      },
    ],
    instructions: require("./exercises/scrollable-content.md"),
  },
  {
    lesson: "building-a-form",
    title: "Building a Form",
    code: [
      {
        name: "Exercise",
        source: require("./exercises/building-a-form").default,
      },
      {
        name: "Final",
        source: require("./solutions/building-a-form.final").default,
      },
      {
        name: "Extra 1",
        source: require("./solutions/building-a-form.extra-1").default,
      },
    ],
    instructions: require("./exercises/building-a-form.md"),
  },
  {
    lesson: "long-lists",
    title: "Long Lists",
    code: [
      {
        name: "Exercise",
        source: require("./exercises/long-lists").default,
      },
      {
        name: "Final",
        source: require("./solutions/long-lists.final").default,
      },
      {
        name: "Extra 1",
        source: require("./solutions/long-lists.extra-1").default,
      },
    ],
    instructions: require("./exercises/long-lists.md"),
  },
  {
    lesson: "working-with-api",
    title: "Working with an API",
    code: [
      {
        name: "Exercise",
        source: require("./exercises/working-with-api").default,
      },
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
    instructions: require("./exercises/working-with-api.md"),
  },
  {
    lesson: "multiple-files",
    title: "Mulitple Files",
    code: [
      {
        name: "Exercise",
        source: require("./exercises/multiple-files").default,
      },
      {
        name: "Final",
        source: require("./solutions/multiple-files.final").default,
      },
    ],
    instructions: require("./exercises/multiple-files.md"),
  },
  {
    lesson: "class-components",
    title: "Class Components",
    code: [
      {
        name: "Exercise",
        source: require("./exercises/class-components").default,
      },
      {
        name: "Final",
        source: require("./solutions/class-components.final").default,
      },
    ],
    instructions: require("./exercises/class-components.md"),
  },
  {
    lesson: "component-lifecycle",
    title: "Component Lifecycle",
    code: [
      {
        name: "Exercise",
        source: require("./exercises/component-lifecycle").default,
      },
      {
        name: "Final",
        source: require("./solutions/component-lifecycle.final").default,
      },
      {
        name: "Extra 1",
        source: require("./solutions/component-lifecycle.extra-1").default,
      },
    ],
    instructions: require("./exercises/component-lifecycle.md"),
  },
];
