// external dependencies
import type {SetState} from "zustand";

// internal dependencies
import type {StoreState} from "../useStore";

export type Album = {
  id: string;
  title: string;
  image: string;
};

export type LibrarySlice = {
  library: Album[];
  addAlbum: (album: Album) => void;
  removeAlbum: (id: string) => void;
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
    removeAlbum: (id: string) => {
      set(state => {
        state.library = state.library.filter(album => album.id !== id);
      });
    },
  };
};
