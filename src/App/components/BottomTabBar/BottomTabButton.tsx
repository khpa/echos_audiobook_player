// external dependencies
import {BottomTabNavigationEventMap} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {NavigationHelpers, ParamListBase} from "@react-navigation/native";
import React from "react";
import {Text, StyleSheet, Pressable, Image, ImageStyle} from "react-native";
import {bottomTabIcons, OutlineFillIcon} from "../styles";

// internal dependencies

type Props = {};

export const BottomTabButton = React.memo<{
  routeKey: string;
  label: string;
  name: string;
  isFocused: boolean;
  icon: OutlineFillIcon;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}>(({routeKey, label, name, isFocused, icon, navigation}) => {
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

  const focusColor = isFocused ? "black" : "gray";
  const imgSource = isFocused ? icon.fill : icon.outline;
  const imgFocusStyle: ImageStyle = {
    tintColor: focusColor,
    opacity: isFocused ? 1 : 0.6,
  };
  const imgStyle = [styles.image, imgFocusStyle];
  const textStyle = [styles.text, {color: focusColor}];

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
