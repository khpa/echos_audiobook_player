// external dependencies
import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import TrackPlayer, {
  usePlaybackState,
  useProgress,
  State,
} from "react-native-track-player";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {height} from "../../../../components";

// internal dependencies
import {togglePlayback} from "./togglePlayback";

type Props = {};

export const Controller = ({}: Props) => {
  const playbackState = usePlaybackState();
  const {position} = useProgress();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.optionContainer}
        onPress={() => TrackPlayer.skipToPrevious()}
      >
        <Icon name="skip-previous" size={45} color="#fff" />
      </Pressable>
      <Pressable
        style={styles.optionContainer}
        onPress={() => TrackPlayer.seekTo(position - 30)}
      >
        <Icon name="rewind-30" size={25} color="#fff" />
      </Pressable>
      <Pressable
        style={styles.optionContainer}
        onPress={() => togglePlayback(playbackState)}
      >
        {playbackState === State.Playing ? (
          <Icon name="pause-circle" size={90} color="#fff" />
        ) : (
          <Icon name="play-circle" size={90} color="#fff" />
        )}
      </Pressable>
      <Pressable
        style={styles.optionContainer}
        onPress={() => TrackPlayer.seekTo(position + 30)}
      >
        <Icon name="fast-forward-30" size={25} color="#fff" />
      </Pressable>
      <Pressable
        style={styles.optionContainer}
        onPress={() => TrackPlayer.skipToNext()}
      >
        <Icon name="skip-next" size={45} color="#fff" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    width: "80%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
