// external dependencies
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

// internal dependencies
import {Library} from "./Library";
import {BookDetails} from "./BookDetails";

const LibraryStack = createStackNavigator();

export const LibraryStackScreen = () => {
  const {Navigator, Screen} = LibraryStack;
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Library" component={Library} />
      <Screen name="BookDetails" component={BookDetails} />
    </Navigator>
  );
};
