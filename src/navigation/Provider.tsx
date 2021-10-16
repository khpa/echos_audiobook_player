import React from 'react';
import Routes from './Routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//TODO: Add theme provider based on '../assets/theme'

export const Provider = () => {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
};

export default Provider;
