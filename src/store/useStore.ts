// external dependencies
import create from 'zustand';
import {persist} from 'zustand/middleware';

// internal dependencies
import {
  LocalDeviceSlice,
  AudioPlayerSlice,
  createLocalDeviceSlice,
  createAudioPlayerSlice,
} from './slices';

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
