// external dependencies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// internal dependencies
import {Library} from '../../main/library/Library';
import {AddAlbum} from '../../main/library/AddAlbum';
import {LibraryStackParamList} from '../types/params';

const LibraryStack = createStackNavigator<LibraryStackParamList>();

export const LibraryStackNavigator = () => {
  const {Navigator, Screen} = LibraryStack;

  return (
    <Navigator
      initialRouteName="Library"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Library" component={Library} />
      <Screen name="AddAlbum" component={AddAlbum} />
    </Navigator>
  );
};
