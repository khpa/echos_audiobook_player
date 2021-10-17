// external dependencies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// internal dependencies
import {Library} from '../../main/library/Library';
import {LibraryStackParamList} from '../types/params';

const LibraryStack = createStackNavigator<LibraryStackParamList>();

export const LibraryStackNavigator = () => {
  const {Navigator, Screen} = LibraryStack;

  return (
    <Navigator>
      <Screen name="Library" component={Library} />
    </Navigator>
  );
};
