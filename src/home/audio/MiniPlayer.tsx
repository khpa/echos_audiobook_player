import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useStore} from '../../store/useStore';

const MiniPlayer = () => {
  const tabBarHeight = useStore(state => state.tabBarHeight);

  return (
    <View style={[styles.container, {bottom: tabBarHeight}]}>
      <Text>AudioRoutes</Text>
    </View>
  );
};

export default MiniPlayer;

const styles = StyleSheet.create({
  container: {
    height: 49,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
