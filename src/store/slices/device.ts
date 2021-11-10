// external dependencies
import type {SetState} from "zustand";

// internal dependencies
import type {StoreState} from "../store";

type ThemeTypes = "light" | "dark";

export type DeviceSlice = {
  localRoot: string;
  theme: ThemeTypes;
  toggleTheme: () => void;
};

export const selectDevice = {
  theme: (store: DeviceSlice) => store.theme,
  toggleTheme: (store: DeviceSlice) => store.toggleTheme,
};

export const createDeviceSlice = (set: SetState<StoreState>): DeviceSlice => ({
  localRoot: "/storage/emulated/0/Documents/Echos",
  theme: "light",
  toggleTheme: () => {
    set(state => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
    console.log("theme changed");
  },
});
