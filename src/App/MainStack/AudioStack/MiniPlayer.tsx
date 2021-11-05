// external dependencies
import React from "react";
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {usePlaybackState, State} from "react-native-track-player";

// internal dependencies
import {useStore} from "../../../store/useStore";
import {width} from "../../components/Theme";
import {togglePlayback} from "./AudioPlayer";

export const MiniPlayer = () => {
  const store = useStore();
  const playbackState = usePlaybackState();

  if (playbackState !== State.None && store.tabBarHeight) {
    return (
      <View style={[styles.container, {bottom: store.tabBarHeight + 5}]}>
        <TouchableWithoutFeedback onPress={() => togglePlayback(playbackState)}>
          <Text style={styles.primaryActionButton}>
            {playbackState === State.Playing ? "Pause" : "Play"}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: width - 10,
    position: "absolute",
    backgroundColor: "gray",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  primaryActionButton: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFD479",
  },
});
