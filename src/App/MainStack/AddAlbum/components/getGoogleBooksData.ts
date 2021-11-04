/* eslint-disable @typescript-eslint/no-explicit-any */
// external dependencies
import {Alert} from "react-native";

export async function getGoogleBooksData(item: any) {
  const googleBook = await fetch(item.selfLink).then(res => res.json());
  console.log(googleBook);
  if (item.volumeInfo.title) {
    Alert.alert(
      "Create New Album",
      `Would you like to create a new album linked to «${item.volumeInfo.title}»?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancelled"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => console.log("created a folder"),
          style: "default",
        },
      ],
    );
  }
}
