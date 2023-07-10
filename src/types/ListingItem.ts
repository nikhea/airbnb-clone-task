import { StaticImageData } from "next/image";

export type ListingItem = {
  id: number;
  images: string[] | StaticImageData[];
  name: string;
  hostName: string;
  location: {
    state: string;
    country: string;
  };
  avalibility: string;
  month: string;
  price: number;
  avarageRating: number;
  category: string;
  isFavorite: boolean;
};
