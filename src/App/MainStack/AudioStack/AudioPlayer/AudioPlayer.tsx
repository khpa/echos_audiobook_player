// external dependencies
import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import TrackPlayer, {
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
  Event,
} from "react-native-track-player";
import Slider from "@react-native-community/slider";
import RNShake from "react-native-shake";
// @ts-ignore
import BackgroundTimer from "react-native-background-timer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {format as prettyFormat} from "pretty-format";

// internal dependencies
import {AudioNavProp} from "../../../components/navigation";
import {useStore} from "../../../../store/store";
import {Chapter} from "../../SearchStack/AddAlbumPopup";
import {Options, Controller, ProgressBar, formatDuration} from "./components";

export const AudioPlayer = ({navigation}: AudioNavProp<"AudioPlayer">) => {
  const {position, duration} = useProgress();
  const playbackState = usePlaybackState();
  const store = useStore();
  const [currentChapter, setCurrentChapter] = useState<Chapter>();
  const countdown = store.countdown;
  const [sleepTimer, setSleepTimer] = React.useState<number | undefined>();
  const [resetTimer, setResetTimer] = useState<number | undefined>();

  // useEffect(() => {
  //   if (!store.activeAlbum) {
  //     navigation.navigate("Home" as any);
  //   }
  // }, []);

  // useEffect(() => {
  //   async function getActiveAlbum() {
  //     const test = await AsyncStorage.getItem("store");
  //     const lib = JSON.parse(test as any).state.library;
  //     const activeAlbum: Album = lib.find(
  //       (album: Album) => album.id === store.activeAlbum.id,
  //     );
  //     if (activeAlbum.categories !== undefined) {
  //       let test: string[] = [];
  //       activeAlbum.categories.map(cat => {
  //         const newVal = cat.split(" / ");
  //         test.push(...newVal);
  //       });
  //       const newTest = [...new Set(test)];
  //       // console.log(newTest);
  //     }
  //     // console.log(prettyFormat(activeAlbum));
  //   }
  //   getActiveAlbum();

  //   if (currentChapter && playbackState === State.Paused) {
  //     store.updateChapter(
  //       store.activeAlbum.id,
  //       currentChapter.index,
  //       "lastPosition",
  //       position,
  //     );
  //   }
  // }, [playbackState]);

  useEffect(() => {
    async function setPosition() {
      const chapterIndex = await TrackPlayer.getCurrentTrack();
      setCurrentChapter(store.activeAlbum.chapters[chapterIndex]);
      if (currentChapter) {
        store.updateChapter(
          store.activeAlbum.id,
          chapterIndex,
          "lastPosition",
          position,
        );
      }
    }
    setPosition();
  }, [playbackState]);

  useTrackPlayerEvents([Event.PlaybackState], event => {
    console.log(event);
  });

  useTrackPlayerEvents([Event.PlaybackTrackChanged], event => {
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
  });

  React.useEffect(() => {
    countdown && setSleepTimer(countdown * 60);
  }, [countdown]);

  useEffect(() => {
    if (sleepTimer !== undefined && sleepTimer > 0) {
      const interval = BackgroundTimer.setInterval(() => {
        setSleepTimer(sleepTimer - 1);
      }, 1000);
      return () => BackgroundTimer.clearInterval(interval);
    } else if (sleepTimer === 0) {
      TrackPlayer.pause();
      return setResetTimer(10);
    }
  }, [sleepTimer]);

  useEffect(() => {
    if (resetTimer !== undefined && resetTimer > 0) {
      const interval = BackgroundTimer.setInterval(() => {
        setResetTimer(resetTimer - 1);
      }, 1000);
      const subscription = RNShake.addListener(() => {
        TrackPlayer.play();
        setSleepTimer(countdown);
        setResetTimer(undefined);
      });
      return () => {
        BackgroundTimer.clearInterval(interval);
        subscription.remove();
      };
    } else if (resetTimer === 0) {
      setSleepTimer(undefined);
      setResetTimer(undefined);
      store.setCountdown(undefined);
      return;
    }
  }, [resetTimer]);

  if (!store.activeAlbum) {
    return <></>;
  }
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar barStyle={"light-content"} />
      <Text style={{color: "white"}}>
        {sleepTimer && formatDuration(sleepTimer)}
      </Text>
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
        <ProgressBar />
      </View>
      <Controller />
      <Options id={store.activeAlbum.id} />
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
});
