// external dependencies
import {useNavigation} from "@react-navigation/native";
import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {AudioNavProp} from "../../../../components/navigation";

// internal dependencies

type Props = {
  id: string;
};

export const Options = ({id}: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Sleep Timer"
        onPress={() => navigation.navigate("SleepTimer" as never)}
      />
      <Button
        title="Chapters"
        onPress={() => navigation.navigate("CurrentQueue" as never)}
      />
      <Button
        title="Speed"
        onPress={() =>
          navigation.navigate(
            "PlaybackSpeed" as never,
            {
              albumId: id,
            } as never,
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {},
});
