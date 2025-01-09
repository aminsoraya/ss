// Base Types
type Link = {
  link: string;
};

type Image = {
  img: string;
};

type Text = {
  text: string;
};

type TextLink = Link & Text;

type ImageLink = Link & Image;

type PricedItem = {
  price: string;
};

type PricedWithComparison = PricedItem & {
  finalPrice: string;
  originalPrice: string;
};

// Specific Types
export type MostPopular = ImageLink & {
  brand: string;
  name: string;
  score: number;
  reviewCount: number;
} & PricedWithComparison;

export type PopularItem = ImageLink &
  Text &
  PricedItem & {
    brand: string;
  };

export type UsefulKeyword = TextLink;

export type BatchLink = {
  data: ImageLink[];
  totalCount: number;
  currentPage: number;
};

export type MostSellingProduct = MostPopular;

export type UsefulProduct = MostPopular;

export type BrandLink = ImageLink;

export type PopularCategory = ImageLink;

export type Category = ImageLink & Text;

export interface Search {
  mostPopularKeywords: UsefulKeyword[];
  popularItems: PopularItem[];
}
export interface SearchDetailType {
  image: string;
  name: string;
  sideNote: string;
  link: string;
}
export type AmazingOffer = MostPopular;
