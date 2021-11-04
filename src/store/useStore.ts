// external dependencies
import create from "zustand";
import {persist} from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

// internal dependencies
import type {LocalDeviceSlice, AudioPlayerSlice, LibrarySlice} from "./slices";
import {
  createLocalDeviceSlice,
  createAudioPlayerSlice,
  createLibrarySlice,
} from "./slices";

export type StoreState = LocalDeviceSlice & AudioPlayerSlice & LibrarySlice;

export const useStore = create<StoreState>(
  persist(
    (set): StoreState => ({
      ...createLocalDeviceSlice(set),
      ...createAudioPlayerSlice(set),
      ...createLibrarySlice(set),
    }),
    {
      name: "store",
      getStorage: () => AsyncStorage,
    },
  ),
);
