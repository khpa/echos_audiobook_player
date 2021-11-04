// external dependencies
import {FileSystem} from "react-native-file-access";

// internal dependencies
import {useStore} from "../../../../store/useStore";
import {Track} from "../../SearchStack/AddAlbumPopup/AddAlbumPopup";

export async function getAlbumTracks(folderName: string) {
  const localRootFolder = useStore.getState().localRoot;
  const folderPath = `${localRootFolder}/${folderName}`;
  const rawTracks = await FileSystem.ls(folderPath);

  rawTracks.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let counter = 1;
  const tracks: Track[] = rawTracks.map(track => {
    const index = counter++;
    const trackTitle = track.split(".m").shift();
    const trackPath = `${folderPath}/${trackTitle}`;
    return {
      index,
      title: trackTitle,
      path: trackPath,
    };
  });

  return tracks;
}
