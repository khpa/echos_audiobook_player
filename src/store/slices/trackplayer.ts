import TrackPlayer, {State} from "react-native-track-player";
import {SetState} from "zustand";
import {Album} from "../../App/MainStack/SearchStack/AddAlbumPopup";
import {StoreState} from "../useStore";

export type TrackPlayerSlice = {
  activeAlbum: Album | undefined;
  setActiveAlbum: (album: Album) => void;
};

export const createTrackPlayerSlice = (set: SetState<StoreState>) => {
  return {
    activeAlbum: undefined,
    setActiveAlbum: (album: Album) =>
      set({
        activeAlbum: album,
      }),
  };
};

export const getPlayerState = async (): Promise<State> => {
  return (await TrackPlayer.getState()) || State.None;
};
