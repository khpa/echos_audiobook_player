import React, {useState, useEffect} from "react";
import {Text, View} from "react-native";
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
    <View>
      {currentQueue.map((track: Track) => (
        <Text key={track.title}>{track.title}</Text>
      ))}
    </View>
  );
};
