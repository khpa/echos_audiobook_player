/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import * as React from "react";
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";

export const SearchResultsItem = ({
  item,
  navigation,
}: {
  item: any;
  navigation: any;
}) => {
  const album = item;

  return (
    <View key={album.id} style={styles.container}>
      <TouchableWithoutFeedback
        style={{flex: 1, backgroundColor: "red"}}
        onPress={() => {
          navigation.push("AddAlbumPopup", {album: album});
        }}
      >
        <Text style={styles.title}>{album.volumeInfo.title}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  title: {
    color: "#000",
    flex: 1,
    textAlign: "left",
    fontSize: 20,
  },
});
