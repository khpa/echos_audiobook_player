// external dependencies
import type {GetState, SetState} from "zustand";

// internal dependencies
import type {StoreState} from "../useStore";

export type Album = {
  isbn13: string;
  title: string;
  image: string;
};

export interface LibrarySlice {
  library: Album[];
  addAlbum: (album: Album) => void;
  removeAlbum: (isbn13: string) => void;
}

export const createLibrarySlice = (
  set: SetState<StoreState>,
  get: GetState<StoreState>,
) => ({
  library: [],
  addAlbum: (album: Album) => {
    set(state => ({
      library: [...state.library, album],
    }));
  },
  removeAlbum: (isbn13: string) => {
    set(state => ({
      ...state,
      library: state.library.filter(album => album.isbn13 !== isbn13),
    }));
  },
});
