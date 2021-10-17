// external dependencies
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {CommonActions} from '@react-navigation/routers';

// internal dependencies
import useStore from '../../store/useStore';
import {MainStackNavProp} from '../../navigation/types';

type Props = MainStackNavProp<'AudioPlayer'>;

export function AudioPlayer({navigation}: Props) {
  return (
    <View>
      <Text>AudioPlayer</Text>
      <Button
        title="Go back"
        onPress={() => navigation.dispatch(CommonActions.goBack())}
      />
      <Button
        title="Start Playing"
        onPress={() =>
          useStore.setState({
            hasActiveAlbum: true,
          })
        }
      />
    </View>
  );
}
