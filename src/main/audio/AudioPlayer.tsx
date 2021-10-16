import {useFocusEffect} from '@react-navigation/core';
import {CommonActions} from '@react-navigation/routers';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {MainNavigationProps} from '../../navigation/Navigation';
import {useStore} from '../../store/store';

export function AudioPlayer({navigation}: MainNavigationProps<'AudioPlayer'>) {
  useFocusEffect(() => {
    useStore.setState({
      miniPlayer: true,
    });
    return () =>
      useStore.setState({
        miniPlayer: false,
      });
  });

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
