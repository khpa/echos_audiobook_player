import create from 'zustand';
import {persist} from 'zustand/middleware';

import createLocalDeviceSlice, {
  LocalDeviceSlice,
} from './createLocalDeviceSlice';
import createAudioPlayerSlice, {
  AudioPlayerSlice,
} from './createAudioPlayerSlice';

export type StoreState = LocalDeviceSlice & AudioPlayerSlice;

const useStore = create<StoreState>(
  persist(
    (set, get) => ({
      ...createLocalDeviceSlice(set, get),
      ...createAudioPlayerSlice(set, get),
    }),
    {
      name: 'store',
    },
  ),
);

export default useStore;
