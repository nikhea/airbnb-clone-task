"use client";
import { useCategoryStore } from "@/hooks/useCategoryStore";
import { useListingFilter } from "@/hooks/useFiliterList";
import Categories from "../layout/Categories/Categories";
import Listing from "../Listing/Listing";

const Content = () => {
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const setSelectedCategory = useCategoryStore(
    (state) => state.setSelectedCategory
  );
  const filteredListingData = useListingFilter(selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Categories onCategoryChange={handleCategoryChange} />
      <Listing listingData={filteredListingData} />
    </div>
  );
};
export default Content;