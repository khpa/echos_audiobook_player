// TODO - hasActiveAlbum should be in a context not in store

/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import React from "react";
import {View, StyleSheet, Button, TouchableWithoutFeedback} from "react-native";

// internal dependencies
import {useStore} from "../../../store/useStore";

// components
import {width} from "../../components/Theme";

export const MiniPlayer = () => {
  const store = useStore();

  console.log(store.activeAlbum);
  if (store.activeAlbum && store.tabBarHeight) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          console.info("go to AudioPlayer");
        }}
      >
        <View style={[styles.container, {bottom: store.tabBarHeight + 5}]}>
          <Button title="Play" onPress={() => console.log("play")} />
          <Button title="Stop" onPress={() => store.updateActiveAlbum(false)} />
        </View>
      </TouchableWithoutFeedback>
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
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center",
  },
});
