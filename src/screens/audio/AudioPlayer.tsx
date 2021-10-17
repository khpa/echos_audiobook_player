// external dependencies
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {CommonActions} from '@react-navigation/routers';

// internal dependencies
import useStore from '../../store/useStore';
import {MainStackNavProp} from '../../navigation/types/props';

export function AudioPlayer({navigation}: MainStackNavProp<'AudioPlayer'>) {
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

export default AudioPlayer;
