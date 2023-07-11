"use client";
import dynamic from "next/dynamic";
import { useCategoryStore } from "@/hooks/useCategoryStore";
import { useListingFilter } from "@/hooks/useFiliterList";
import Categories from "../layout/Categories/Categories";
import Listing from "@/components/Listing/Listing";
import MapIcon from "@/components/Map/MapIcon";
import { useContentStore } from "@/hooks/useContentStore";
const DynamicMap = dynamic(() => import("@/components/Map/MapComponent"), {
  ssr: false,
});
const Content = () => {
  const { isListingVisible } = useContentStore();
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
      {isListingVisible ? (
        <Listing listingData={filteredListingData} />
      ) : (
        <DynamicMap />
      )}
      <MapIcon />
    </div>
  );
};
export default Content;
