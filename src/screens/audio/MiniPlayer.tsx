// external dependencies
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Button} from 'react-native';

// internal dependencies
import {width} from '../../assets/theme';
import useStore from '../../store/useStore';

const MiniPlayer = () => {
  const tabBarHeight = useStore(state => state.tabBarHeight);
  const hasActiveAlbum = useStore.getState().hasActiveAlbum;
  const navigation = useNavigation<any>();

  if (hasActiveAlbum && tabBarHeight) {
    return (
      <View style={[styles.container, {bottom: tabBarHeight + 5}]}>
        <Button
          title="Play"
          onPress={() => navigation.navigate('AudioPlayer')}
        />
      </View>
    );
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