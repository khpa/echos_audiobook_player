// external dependencies
import * as React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

// internal dependencies
import type { AuthNavProp } from "../../components/navigation";

export const SignUp = ({ navigation }: AuthNavProp<"SignUp">) => {
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
