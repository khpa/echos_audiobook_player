import TrackPlayer, {Track} from "react-native-track-player";
import {useStore} from "../../../../store/useStore";
import {Album} from "../../SearchStack/AddAlbumPopup";

export async function playAlbum(album: Album) {
  await TrackPlayer.reset();

  let newQueue: Track[] = [];
  for (let i = 0; i < album.chapters.length; i++) {
    newQueue.push({
      id: album.chapters[i].index,
      url: album.chapters[i].url,
      title: album.chapters[i].title,
      album: album.title,
      artwork: album.image,
    });
  }
  await TrackPlayer.add(newQueue);
  await TrackPlayer.play();
}
