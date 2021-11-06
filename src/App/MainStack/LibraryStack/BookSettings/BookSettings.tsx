// external dependencies
import * as React from "react";
import {Image, Pressable, ScrollView, StyleSheet, View} from "react-native";
import {width} from "../../../components";

// internal dependencies
import {TabNavProps} from "../../../components/navigation";
import {useStore} from "../../../../store/store";

type Props = TabNavProps<"BookSettings">;

export const BookSettings = ({navigation, route}: Props) => {
  const album = route.params.album;
  const store = useStore();

  const imgOpt: string[] = Object.values(album.imageOptions);
  return (
    <ScrollView style={styles.container}>
      {imgOpt.map((item, index) => {
        return (
          <View key={index}>
            <Pressable
              onPress={() => {
                store.updateAlbum(album.id, "image", item);
                navigation.goBack();
              }}
            >
              <Image source={{uri: item}} style={styles.image} />
            </Pressable>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: (width - 40) / 3,
    height: (width - 40) / 2,
    margin: 5,
  },
  image: {
    width: (width - 40) / 3,
    height: (width - 40) / 2,
    margin: 5,
    resizeMode: "center",
  },
});
