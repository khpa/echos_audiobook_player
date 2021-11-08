// external dependencies
import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
  Event,
} from "react-native-track-player";
import Slider from "@react-native-community/slider";

// internal dependencies
import {setupAudioPlayer} from "./setupAudioPlayer";
import {togglePlayback} from "./togglePlayback";
import {AudioNavProp} from "../../../components/navigation";
import {useStore} from "../../../../store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Album, Chapter} from "../../SearchStack/AddAlbumPopup";
import {formatDuration} from "./formatDuration";

export const AudioPlayer = ({navigation}: AudioNavProp<"AudioPlayer">) => {
  const {position, duration} = useProgress();
  const playbackState = usePlaybackState();
  const store = useStore();
  const [currentChapter, setCurrentChapter] = useState<Chapter>();

  useEffect(() => {
    setupAudioPlayer();
    if (!store.activeAlbum) {
      navigation.navigate("Home" as any);
    }
  }, []);

  useEffect(() => {
    if (currentChapter?.lastPosition && currentChapter.lastPosition > 0) {
      jumpToPosition(currentChapter.lastPosition || 0);
    }
  }, [currentChapter]);

  useEffect(() => {
    async function getActiveAlbum() {
      const currT = await TrackPlayer.getCurrentTrack();
      setCurrentChapter(store.activeAlbum.chapters[currT]);

      const test = await AsyncStorage.getItem("store");
      const lib = JSON.parse(test as any).state.library;
      const activeAlbum: Album = lib.find(
        (album: Album) => album.id === store.activeAlbum.id,
      );
      if (activeAlbum.categories !== undefined) {
        let test: string[] = [];
        activeAlbum.categories.map(cat => {
          const newVal = cat.split(" / ");
          test.push(...newVal);
        });
        const newTest = [...new Set(test)];
        // console.log(newTest);
      }
      // console.log(prettyFormat(activeAlbum));
    }
    getActiveAlbum();

    if (currentChapter && playbackState === State.Paused) {
      // console.log("logged ", position);
      store.updateChapter(
        store.activeAlbum.id,
        currentChapter.index,
        "lastPosition",
        position,
      );
    }
  }, [playbackState]);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], event => {
    // console.log("PlaybackTrackChanged", event);
    store.updateAlbum(
      store.activeAlbum.id,
      "lastPlayedChapterIndex",
      event.nextTrack,
    );
    store.updateChapter(
      store.activeAlbum.id,
      event.track,
      "lastPosition",
      position,
    );
    jumpToPosition(
      store.activeAlbum.chapters[event.nextTrack]?.lastPosition || 0,
    );
  });

  async function jumpToPosition(position: number) {
    await TrackPlayer.seekTo(position);
  }

  if (!store.activeAlbum) {
    return <></>;
  }
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.contentContainer}>
        <Image style={styles.artwork} source={{uri: store.activeAlbum.image}} />
        <Text style={styles.titleText}>
          {currentChapter ? currentChapter.title : "No Title"}
        </Text>
        <Text style={styles.artistText}>{store.activeAlbum.authors[0]}</Text>
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
          <Text style={styles.progressLabelText}>
            {formatDuration(position)}
          </Text>
          <Text style={styles.progressLabelText}>
            {formatDuration(duration - position)}
          </Text>
        </View>
      </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  topBarContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
  queueButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD479",
  },
  artwork: {
    width: 240,
    height: 240,
    marginTop: 30,
    backgroundColor: "grey",
  },
  titleText: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    marginTop: 30,
    textAlign: "center",
    paddingBottom: 10,
  },
  artistText: {
    fontSize: 14,
    fontWeight: "200",
    color: "white",
  },
  progressContainer: {
    height: 40,
    width: 380,
    marginTop: 25,
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
