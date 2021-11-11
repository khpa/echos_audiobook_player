/* eslint-disable @typescript-eslint/ban-ts-comment */
// external dependencies
// @ts-ignore
import { BookSearch } from "react-native-google-books";

// internal dependencies
import { config } from "../../../../util/config";
import type { VolumeInfo } from "../../../../types/GoogleBooksApi";

export async function searchGoogleBooks(searchString: string) {
  if (searchString.length > 2) {
    try {
      const books: VolumeInfo = (
        await BookSearch.searchbook(searchString, config.googleBooksApi.key)
      ).data;
      return books;
    } catch (err) {
      return [];
    }
  } else {
    return [];
  }
}
