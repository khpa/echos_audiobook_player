// external dependencies
import React from 'react';
import {View, Text} from 'react-native';

// internal dependencies
import {HomeNavigationProps} from '../../navigation/Navigation';

export function Analytics({navigation}: HomeNavigationProps<'Analytics'>) {
  return (
    <View>
      <Text>Analytics</Text>
    </View>
  );
}
