// external dependencies
import * as React from 'react';
import {View, Text} from 'react-native';

// internal dependencies
import {AuthNavigationProps} from '../navigation/Navigation';

export function Onboarding({navigation}: AuthNavigationProps<'Onboarding'>) {
  return (
    <View>
      <Text>Onboarding</Text>
    </View>
  );
}
