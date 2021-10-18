// external dependencies
import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

// internal dependencies
import {useAuth} from "../../../context/AuthProvider";

export const SignIn = () => {
  const {signIn} = useAuth();

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Login" onPress={() => signIn()} />
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
