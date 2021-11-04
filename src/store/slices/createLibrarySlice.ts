// external dependencies
import type {SetState} from "zustand";

// internal dependencies
import type {StoreState} from "../useStore";
import type {Album} from "../../App/MainStack/SearchStack/AddAlbumPopup/AddAlbumPopup";

export type LibrarySlice = {
  library: Album[];
  addAlbum: (album: Album) => void;
  removeAlbum: (id: string) => void;
  setTracks: (id: string, tracks: Album["tracks"]) => void;
};

export const createLibrarySlice = (set: SetState<StoreState>) => {
  return {
    library: [],
    addAlbum: (album: Album) => {
      set(state => {
        if (state.library.find(a => a.id === album.id)) {
          return;
        }
        state.library.push(album);
      });
    },
    setTracks: (id: string, tracks: Album["tracks"]) => {
      set(state => {
        const album = state.library.find(a => a.id === id);
        if (!album) {
          return;
        }
        album.tracks = tracks;
      });
    },
    removeAlbum: (id: string) => {
      set(state => {
        state.library = state.library.filter(album => album.id !== id);
      });
    },
  };
};
