// external dependencies
import {FileSystem} from "react-native-file-access";

// internal dependencies
import {useStore} from "../../../../store/store";
import {Album, Chapter} from "../../SearchStack/AddAlbumPopup/AddAlbumPopup";

export async function getChapters(album: Album) {
  const localRootFolder = useStore.getState().localRoot;
  const folderPath = `${localRootFolder}/${album.title}`;
  const rawTracks = await FileSystem.ls(folderPath);

  rawTracks.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let counter = 0;
  const chapters: Chapter[] = rawTracks.map(chapter => {
    const index = counter++;
    const chapterTitle = cleanChapter(chapter);
    const chapterUrl = `${folderPath}/${chapter}`;
    const chapterCover = album.image;

    return {
      index,
      title: chapterTitle,
      url: chapterUrl,
      artwork: chapterCover,
    };
  });

  return chapters;
}

function cleanChapter(track: string) {
  const cleanChapter = track.split(".m").shift() || "";
  return cleanChapter;
}
