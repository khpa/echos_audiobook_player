// external dependencies
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

// internal dependencies
import {Library} from "./Library";
import {AddAlbum} from "./AddAlbum/AddAlbum";

const LibraryStack = createStackNavigator();

export const LibraryStackScreen = () => {
  const {Navigator, Screen} = LibraryStack;
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Library" component={Library} />
      <Screen name="AddAlbum" component={AddAlbum} />
    </Navigator>
  );
};
