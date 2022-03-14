import { LogBox } from "react-native";
import { App } from "./src/index";

LogBox.ignoreLogs([
  // Courier isn't used anywhere in the app. I'm not sure why it's throwing this warning.
  'fontFamily "Courier" is not a system font and has not been loaded through Font.loadAsync.',
]);

export default App;
