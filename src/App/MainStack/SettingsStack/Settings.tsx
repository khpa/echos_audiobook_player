// external dependencies
import React from "react";
import { StyleSheet, Button } from "react-native";

// internal dependencies
import { selectDevice } from "../../../store/slices/device";
import { Container, Text } from "../../components";
import { useStore } from "../../../store/store";

type Props = Record<string, never>;

export const Settings = ({}: Props) => {
  const toggleTheme = useStore(selectDevice.toggleTheme);
  return (
    <Container style={styles.container}>
      <Button title="Toggle Theme" onPress={toggleTheme} />
      <Text>Settings</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
