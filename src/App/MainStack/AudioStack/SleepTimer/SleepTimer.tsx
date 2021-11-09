import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {useStore} from "../../../../store/store";
import {AudioNavProp} from "../../../components/navigation";

type Props = AudioNavProp<"SleepTimer">;

export const SleepTimer = ({navigation}: Props) => {
  const store = useStore();
  const sleepTimerOptions = [5, 10, 20, 30];

  return (
    <View style={styles.container}>
      {sleepTimerOptions.map(option => {
        return (
          <Pressable
            key={option}
            onPress={() => {
              store.setCountdown(option);
              navigation.goBack();
            }}
          >
            <Text style={styles.options}>{option} minutes</Text>
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
