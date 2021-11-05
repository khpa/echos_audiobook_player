/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import * as React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {height} from "../../../components";

export const SearchResultsItem = ({item, navigation}: any) => {
  async function onPressHandler() {
    const bookDetails = await fetch(item.selfLink).then(response =>
      response.json(),
    );
    navigation.navigate("AddAlbumPopup", {album: bookDetails.volumeInfo});
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={onPressHandler}
      >
        <View style={styles.containerCols}>
          <View style={styles.imageContainer}>
            <Image source={{uri: item.imageLink}} style={styles.image} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            {item.authors &&
              item.authors.map((author: string) => (
                <Text key={author} style={styles.authors}>
                  {author}
                </Text>
              ))}
            <Text style={styles.text} numberOfLines={3}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerCols: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  imageContainer: {
    width: (height - 200) / 5,
    height: (height - 200) / 3.2,
    marginRight: 20,
  },
  image: {
    flex: 1,
  },
  textBox: {
    flex: 1,
    overflow: "hidden",
  },
  title: {
    textAlign: "auto",
    textAlignVertical: "bottom",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  authors: {
    textAlign: "auto",
    textAlignVertical: "bottom",
    fontSize: 15,
    color: "black",
  },
  text: {
    paddingTop: 20,
    textAlign: "auto",
    textAlignVertical: "bottom",
    fontSize: 15,
    color: "black",
  },
});
