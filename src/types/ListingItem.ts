export type ListingItem = {
  id: number;
  images: string[];
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
