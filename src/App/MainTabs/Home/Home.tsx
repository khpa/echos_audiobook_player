/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: Look into fluid transition between Home and AudioRoutes
// https://reactnavigation.org/docs/community-libraries-and-navigators

// external dependencies
import React, {useEffect} from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

// internal dependencies
import {useStore} from "../../../store/useStore";

type Props = {
  navigation: any;
};

export const Home = ({navigation}: Props) => {
  const tabBarHeight = useBottomTabBarHeight();

  useEffect(() => {
    useStore.setState({
      tabBarHeight: tabBarHeight,
    });
  }, [tabBarHeight]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Audio"
        onPress={() => navigation.navigate("AudioPlayer")}
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
