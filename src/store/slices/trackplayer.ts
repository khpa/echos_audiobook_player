// external dependencies
import TrackPlayer, {State} from "react-native-track-player";
import {SetState} from "zustand";

// internal dependencies
import type {StoreState} from "../store";
import type {Album} from "../../App/MainStack/SearchStack/AddAlbumPopup";

export type TrackPlayerSlice = {
  activeAlbum: Album | undefined;
  setActiveAlbum: (album: Album) => void;
};

export const createTrackPlayerSlice = (
  set: SetState<StoreState>,
): TrackPlayerSlice => {
  return {
    activeAlbum: undefined,
    setActiveAlbum: album =>
      set({
        activeAlbum: album,
      }),
  };
};

export const getPlayerState = async (): Promise<State> => {
  return (await TrackPlayer.getState()) || State.None;
};
