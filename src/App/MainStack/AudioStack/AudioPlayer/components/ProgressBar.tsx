// external dependencies
import React from "react";
import {View, Text, StyleSheet} from "react-native";
import TrackPlayer, {useProgress} from "react-native-track-player";
import Slider from "@react-native-community/slider";

// internal dependencies
import {formatDuration} from "./formatDuration";
import {height} from "../../../../components";

type Props = {};

export const ProgressBar = ({}: Props) => {
  const {position, duration} = useProgress();
  return (
    <View style={styles.contentContainer}>
      <Slider
        style={styles.progressContainer}
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor="#FFD479"
        minimumTrackTintColor="#FFD479"
        maximumTrackTintColor="#FFFFFF"
        onSlidingComplete={async value => {
          await TrackPlayer.seekTo(value);
        }}
      />
      <View style={styles.progressLabelContainer}>
        <Text style={styles.progressLabelText}>{formatDuration(position)}</Text>
        <Text style={styles.progressLabelText}>
          -{formatDuration(duration - position)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0.5,
    alignItems: "center",
  },
  progressContainer: {
    height: 20,
    width: 380,
    flexDirection: "row",
  },
  progressLabelContainer: {
    width: 370,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressLabelText: {
    color: "white",
    fontVariant: ["tabular-nums"],
  },
});
