import React from 'react';
import {AppStackNavigator} from '..';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//TODO: Add theme provider based on '../assets/theme'

export const Provider = () => {
  return (
    <SafeAreaProvider>
      <AppStackNavigator />
    </SafeAreaProvider>
  );
};
