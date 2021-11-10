import React, {useState, useEffect} from "react";
import {Text, StyleSheet, ScrollView} from "react-native";
import TrackPlayer, {Track} from "react-native-track-player";

export const CurrentQueue = () => {
  const [currentQueue, setCurrentQueue] = useState<Track[]>([]);

  useEffect(() => {
    async function getQueue() {
      const queue = await TrackPlayer.getQueue();
      setCurrentQueue(queue);
    }
    getQueue();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {currentQueue.map((track: Track) => (
        <Text style={styles.text} key={track.title}>
          {track.title}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  text: {
    fontSize: 12,
    color: "black",
    padding: 10,
  },
});
