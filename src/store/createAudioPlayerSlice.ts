import {GetState, SetState} from 'zustand';
import {StoreState} from './useStore';

export interface AudioPlayerSlice {
  hasActiveAlbum: boolean;
  miniPlayer: boolean;
}

const createAudioPlayerSlice = (
  set: SetState<StoreState>,
  get: GetState<StoreState>,
) => ({
  hasActiveAlbum: false,
  miniPlayer: false,
});

export default createAudioPlayerSlice;
