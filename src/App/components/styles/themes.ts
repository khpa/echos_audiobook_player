// external dependencies
import { Dimensions } from "react-native";
import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    contrast: string;
    text: string;
  }
}

export const lightTheme = {
  background: "#fff",
  contrast: "#000",
  text: "#212121",
};

export const darkTheme = {
  background: "#212121",
  contrast: "#fff",
  text: "#fff",
};

export type Theme = typeof lightTheme | typeof darkTheme;
export const { width, height } = Dimensions.get("window");

// export const lightTheme = {
//   colors: {
//     background: {
//       primary: palette.white,
//       secondary: palette.lightGray,
//     },
//     text: {
//       primary: palette.black,
//       secondary: palette.darkGray,
//     },
//     button: {
//       primary: palette.darkBlue,
//       text: palette.white,
//     },
//   },
//   spacing: {
//     s: 8,
//     m: 16,
//     l: 24,
//     xl: 40,
//   },
// };

// export const darkTheme = {
//   ...lightTheme,
//   colors: {
//     background: {
//       primary: palette.darkBlue,
//       secondary: palette.darkGray,
//     },
//     text: {
//       primary: palette.white,
//       secondary: palette.lightGray,
//     },
//   },
// };
