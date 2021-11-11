// external dependencies
import React from "react";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";

// internal dependencies
import { bottomTabIcons } from "../styles";
import { Container } from "..";

import { BottomTabButton } from "./BottomTabButton";
import { MiniPlayer } from "./MiniPlayer";

export function BottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View>
      <MiniPlayer />
      <Container style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? (options.tabBarLabel as string)
              : options.title !== undefined
              ? options.title
              : route.name;

          return (
            <BottomTabButton
              key={route.key}
              routeKey={route.key}
              label={label}
              name={route.name}
              isFocused={state.index === index}
              icon={bottomTabIcons[route.name]}
              navigation={navigation}
            />
          );
        })}
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
});
