/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import * as React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

// internal dependencies
import {height} from "../../../components/Theme";

type Props = {
  navigation: any;
  route: any;
};

export const AddAlbumPopup = ({navigation, route}: Props) => {
  const title = route?.params?.album?.volumeInfo.title;
  const subtitle = route?.params?.album?.volumeInfo.subtitle;
  console.log(route.params.album);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Button
        title="Add Album"
        onPress={() => {
          console.log("new album created");
          navigation.navigate("BottomTabs");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: (height * 2) / 3,
    justifyContent: "space-between",
    backgroundColor: "#30444E",
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: height * 0.1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
  },
});
