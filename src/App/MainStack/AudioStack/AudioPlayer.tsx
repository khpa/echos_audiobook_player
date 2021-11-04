// external dependencies
import * as React from "react";
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import TrackPlayer, {
  Capability,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
} from "react-native-track-player";

// internal dependencies
import {useStore} from "../../../store/useStore";
import {MainNavProps} from "../../components/navigation";

import {useState} from "react";
import {formatDuration} from "./formatDuration";

const setupIfNecessary = async () => {
  // if app was relaunched and music was already playing, we don't setup again.
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    return;
  }

  await TrackPlayer.setupPlayer({});
  await TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
  });

  TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

export const togglePlayback = async (playbackState: State) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  console.log("currentTrack", currentTrack);
  if (currentTrack == null) {
    // TODO: Perhaps present an error or restart the playlist?
  } else {
    if (playbackState !== State.Playing) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

export const AudioPlayer = ({navigation}: MainNavProps<"AudioStack">) => {
  const store = useStore();
  const {position, buffered, duration} = useProgress();

  const playbackState = usePlaybackState();

  React.useEffect(() => {
    setupIfNecessary();
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        Track progress: {formatDuration(position)} seconds out of{" "}
        {formatDuration(duration)} total
      </Text>
      <Text>{playbackState}</Text>
      <Text>
        Buffered progress: {formatDuration(buffered)} seconds buffered out of{" "}
        {formatDuration(duration)} total
      </Text>
      <TouchableWithoutFeedback onPress={() => togglePlayback(playbackState)}>
        <Text style={styles.primaryActionButton}>
          {playbackState === State.Playing ? "Pause" : "Play"}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryActionButton: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFD479",
  },
});
