import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

type favoritesState = {
  isFavorite: boolean;
  toggleFavorite: () => void;
};

export const useFavorites = create<favoritesState>()(
  devtools(
    persist(
      (set) => ({
        isFavorite: false,
        toggleFavorite: () =>
          set((state) => ({ isFavorite: !state.isFavorite })),
      }),
      {
        name: "isFavorite-storage", // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      }
    )
  )
);
