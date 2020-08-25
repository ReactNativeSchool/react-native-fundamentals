# Building a Form

## Background

Much like you would have an `input` in html, React Native has the `TextInput` component. The big difference between the two is that, with a `TextInput`, you get no styling with it - you're responsible for it all.

When working with text inputs/forms in React Native you've got two ways to go about it:

1. Controlled
2. Uncontrolled

Let's go with uncontrolled first. This just means that we're listening to what the user is inputting into the `TextInput` but don't control what is being displayed. We can listen to it but we can't tell it what to show.

Controlled on the other hand means that we can tell the `TextInput` what to display, much like we would a `Text` component but still let them input text through the keyboard.

## Exercise

Using the `TextInput` component capture a user's name and, upon a button press, `alert` their name back to them. Add some style to the `TextInput` while you're there!

## Extra Credit

1. Upon button press clear the user's name from the `TextInput`.

## Helpful Links

- [TextInput Docs](https://reactnative.dev/docs/textinput)
