import TrackPlayer, {State} from "react-native-track-player";

export const togglePlayback = async (playbackState: State) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack == null) {
    // TODO: Perhaps present an error or restart the playlist?
  } else {
    if (playbackState !== State.Playing) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};
