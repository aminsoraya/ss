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
  band: string;
  text: string;
  price: string;
  img: string;
}
export interface Search {
  mostPopularKeywords: Array<{ text: string; link: string }>;
  popularItems: Array<PopularItem>;
}

export type AmazingOfffer = MostPopular;
