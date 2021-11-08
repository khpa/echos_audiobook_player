import {useNavigation} from "@react-navigation/native";
import {useEffect} from "react";
import TrackPlayer, {Track} from "react-native-track-player";
import {Album} from "../App/MainStack/SearchStack/AddAlbumPopup";
import {selectLibrary} from "../store/slices/library";
import {selectTrackPlayer} from "../store/slices/trackplayer";
import {useStore} from "../store/store";

export async function useAlbumSetup(album?: Album) {
  const setActiveAlbum = useStore(selectTrackPlayer.setActiveAlbum);
  const updateAlbum = useStore(selectLibrary.updateAlbum);
  const navigation = useNavigation();

  useEffect(() => {
    async function albumSetup() {
      if (album && album.chapters.length > 0) {
        setActiveAlbum(album);
        updateAlbum(album.id, "lastPlayed");
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
              duration: album.duration || undefined,
            });
          }
        }
        await TrackPlayer.add(newQueue);
        await TrackPlayer.skip(album.lastPlayedChapterIndex || 0);

        navigation.navigate(
          "AudioStack" as never,
          {screen: "AudioPlayer"} as never,
        );
        await TrackPlayer.play();
      }
    }
    albumSetup();
  }, [album]);
}

export const usePause = () => {
  return async () => await TrackPlayer.pause();
};

export const useSeekTo = () => {
  return async (position: number) => await TrackPlayer.seekTo(position);
};
