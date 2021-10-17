// external dependencies
import React from 'react';
import {View, Text} from 'react-native';

// internal dependencies
import {BottomTabsNavProp} from '../../navigation/types/props';

export function Analytics({navigation}: BottomTabsNavProp<'Analytics'>) {
  return (
    <View>
      <Text>Analytics</Text>
    </View>
  );
}
