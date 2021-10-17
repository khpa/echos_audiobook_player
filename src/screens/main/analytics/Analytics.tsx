// external dependencies
import React from 'react';
import {View, Text} from 'react-native';

// internal dependencies
import {CompBottomTabsNavProp} from '../../../navigation/types';

type Props = CompBottomTabsNavProp<'Analytics'>;

export function Analytics({navigation}: Props) {
  return (
    <View>
      <Text>Analytics</Text>
    </View>
  );
}
