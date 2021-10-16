import create from 'zustand';
import createSpecsSlice, {SpecsSlice} from './createSpecsSlice';
import createAudioPlayerSlice, {
  AudioPlayerSlice,
} from './createAudioPlayerSlice';

export type StoreState = SpecsSlice & AudioPlayerSlice;

const useStore = create<StoreState>((set, get) => ({
  ...createSpecsSlice(set, get),
  ...createAudioPlayerSlice(set, get),
}));

export default useStore;
