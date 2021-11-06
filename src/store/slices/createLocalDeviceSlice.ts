// external dependencies
import type {SetState} from "zustand";

// internal dependencies
import type {StoreState} from "../store";

export type LocalDeviceSlice = {
  localRoot: string;
};

export const createLocalDeviceSlice = (set: SetState<StoreState>) => ({
  localRoot: "/storage/emulated/0/Documents/Echos",
});
