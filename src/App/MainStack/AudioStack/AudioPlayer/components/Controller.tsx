// external dependencies
import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import TrackPlayer, {
  usePlaybackState,
  useProgress,
  State,
} from "react-native-track-player";

// internal dependencies
import {togglePlayback} from "./togglePlayback";

type Props = {};

export const Controller = ({}: Props) => {
  const playbackState = usePlaybackState();
  const {position} = useProgress();
  return (
    <View style={styles.actionRowContainer}>
      <Pressable onPress={() => TrackPlayer.skipToPrevious()}>
        <Text style={styles.secondaryActionButton}>Prev</Text>
      </Pressable>
      <Pressable onPress={() => TrackPlayer.seekTo(position - 30)}>
        <Text style={styles.secondaryActionButton}>-30</Text>
      </Pressable>
      <Pressable onPress={() => togglePlayback(playbackState)}>
        <Text style={styles.primaryActionButton}>
          {playbackState === State.Playing ? "Pause" : "Play"}
        </Text>
      </Pressable>
      <Pressable onPress={() => TrackPlayer.seekTo(position + 30)}>
        <Text style={styles.secondaryActionButton}>+30</Text>
      </Pressable>
      <Pressable onPress={() => TrackPlayer.skipToNext()}>
        <Text style={styles.secondaryActionButton}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  actionRowContainer: {
    width: "70%",
    flexDirection: "row",
    marginBottom: 100,
    justifyContent: "space-between",
  },
  primaryActionButton: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFD479",
  },
  secondaryActionButton: {
    fontSize: 14,
    color: "#FFD479",
  },
});
