// external dependencies
import React from "react";
import type { GestureResponderEvent, ViewStyle, StyleProp } from "react-native";
import { Text, StyleSheet, Pressable } from "react-native";

// internal dependencies

type Props = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle?: "hollow" | "highlight";
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

export const Button = ({
  title,
  onPress,
  buttonStyle,
  style,
  disabled,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        buttonStyle !== undefined ? styles[buttonStyle] : {},
        style,
      ]}
    >
      {<Text style={styles.text}>{title}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    minHeight: 42,
    justifyContent: "center",
    borderRadius: 1000,
  },
  hollow: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
  },
  highlight: {
    borderWidth: 1.5,
  },
  text: {
    color: "black",
    fontSize: 16,
    paddingHorizontal: 14,
    textAlign: "center",
  },
});
