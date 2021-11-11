// external dependencies
import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// internal dependencies
import { useStore } from "../../../../../../store/store";

type Props = {
  id: string;
};

export const Options = ({ id }: Props) => {
  const navigation = useNavigation();
  const store = useStore();

  // find album in store.library with id === id and return playbackSpeed
  const playbackSpeed =
    store.library.find((album) => album.id === id)?.playbackSpeed || 1;

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.optionContainer}
        onPress={() =>
          navigation.navigate(
            "PlaybackSpeed" as never,
            {
              albumId: id,
            } as never
          )
        }
      >
        <Text style={styles.playbackSpeedTitle}>
          {playbackSpeed.toFixed(2)}x
        </Text>
        <Text style={styles.optionText}>Speed</Text>
      </Pressable>
      <Pressable
        style={styles.optionContainer}
        onPress={() => navigation.navigate("CurrentQueue" as never)}
      >
        <Icon name="table-of-contents" size={26} color="#fff" />
        <Text style={styles.optionText}>Chapters</Text>
      </Pressable>
      <Pressable
        style={styles.optionContainer}
        onPress={() => navigation.navigate("SleepTimer" as never)}
      >
        <Icon name="timer-outline" size={26} color="#fff" />
        <Text style={styles.optionText}>Sleep Timer</Text>
      </Pressable>
      <Pressable
        style={styles.optionContainer}
        onPress={() => navigation.navigate("SleepTimer" as never)}
      >
        <Icon name="tune" size={26} color="#fff" />
        <Text style={styles.optionText}>Settings</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 65,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    marginBottom: 10,
  },
  optionContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  playbackSpeedTitle: {
    color: "#fff",
    fontSize: 20,
  },
  optionText: {
    paddingTop: 5,
    color: "#fff",
    fontSize: 10,
  },
});
