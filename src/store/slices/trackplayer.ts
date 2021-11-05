import TrackPlayer, {State, Track} from "react-native-track-player";
import {SetState} from "zustand";
import {StoreState} from "../useStore";
import {Chapter} from "../../App/MainStack/SearchStack/AddAlbumPopup";

export type TrackPlayerSlice = {
  play: () => void;
  pause: () => void;
};

export const createTrackPlayerSlice = (
  set: SetState<StoreState>,
): TrackPlayerSlice => {
  return {
    play: () => {
      TrackPlayer.play();
    },
    pause: () => {
      TrackPlayer.pause();
    },
  };
};

export const getPlayerState = async (): Promise<State> => {
  return (await TrackPlayer.getState()) || State.None;
};
