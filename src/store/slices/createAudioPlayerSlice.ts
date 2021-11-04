// external dependencies
import type {GetState, SetState} from "zustand";

// internal dependencies
import type {StoreState} from "../useStore";

export type AudioPlayerSlice = {
  hasActiveAlbum: boolean;
};

export const createAudioPlayerSlice = (set: SetState<StoreState>) => ({
  hasActiveAlbum: false,
});
