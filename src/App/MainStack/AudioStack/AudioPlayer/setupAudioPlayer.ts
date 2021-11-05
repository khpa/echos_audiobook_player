import TrackPlayer, {Capability} from "react-native-track-player";

export const setupAudioPlayer = async () => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    return;
  }

  await TrackPlayer.setupPlayer({});
  await TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
  });
};
