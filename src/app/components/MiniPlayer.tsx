/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import React from "react";
import {View, StyleSheet, Button} from "react-native";

// internal dependencies
import {useStore} from "../../store/useStore";

// components
import {width} from "./Theme";

type Props = {
  navigation: any;
};

export const MiniPlayer = ({navigation}: Props) => {
  const tabBarHeight = useStore(state => state.tabBarHeight);
  const {hasActiveAlbum} = useStore.getState();

  if (hasActiveAlbum && tabBarHeight) {
    return (
      <View style={[styles.container, {bottom: tabBarHeight + 5}]}>
        <Button
          title="Play"
          onPress={() => navigation.navigate("AudioPlayer")}
        />
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
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center",
  },
});
