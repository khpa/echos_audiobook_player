// external dependencies
import React from 'react';
import {View, Text} from 'react-native';

// internal dependencies
import {BottomTabsNavProp} from '../../navigation/types/props';

export function Settings({navigation}: BottomTabsNavProp<'Settings'>) {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}
