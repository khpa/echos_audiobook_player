// external dependencies
import * as React from "react";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import {StyleSheet, View} from "react-native";

// internal dependencies
import {MiniPlayer} from "./MiniPlayer";
import {BottomTabButton} from "./BottomTabButton";
import {bottomTabIcons} from "../styles";

export function BottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View>
      <MiniPlayer />
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key] as any;
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
              icon={bottomTabIcons[route.name]!}
              navigation={navigation}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
});
