// external dependencies
import type {SetState} from "zustand";

// internal dependencies
import type {StoreState} from "../store";
import type {
  Album,
  Chapter,
} from "../../App/MainStack/SearchStack/AddAlbumPopup";

export type LibrarySlice = {
  library: Album[];
  addAlbum: (album: Album) => void;
  updateAlbum: (id: string, key: keyof Album, value?: any) => void;
  updateChapter: (
    id: string,
    index: number,
    key: keyof Chapter,
    value?: any,
  ) => void;
  removeAlbum: (id: string) => void;
};

export const createLibrarySlice = (set: SetState<StoreState>): LibrarySlice => {
  return {
    library: [],
    addAlbum: album => {
      set(state => {
        if (state.library.find(a => a.id === album.id)) {
          return;
        }
        state.library.push(album);
      });
    },
    updateAlbum: (id, key, value) => {
      set(state => {
        const album = state.library.find(a => a.id === id);
        if (!album) return;
        switch (key) {
          case "lastPlayed":
            album.lastPlayed = new Date().toISOString();
            break;
          case "chapters":
            album.chapters = value;
            break;
          case "image":
            album.image = value;
            break;
          case "lastPlayedChapterIndex":
            album.lastPlayedChapterIndex = value;
            break;
          case "duration":
            album.duration = value;
            break;
          default:
            console.warn("not found");
            break;
        }
      });
    },
    updateChapter: (id, idx, key, value) => {
      set(state => {
        const album = state.library.find(a => a.id === id);
        if (!album) return;
        const chapter = album.chapters.find(c => c.index === idx);
        if (!chapter) return;
        switch (key) {
          case "lastPosition":
            chapter.lastPosition = value;
            break;
          case "finished":
            chapter.finished = value;
            break;
          default:
            console.warn("not found");
            break;
        }
      });
    },
    removeAlbum: id => {
      set(state => {
        state.library = state.library.filter(album => album.id !== id);
      });
    },
  };
};
