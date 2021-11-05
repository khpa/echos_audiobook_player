import TrackPlayer, {Track} from "react-native-track-player";
import {Album} from "../../SearchStack/AddAlbumPopup";

export async function playAlbum(album: Album) {
  await TrackPlayer.reset();

  let newQueue: Track[] = [];
  if (album.chapters.length > 0) {
    for (let i = 0; i < album.chapters.length; i++) {
      newQueue.push({
        id: album.chapters[i]?.index,
        url: album.chapters[i]?.url || "",
        title: album.chapters[i]?.title,
        album: album.title,
        artwork: album.image,
      });
    }
  }
  await TrackPlayer.add(newQueue);
  await TrackPlayer.play();
}
