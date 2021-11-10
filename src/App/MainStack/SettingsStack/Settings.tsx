// external dependencies
import {useTheme} from "@react-navigation/native";
import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {selectDevice} from "../../../store/slices/device";
import {useStore} from "../../../store/store";
import {customTheme} from "../../components/styles/TestTheme";

// internal dependencies

type Props = {};

export const Settings = ({}: Props) => {
  const toggleTheme = useStore(selectDevice.toggleTheme);
  const theme = useTheme();

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}
    >
      <Button title="Toggle Theme" onPress={toggleTheme} />
      <Text style={styles.title}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "black",
  },
});
