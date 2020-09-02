# Splitting Code into Multiple Files

## Background

In React Native we leverage JavaScript Modules. These allow us to export code from one file and import it into another file.

You've actually been using them already! In all of your exercise files you've had to have `export default` at the end of the file so the app picks up your changes. That's modules in action!

That brings us to our first point - how to get code _out_ of a file. That's where the `export` keyword comes in. Using this keyword means that you're allowing other files to import that function.

There are two approaches with exports - default and named.

With a default export you can only export one thing from that file. This would look like:

```js
const sayHello = () => console.log("hello!");

export default sayHello;
```

Alternatively there are named exports. With named exports you can export multiple functions.

```js
export const sayHello = () => console.log("hello!");
export const sayGoodbye = () => console.log("good bye!");
```

All I had to do was place the `export` keyword in from out my function definition.

Okay, so how do we get that code in another file? By using the `import` keyword!

Say we want to get a default export - we would use

```js
import sayHello from "./conversations";
```

What I've done here is used the import keyword, applied a name to the function (this doesn't have to match the name of the function that was exported), and then I specify from where that code is.

Looking at named imports.

```js
import { sayHello, sayGoodbye } from "./conversations";
```

It's very similar. This time however the names of the exported functions matter.

It's also important to note that the path (the part after `from`) is relative. That means that that you need to specify the path from the file that you're importing from to the file that is exporting.

The above examples illustrate if the exporting file was right next to the file that is importing.

If it was in a directory above you would use `import sayHello from '../conversations';` (the `..` mean go "up" a directory).

Or if it was nested in another directory `import sayHello from './utility/conversations';`.

## Exercise

Take the `Button` component and put it in it's own file then import the component from that file.

## Helpful Links

- [JavaScript modules in depth](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
