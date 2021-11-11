import type { Track } from "react-native-track-player";
import TrackPlayer from "react-native-track-player";

import type { Album } from "../../SearchStack/AddAlbumPopup";

// somehow check if current album is already playing
export async function playAlbum(album: Album) {
  await TrackPlayer.reset();

  const newQueue: Track[] = [];
  if (album.chapters.length > 0) {
    for (let i = 0; i < album.chapters.length; i++) {
      newQueue.push({
        id: album.chapters[i]?.index,
        url: album.chapters[i]?.url || "",
        title: album.chapters[i]?.title,
        album: album.title,
        artwork: album.image,
        duration: album.duration || undefined,
      });
    }
  }
  await TrackPlayer.add(newQueue);
  await TrackPlayer.skip(album.lastPlayedChapterIndex || 0);
  await TrackPlayer.play();
}
