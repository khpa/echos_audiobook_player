// TODO: Look into fluid transition between Home and AudioRoutes
// https://reactnavigation.org/docs/community-libraries-and-navigators

// external dependencies
import React, {useEffect} from "react";
import {Text, View, StyleSheet} from "react-native";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

// internal dependencies
import {useStore} from "../../../store/store";
import {MainNavProps} from "../../components/navigation";

export const Home = ({navigation}: MainNavProps<"MainTabs">) => {
  const tabBarHeight = useBottomTabBarHeight();

  useEffect(() => {
    useStore.setState({
      tabBarHeight: tabBarHeight,
    });
  }, [tabBarHeight]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
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
