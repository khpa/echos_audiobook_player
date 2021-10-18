// external dependencies
import type {GetState, SetState} from "zustand";

// internal dependencies
import type {StoreState} from "../useStore";

export interface LocalDeviceSlice {
  tabBarHeight: number | undefined;
  localRoot: string;
}

export const createLocalDeviceSlice = (
  set: SetState<StoreState>,
  get: GetState<StoreState>,
) => ({
  tabBarHeight: undefined,
  localRoot: "/storage/emulated/0/Documents/Echos",
});
