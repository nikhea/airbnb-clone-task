import { StaticImageData } from "next/image";

export type ListingItem = {
  id: number;
  image: string | StaticImageData;
  name: string;
  hostName: string;
  location: {
    state: string;
    country: string;
  };
  availability: string;
  month: string;
  price: number;
  averageRating: number;
  category: string;
  isFavorite: boolean;
};
