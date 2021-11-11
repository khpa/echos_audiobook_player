// external dependencies
import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

// internal dependencies
import type { AuthNavProps } from "../../../navigation";

export const SignUp = ({ navigation }: AuthNavProps<"SignUp">) => {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("SignIn")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
