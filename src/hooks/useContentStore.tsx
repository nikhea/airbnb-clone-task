import { create } from "zustand";
type ContentState = {
  isListingVisible: boolean;
  toggleListing: () => void;
};

export const useContentStore = create<ContentState>((set) => ({
  isListingVisible: true,
  toggleListing: () =>
    set((state) => ({ isListingVisible: !state.isListingVisible })),
}));
