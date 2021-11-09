import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import TrackPlayer from "react-native-track-player";
import {selectLibrary} from "../../../../store/slices/library";
import {useStore} from "../../../../store/store";
import {AudioNavProp} from "../../../components/navigation";

type Props = AudioNavProp<"PlaybackSpeed">;

export const PlaybackSpeed = ({navigation, route}: Props) => {
  const updateAlbum = useStore(selectLibrary.updateAlbum);
  const albumId = route.params.albumId;
  const playbackSpeedOptions = [
    0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5,
  ];

  return (
    <View style={styles.container}>
      {playbackSpeedOptions.map(option => {
        return (
          <Pressable
            key={option}
            onPress={() => {
              TrackPlayer.setRate(option);
              updateAlbum(albumId, "playbackSpeed", option);
              navigation.goBack();
            }}
          >
            <Text style={styles.options}>{Math.round(option * 100)}%</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  options: {
    color: "black",
    padding: 10,
    fontSize: 20,
  },
});
