// external dependencies
import {FileSystem} from "react-native-file-access";

// internal dependencies
import {useStore} from "../../../../store/useStore";
import {Album, Track} from "../../SearchStack/AddAlbumPopup/AddAlbumPopup";

export async function getAlbumTracks(book: Album) {
  const localRootFolder = useStore.getState().localRoot;
  const folderPath = `${localRootFolder}/${book.title}`;
  const rawTracks = await FileSystem.ls(folderPath);

  rawTracks.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let counter = 0;
  const tracks: Track[] = rawTracks.map(track => {
    const index = counter++;
    const trackTitle = cleanTrack(track);
    const trackUrl = `${folderPath}/${track}`;

    return {
      index,
      title: trackTitle,
      url: trackUrl,
    };
  });

  return tracks;
}

function cleanTrack(track: string) {
  const cleanTrack = track.split(".m").shift() || "";
  return cleanTrack;
}
