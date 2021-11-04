export async function formatBookSearchResults(res: any) {
  const bookSearchResults = res
    // filter books without imageLinks
    .filter((book: any) => book.volumeInfo.imageLinks)
    .map((book: any) => {
      return {
        id: book.id,
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        imageLink: book.volumeInfo.imageLinks.thumbnail,
        selfLink: book.selfLink,
      };
    });
  return bookSearchResults;
}
