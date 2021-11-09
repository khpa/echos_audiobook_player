// external dependencies
import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Pressable, StyleSheet, Text, View, ViewStyle} from "react-native";
import {usePlaybackState, State} from "react-native-track-player";

// internal dependencies
import {useStore} from "../../../store/store";
import {width} from "../Theme";
import {togglePlayback} from "../../MainStack/AudioStack/AudioPlayer/components";

export const MiniPlayer = React.memo(() => {
  const store = useStore();
  const playbackState = usePlaybackState();
  const navigation = useNavigation();

  // Play/pause here doesn't trigger the playbackstate change
  // TODO - type "as never" should be fixed
  // https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc

  const displayStyle: ViewStyle = {
    display: store.activeAlbum ? "flex" : "none",
  };
  if (playbackState !== State.None) {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate(
            "AudioStack" as never,
            {
              screen: "AudioPlayer",
              params: {
                album: store.activeAlbum,
              },
            } as never,
          );
        }}
        style={[styles.container, displayStyle]}
      >
        <View>
          <Pressable onPress={() => togglePlayback(playbackState)}>
            <Text style={styles.primaryActionButton}>
              {playbackState === State.Playing ? "Pause" : "Play"}
            </Text>
          </Pressable>
        </View>
      </Pressable>
    );
  } else {
    return null;
  }
});

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: width - 10,
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
