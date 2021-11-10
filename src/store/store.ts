// external dependencies
import create from "zustand";
import {persist} from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

// internal dependencies
import type {DeviceSlice, LibrarySlice, TrackPlayerSlice} from "./slices";
import {
  createDeviceSlice,
  createLibrarySlice,
  createTrackPlayerSlice,
} from "./slices";

export type StoreState = DeviceSlice & LibrarySlice & TrackPlayerSlice;

export const useStore = create<StoreState>(
  persist(
    (set): StoreState => ({
      ...createDeviceSlice(set),
      ...createLibrarySlice(set),
      ...createTrackPlayerSlice(set),
    }),
    {
      name: "store",
      getStorage: () => AsyncStorage,
    },
  ),
);
