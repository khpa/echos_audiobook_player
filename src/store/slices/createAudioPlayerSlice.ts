// external dependencies
import type {GetState, SetState} from "zustand";

// internal dependencies
import type {StoreState} from "../useStore";

export interface AudioPlayerSlice {
  hasActiveAlbum: boolean;
}

export const createAudioPlayerSlice = (
  set: SetState<StoreState>,
  get: GetState<StoreState>,
) => ({
  hasActiveAlbum: false,
});
