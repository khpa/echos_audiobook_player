export interface VolumeInfo {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfoClass;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
}

export interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: Epub;
  pdf: PDF;
  accessViewStatus: string;
}

export interface Epub {
  isAvailable: boolean;
  acsTokenLink: string;
}

export interface PDF {
  isAvailable: boolean;
}

export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice: Price;
  retailPrice: Price;
  buyLink: string;
}

export interface Price {
  amount: number;
  currencyCode: string;
}

export interface VolumeInfoClass {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  pageCount: number;
  dimensions: Dimensions;
  printType: string;
  mainCategory: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  contentVersion: string;
  imageLinks: ImageLinks;
  language: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface Dimensions {
  height: string;
  width: string;
  thickness: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}

export interface IndustryIdentifier {
  type: string;
  identifier: string;
}
