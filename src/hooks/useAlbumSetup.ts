// external dependencies
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import type { Track } from "react-native-track-player";
import TrackPlayer from "react-native-track-player";

// internal dependencies
import { selectTrackPlayer } from "../store/slices/trackplayer";
import type { Album } from "../App/MainStack/SearchStack/AddAlbumPopup";
import { selectLibrary } from "../store/slices/library";
import { useStore } from "../store/store";

export async function useAlbumSetup(album?: Album) {
  const setActiveAlbum = useStore(selectTrackPlayer.setActiveAlbum);
  const updateAlbum = useStore(selectLibrary.updateAlbum);
  const navigation = useNavigation();

  useEffect(() => {
    async function albumSetup() {
      if (album && album.chapters.length > 0) {
        setActiveAlbum(album);
        updateAlbum(album.id, "lastPlayed");

        const newQueue: Track[] = [];
        if (album.chapters.length > 0) {
          for (let i = 0; i < album.chapters.length; i++) {
            newQueue.push({
              id: album.chapters[i]?.index,
              url: album.chapters[i]?.url || "",
              title: album.chapters[i]?.title,
              album: album.title,
              artwork: album.image,
              duration: album.duration,
            });
          }
        }
        await TrackPlayer.reset();
        await TrackPlayer.setRate(album?.playbackSpeed || 1);
        await TrackPlayer.add(newQueue);
        await TrackPlayer.skip(album.lastPlayedChapterIndex || 0);
        const position =
          album.chapters[album.lastPlayedChapterIndex || 0]?.lastPosition || 0;

        await TrackPlayer.seekTo(position);
        await TrackPlayer.play();

        navigation.navigate(
          "AudioStack" as never,
          { screen: "AudioPlayer", params: { album: album } } as never
        );
      }
    }
    albumSetup();
  }, [album]);
}
