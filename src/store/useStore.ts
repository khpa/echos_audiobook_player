// external dependencies
import create from "zustand";
import {persist} from "zustand/middleware";

// internal dependencies
import type {LocalDeviceSlice, AudioPlayerSlice} from "./slices";
import {createLocalDeviceSlice, createAudioPlayerSlice} from "./slices";

export type StoreState = LocalDeviceSlice & AudioPlayerSlice;

export const useStore = create<StoreState>(
  persist(
    (set, get) => ({
      ...createLocalDeviceSlice(set, get),
      ...createAudioPlayerSlice(set, get),
    }),
    {
      name: "store",
    },
  ),
);
