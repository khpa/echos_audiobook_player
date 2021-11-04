// external dependencies
import create from "zustand";
import {persist} from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

// internal dependencies
import type {
  LocalDeviceSlice,
  AudioPlayerSlice,
  LibrarySlice,
  TrackPlayerSlice,
} from "./slices";
import {
  createLocalDeviceSlice,
  createAudioPlayerSlice,
  createLibrarySlice,
  createTrackPlayerSlice,
} from "./slices";

export type StoreState = LocalDeviceSlice &
  AudioPlayerSlice &
  LibrarySlice &
  TrackPlayerSlice;

export const useStore = create<StoreState>(
  persist(
    (set): StoreState => ({
      ...createLocalDeviceSlice(set),
      ...createAudioPlayerSlice(set),
      ...createLibrarySlice(set),
      ...createTrackPlayerSlice(set),
    }),
    {
      name: "store",
      getStorage: () => AsyncStorage,
    },
  ),
);
