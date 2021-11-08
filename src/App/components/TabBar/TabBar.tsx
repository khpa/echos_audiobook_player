import * as React from "react";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import {View, Text, TouchableOpacity} from "react-native";
import {MiniPlayer} from "./MiniPlayer";

export function TabBar({state, descriptors, navigation}: BottomTabBarProps) {
  return (
    <View>
      <MiniPlayer />
      <View
        style={{
          flexDirection: "row",
          height: 55,
          alignItems: "center",
        }}
      >
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key] as any;
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, {merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1}}
              key={index}
            >
              <Text
                style={{
                  color: isFocused ? "black" : "gray",
                  textAlign: "center",
                  fontWeight: isFocused ? "bold" : "normal",
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
