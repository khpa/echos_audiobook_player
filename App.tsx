// external dependencies
import * as React from 'react';
// import {useFlipper} from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

// internal dependencies
import {Provider} from './src/navigation';

export default function App() {
  const navigationRef = useNavigationContainerRef();

  // useFlipper(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <Provider />
    </NavigationContainer>
  );
}
