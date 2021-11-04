// external dependencies
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";

// internal dependencies
import {AddAlbum} from "./AddAlbum";
import {AddAlbumPopup} from "./AddAlbumPopup";

const AddAlbumStack = createStackNavigator();

export const AddAlbumStackScreen = () => {
  const {Navigator, Screen} = AddAlbumStack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="AddAlbum" component={AddAlbum} />
      <Screen name="AddAlbumPopup" component={AddAlbumPopup} />
    </Navigator>
  );
};
