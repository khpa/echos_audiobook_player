// external dependencies
import React from "react";
import { StyleSheet } from "react-native";

// internal dependencies
import { selectDevice } from "../../../store/slices/device";
import { Container, Button } from "../../../components";
import { useStore } from "../../../store/store";

type Props = Record<string, never>;

export const Settings = ({}: Props) => {
  const toggleTheme = useStore(selectDevice.toggleTheme);
  return (
    <Container style={styles.container}>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
