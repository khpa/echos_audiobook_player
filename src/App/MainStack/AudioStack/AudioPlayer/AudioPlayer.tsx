// external dependencies
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import TrackPlayer, {
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
  Event,
} from "react-native-track-player";
import RNShake from "react-native-shake";
import BackgroundTimer from "react-native-background-timer";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { format as prettyFormat } from "pretty-format";

// internal dependencies
import type { AudioNavProp } from "../../../../util/navigation";
import { useStore } from "../../../../store/store";
import type { Chapter } from "../../SearchStack/AddAlbumPopup";
import { height } from "../../../../components";

import { Options, Controller, ProgressBar, formatDuration } from "./components";

export const AudioPlayer = ({}: AudioNavProp<"AudioPlayer">) => {
  const { position } = useProgress();
  const playbackState = usePlaybackState();
  const store = useStore();
  const [currentChapter, setCurrentChapter] = useState<Chapter>();
  const { countdown } = store;
  const [sleepTimer, setSleepTimer] = React.useState<number | undefined>();
  const [resetTimer, setResetTimer] = useState<number | undefined>();

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
          position
        );
      }
    }
    setPosition();
  }, [playbackState]);

  useTrackPlayerEvents([Event.PlaybackState], (event) => {
    console.log(event);
  });

  useTrackPlayerEvents([Event.PlaybackTrackChanged], (event) => {
    store.updateAlbum(
      store.activeAlbum.id,
      "lastPlayedChapterIndex",
      event.nextTrack
    );
    store.updateChapter(
      store.activeAlbum.id,
      event.track,
      "lastPosition",
      position
    );
  });

  React.useEffect(() => {
    if (countdown === 0) {
      setSleepTimer(undefined);
      setResetTimer(undefined);
    }
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
        setSleepTimer(countdown && countdown * 60);
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
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.timerDisplay}>
          {sleepTimer && formatDuration(sleepTimer)}
        </Text>
        <Image
          style={styles.albumCover}
          source={{ uri: store.activeAlbum.image }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText} numberOfLines={1}>
            {currentChapter ? currentChapter.title : "No Title"}
          </Text>
          <Text style={styles.artistText}>{store.activeAlbum.authors[0]}</Text>
        </View>
        <ProgressBar />
        <Controller />
        <Options id={store.activeAlbum.id} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
  },
  topContainer: {
    height: height * 0.5,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  timerDisplay: {
    fontSize: 60,
    color: "white",
    fontWeight: "bold",
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 2,
    textAlign: "center",
    textAlignVertical: "center",
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  titleContainer: {
    flex: 0.75,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  albumCover: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    paddingBottom: 10,
  },
  artistText: {
    fontSize: 14,
    fontWeight: "200",
    color: "white",
  },
});
