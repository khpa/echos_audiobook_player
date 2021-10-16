// external dependencies
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/core';
import {CommonActions} from '@react-navigation/routers';

// internal dependencies
import useStore from '../../store/useStore';
import {MainNavigationProps} from '../../navigation/Navigation';

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
