export interface MostPopular {
  img: string;
  brand: string;
  name: string;
  score: number;
  reviewCount: number;
  finalPrice: string;
  originalPrice: string;
}

export interface PopularItem {
  link: string;
  brand: string;
  text: string;
  price: string;
  img: string;
}

type TextLink = {
  img: string;
  link: string;
};

export type UsefulKeyword={
  text:string,
  link:string
}
export type BatchLink = {
  data: TextLink[];
  totalCount: number;
  currentPage: number;
};
export type MostSellingProduct = MostPopular;

export type UsefulProduct = MostPopular;

export type BrandLink = {
  link: string;
  img: string;
};

export type PopularCategory = {
  link: string;
  img: string;
};

export type Category={
  image:string,
  text:string,
  link:string
}
export interface Search {
  mostPopularKeywords: Array<{ text: string; link: string }>;
  popularItems: Array<PopularItem>;
}

export type AmazingOfffer = MostPopular;
