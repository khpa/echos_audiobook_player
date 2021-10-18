// TODO: always try to write modules you could export all by themselves into another project

// ! needs to be imported at the top (https://reactnavigation.org/docs/stack-navigator)
import "react-native-gesture-handler";

// external dependencies
import {AppRegistry} from "react-native";

// internal dependencies
import {Root as App} from "./src";
import {name as appName} from "./app.json";

AppRegistry.registerComponent(appName, () => App);
