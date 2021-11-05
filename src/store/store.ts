// external dependencies
import create from "zustand";
import {persist} from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

// internal dependencies
import type {LocalDeviceSlice, LibrarySlice, TrackPlayerSlice} from "./slices";
import {
  createLocalDeviceSlice,
  createLibrarySlice,
  createTrackPlayerSlice,
} from "./slices";

export type StoreState = LocalDeviceSlice & LibrarySlice & TrackPlayerSlice;

export const useStore = create<StoreState>(
  persist(
    (set): StoreState => ({
      ...createLocalDeviceSlice(set),
      ...createLibrarySlice(set),
      ...createTrackPlayerSlice(set),
    }),
    {
      name: "store",
      getStorage: () => AsyncStorage,
    },
  ),
);
