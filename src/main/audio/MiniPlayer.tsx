import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {width} from '../../assets/theme';
import useStore from '../../store/useStore';
import {useNavigation} from '@react-navigation/native';

const MiniPlayer = () => {
  const tabBarHeight = useStore(state => state.tabBarHeight);
  const miniPlayerVisible = useStore.getState().miniPlayer;
  const hasActiveAlbum = useStore.getState().hasActiveAlbum;
  const navigation = useNavigation<any>();

  if (miniPlayerVisible && hasActiveAlbum && tabBarHeight) {
    <View style={[styles.container, {bottom: tabBarHeight + 5}]}>
      <Button title="Play" onPress={() => navigation.navigate('AudioPlayer')} />
    </View>;
  } else {
    return null;
  }
};

export default MiniPlayer;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: width - 10,
    position: 'absolute',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
});
