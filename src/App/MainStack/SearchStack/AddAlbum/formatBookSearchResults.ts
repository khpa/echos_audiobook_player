import type { VolumeInfo } from "../../../../types/GoogleBooksApi";

import type { BookSearchResults } from ".";

export async function formatBookSearchResults(
  result: VolumeInfo | never[]
): Promise<BookSearchResults[]> {
  if (result instanceof Array) {
    const bookSearchResults = result
      .filter((book: VolumeInfo) => book.volumeInfo.imageLinks)
      .map((book: VolumeInfo) => {
        return {
          id: book.id,
          title: book.volumeInfo.title,
          subtitle: book.volumeInfo.subtitle,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          imageLink: book.volumeInfo.imageLinks.thumbnail,
          selfLink: book.selfLink,
          industryIdentifiers: book.volumeInfo.industryIdentifiers,
        };
      });
    return bookSearchResults;
  }
  return [];
}
