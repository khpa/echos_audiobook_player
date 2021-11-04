// external dependencies
import create from "zustand";
import {persist} from "zustand/middleware";

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
    (set, get) => ({
      ...createLocalDeviceSlice(set, get),
      ...createAudioPlayerSlice(set, get),
      ...createLibrarySlice(set, get),
    }),
    {
      name: "store",
      getStorage: () => localStorage,
    },
  ),
);
