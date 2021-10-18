/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import * as React from "react";
import {View, Button, StyleSheet, Text} from "react-native";

type Props = {
  navigation: any;
};

export const SignUp = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
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
