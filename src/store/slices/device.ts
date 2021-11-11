// external dependencies
import type { SetState } from "zustand";

// internal dependencies
import type { Theme } from "../../components/styles";
import { lightTheme, darkTheme } from "../../components/styles";
import type { StoreState } from "../store";

export type DeviceSlice = {
  localRoot: string;
  theme: Theme;
  toggleTheme: () => void;
};

export const selectDevice = {
  theme: (store: DeviceSlice) => store.theme,
  toggleTheme: (store: DeviceSlice) => store.toggleTheme,
};

export const createDeviceSlice = (set: SetState<StoreState>): DeviceSlice => ({
  localRoot: "/storage/emulated/0/Documents/Echos",
  theme: darkTheme,
  toggleTheme: () => {
    set((state) => ({
      theme: state.theme === darkTheme ? lightTheme : darkTheme,
    }));
  },
});
