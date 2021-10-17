import {GetState, SetState} from 'zustand';
import {StoreState} from '../useStore';

export interface AudioPlayerSlice {
  hasActiveAlbum: boolean;
}

export const createAudioPlayerSlice = (
  set: SetState<StoreState>,
  get: GetState<StoreState>,
) => ({
  hasActiveAlbum: false,
});
