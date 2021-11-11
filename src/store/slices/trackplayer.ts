// external dependencies
import TrackPlayer, { State } from "react-native-track-player";
import type { SetState } from "zustand";

// internal dependencies
import type { StoreState } from "../store";
import type { Album } from "../../App/MainStack/SearchStack/AddAlbumPopup";

export type TrackPlayerSlice = {
  playerState: State;
  setPlayerState: (playerState: State) => void;
  activeAlbum: Album;
  setActiveAlbum: (album: Album) => void;
  resetActiveAlbum: () => void;
  resetChapters: () => void;
  countdown: number | undefined;
  setCountdown: (countdown: number | undefined) => void;
};

const resetAlbum = {
  id: "",
  title: "",
  authors: [],
  selfLink: "",
  chapters: [],
};

export const selectTrackPlayer = {
  playerState: (store: TrackPlayerSlice) => store.playerState,
  setPlayerState: (store: TrackPlayerSlice) => store.setPlayerState,
  activeAlbum: (store: StoreState): Album => store.activeAlbum,
  setActiveAlbum: (store: StoreState) => store.setActiveAlbum,
};

export const createTrackPlayerSlice = (
  set: SetState<StoreState>
): TrackPlayerSlice => {
  return {
    playerState: State.None,
    setPlayerState: (playerState) => set({ playerState }),
    activeAlbum: resetAlbum,
    setActiveAlbum: (album) =>
      set({
        activeAlbum: album,
      }),
    resetActiveAlbum: () =>
      set({
        activeAlbum: resetAlbum,
      }),
    resetChapters: () => {
      set((state) => {
        const album = state.library.find(
          (searchAlbum) => searchAlbum.id === state.activeAlbum.id
        );
        if (album) {
          album.lastPlayedChapterIndex = 0;
          album.chapters.map((chapter) => {
            chapter.lastPosition = 0;
          });
        }
      });
    },
    countdown: undefined,
    setCountdown: (countdown) => set({ countdown }),
  };
};

export const getPlayerState = async (): Promise<State> => {
  return (await TrackPlayer.getState()) || State.None;
};
