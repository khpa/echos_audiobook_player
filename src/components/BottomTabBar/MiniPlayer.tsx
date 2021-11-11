// external dependencies
import { useNavigation } from "@react-navigation/native";
import React from "react";
import type { ViewStyle } from "react-native";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TrackPlayer, {
  usePlaybackState,
  State,
  useProgress,
} from "react-native-track-player";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// internal dependencies
import { useStore } from "../../store/store";
import {
  formatDuration,
  togglePlayback,
} from "../../App/MainStack/AudioStack/AudioPlayer/components";

export const MiniPlayer = React.memo(() => {
  const store = useStore();
  const playbackState = usePlaybackState();
  const navigation = useNavigation();
  const { position, duration } = useProgress();

  // Play/pause here doesn't trigger the playbackstate change
  // TODO - type "as never" should be fixed
  // https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc

  const displayStyle: ViewStyle = {
    display: store.activeAlbum ? "flex" : "none",
  };
  if (playbackState === State.Playing || playbackState === State.Paused) {
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
            } as never
          );
        }}
        style={[styles.container, displayStyle]}
      >
        <ImageBackground
          source={{ uri: store.activeAlbum.image }}
          style={styles.imgBG}
          blurRadius={20}
        >
          <View style={styles.innerContainer}>
            <Image
              source={{ uri: store.activeAlbum.image }}
              style={styles.image}
            />
            <View style={styles.albumContainer}>
              <Text style={styles.albumTitle}>{store.activeAlbum.title}</Text>
              <Text style={styles.playbackPosition}>
                {formatDuration(position)} / {formatDuration(duration)}
              </Text>
            </View>
            <View style={styles.controllerContainer}>
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
                  <Icon name="pause-circle" size={50} color="#fff" />
                ) : (
                  <Icon name="play-circle" size={50} color="#fff" />
                )}
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    );
  } else {
    return null;
  }
});

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: "100%",
    marginHorizontal: 10,
    alignSelf: "center",
  },
  imgBG: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  innerContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    marginHorizontal: 10,
  },
  albumContainer: {
    flex: 1,
    maxWidth: "60%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  albumTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  playbackPosition: { fontSize: 12, color: "#fff" },
  controllerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    minWidth: "30%",
  },
  optionContainer: {
    paddingHorizontal: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: "contain",
  },
});
