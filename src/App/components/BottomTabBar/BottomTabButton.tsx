// external dependencies
import type { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import type {
  NavigationHelpers,
  ParamListBase,
} from "@react-navigation/native";
import React from "react";
import type { ImageStyle } from "react-native";
import { Text, StyleSheet, Pressable, Image } from "react-native";

// internal dependencies
import { selectDevice } from "../../../store/slices/device";
import type { OutlineFillIcon } from "../styles";
import { useStore } from "../../../store/store";

export const BottomTabButton = React.memo<{
  routeKey: string;
  label: string;
  name: string;
  isFocused: boolean;
  icon: OutlineFillIcon;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}>(({ routeKey, label, name, isFocused, icon, navigation }) => {
  const theme = useStore(selectDevice.theme);

  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: routeKey,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(name);
    }
  };

  const focusColor = isFocused ? theme.contrast : "gray";
  const imgSource = isFocused ? icon.fill : icon.outline;
  const imgFocusStyle: ImageStyle = {
    tintColor: focusColor,
    opacity: isFocused ? 1 : 0.6,
  };
  const imgStyle = [styles.image, imgFocusStyle];
  const textStyle = [styles.text, { color: focusColor }];

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Image source={imgSource} style={imgStyle} fadeDuration={0} />
      <Text style={textStyle}>{label}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    alignItems: "center",
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },
  image: {
    height: 26,
    width: 26,
  },
  text: {
    fontSize: 10,
  },
});
