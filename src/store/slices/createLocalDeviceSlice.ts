// external dependencies
import type {SetState} from "zustand";

// internal dependencies
import type {StoreState} from "../store";

export type LocalDeviceSlice = {
  tabBarHeight: number | undefined;
  localRoot: string;
};

export const createLocalDeviceSlice = (set: SetState<StoreState>) => ({
  tabBarHeight: undefined,
  localRoot: "/storage/emulated/0/Documents/Echos",
});
