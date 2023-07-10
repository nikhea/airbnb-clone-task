"use client";
import dynamic from "next/dynamic";
import { useCategoryStore } from "@/hooks/useCategoryStore";
import { useListingFilter } from "@/hooks/useFiliterList";
import Categories from "../layout/Categories/Categories";
import Listing from "@/components/Listing/Listing";
import MapIcon from "@/components/Map/MapIcon";
import MapComponent from "../Map/MapComponent";
const DynamicMap = dynamic(() => import("@/components/Map/MapComponent"), {
  ssr: false,
});
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
      <DynamicMap />
      <MapIcon />
    </div>
  );
};
export default Content;
