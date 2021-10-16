import * as React from 'react';
import {View, Text} from 'react-native';
import {HomeNavigationProps} from '../../navigation/Navigation';

export function Library({navigation}: HomeNavigationProps<'Library'>) {
  return (
    <View>
      <Text>Library</Text>
    </View>
  );
}
