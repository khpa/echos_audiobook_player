/* eslint-disable @typescript-eslint/ban-ts-comment */
// external dependencies
// @ts-ignore
import {BookSearch} from "react-native-google-books";

// internal dependencies
import {config} from "../../../../components";

export async function searchGoogleBooks(searchString: string) {
  if (searchString.length > 2) {
    try {
      const books = await BookSearch.searchbook(
        searchString,
        config.googleBooksApi.key,
      );
      return books.data;
    } catch (err) {
      return [];
    }
  }
}
