// external dependencies
import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {useProgress} from "react-native-track-player";

// internal dependencies
import {formatDuration} from "./formatDuration";

type Props = {};

export const ProgressBar = ({}: Props) => {
  const {position, duration} = useProgress();
  return (
    <View style={styles.progressLabelContainer}>
      <Text style={styles.progressLabelText}>{formatDuration(position)}</Text>
      <Text style={styles.progressLabelText}>
        {formatDuration(duration - position)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
