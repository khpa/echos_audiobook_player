import {Dirs, FileSystem} from 'react-native-file-access';

export const getLocalLibrary = async () => {
  try {
    const documentPath = Dirs.DocumentDir;
    const text = await FileSystem.cpExternal(
      'content://com.android.providers.media.documents/document/audio%3A26',
      'Sword of Truth - Track 01',
      'audio',
    );
    console.log(text);
  } catch (error) {
    console.log(error);
  }
};
