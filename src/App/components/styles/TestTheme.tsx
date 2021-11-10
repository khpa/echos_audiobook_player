import {selectDevice} from "../../../store/slices/device";
import {useStore} from "../../../store/store";

export const lightTheme = {
  colors: {
    backgroundColor: "#ffffff",
    primary: "red",
  },
};

export const darkTheme = {
  colors: {
    backgroundColor: "#000000",
    primary: "green",
  },
};

export const customTheme = () => {
  const theme = useStore(selectDevice.theme);
  console.log(theme);
  return theme === "dark" ? darkTheme : lightTheme;
};
