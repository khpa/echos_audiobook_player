// external dependencies
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// internal dependencies
import {AppStackNavigator} from '..';

//TODO: Add theme provider based on '../assets/theme'

export const Provider = () => {
  return (
    <SafeAreaProvider>
      <AppStackNavigator />
    </SafeAreaProvider>
  );
};
