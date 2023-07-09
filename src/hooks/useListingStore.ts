import { ListingData } from "@/data/listingData";
import { ListingItem } from "@/types/ListingItem";
import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

type ListingState = {
  listingData: ListingItem[];
  toggleFavorite: (itemId: number) => any;
};

export const useListingStore = create<ListingState>()(
  devtools(
    persist(
      (set) => ({
        listingData: ListingData,
        toggleFavorite: (itemId: number) => {
          set((state) => {
            const updatedData = state.listingData.map((item) => {
              if (item.id === itemId) {
                return {
                  ...item,
                  isFavorite: !item.isFavorite,
                };
              }
              return item;
            });
            return { listingData: updatedData };
          });
        },
      }),
      {
        name: "listing-storage", // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      }
    )
  )
);
