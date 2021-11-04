import TrackPlayer, {State} from "react-native-track-player";
import {SetState} from "zustand";
import {StoreState} from "../useStore";

export type TrackPlayerSlice = {
  play: () => void;
  pause: () => void;
};

export const createTrackPlayerSlice = (set: SetState<StoreState>) => {
  return {
    play: () => {
      TrackPlayer.play();
    },
    pause: () => {
      TrackPlayer.pause();
    },
  };
};
