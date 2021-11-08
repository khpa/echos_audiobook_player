import * as React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {useStore} from "../../../../store/store";
import {AudioNavProp} from "../../../components/navigation";

type Props = AudioNavProp<"Countdown">;

export const Countdown = ({navigation}: Props) => {
  const store = useStore();
  const countdownOptions = [10, 20, 30];

  return (
    <View style={styles.container}>
      {countdownOptions.map(option => {
        return (
          <Pressable
            onPress={() => {
              store.setCountdown(option);
              navigation.goBack();
            }}
          >
            <Text style={styles.options}>{option}</Text>
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
