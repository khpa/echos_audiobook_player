// external dependencies
import {Dimensions} from "react-native";

export const {width, height} = Dimensions.get("window");

const palette = {
  // main palette
  lightBlue: "#1BA098",
  darkBlue: "#051622",
  // #070e14

  // shades
  white: "#FFF",
  lightGray: "#EEE",
  darkGray: "#333",
  black: "#000",
};

export const lightTheme = {
  colors: {
    background: {
      primary: palette.white,
      secondary: palette.lightGray,
    },
    text: {
      primary: palette.black,
      secondary: palette.darkGray,
    },
    button: {
      primary: palette.darkBlue,
      text: palette.white,
    },
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    background: {
      primary: palette.darkBlue,
      secondary: palette.darkGray,
    },
    text: {
      primary: palette.white,
      secondary: palette.lightGray,
    },
  },
};

export const theme = darkTheme;
export type Theme = typeof lightTheme;
