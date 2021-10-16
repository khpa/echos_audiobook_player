import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Provider from './src/navigation/Provider';

export default function App() {
  return (
    <NavigationContainer>
      <Provider />
    </NavigationContainer>
  );
}
