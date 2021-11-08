// external dependencies
import TrackPlayer, {State} from "react-native-track-player";
import {SetState} from "zustand";

// internal dependencies
import type {StoreState} from "../store";
import type {Album} from "../../App/MainStack/SearchStack/AddAlbumPopup";

export type TrackPlayerSlice = {
  activeAlbum: Album;
  setActiveAlbum: (album: Album) => void;
  resetActiveAlbum: () => void;
  resetChapters: () => void;
};

const resetAlbum = {
  id: "",
  title: "",
  authors: [],
  selfLink: "",
  chapters: [],
};

export const createTrackPlayerSlice = (set: SetState<StoreState>) => {
  return {
    activeAlbum: resetAlbum,
    setActiveAlbum: (album: Album) =>
      set({
        activeAlbum: album,
      }),
    resetActiveAlbum: () =>
      set({
        activeAlbum: resetAlbum,
      }),
    resetChapters: () => {
      set(state => {
        const album = state.library.find(
          album => album.id === state.activeAlbum.id,
        );
        if (album) {
          album.lastPlayedChapterIndex = 0;
          album.chapters.map(chapter => {
            chapter.lastPosition = 0;
          });
        }
      });
    },
  };
};

export const getPlayerState = async (): Promise<State> => {
  return (await TrackPlayer.getState()) || State.None;
};
