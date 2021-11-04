// external dependencies
import type {SetState} from "zustand";

// internal dependencies
import type {StoreState} from "../useStore";

export type AudioPlayerSlice = {
  activeAlbum: boolean;
  updateActiveAlbum: (newState: boolean) => void;
};

export const createAudioPlayerSlice = (set: SetState<StoreState>) => ({
  activeAlbum: false,
  updateActiveAlbum: (newState: boolean) =>
    set(state => ({
      ...state,
      activeAlbum: newState,
    })),
});
