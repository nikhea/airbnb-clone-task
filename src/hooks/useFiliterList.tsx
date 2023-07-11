import { useState, useEffect } from "react";
import { ListingItem } from "@/types/ListingItem";
import { ListingData } from "@/data/listingDataDemo";

export const useListingFilter = (
  category: string | undefined
): ListingItem[] => {
  const [filteredData, setFilteredData] = useState<ListingItem[]>([]);
  useEffect(() => {
    if (!category || category === "rooms") {
      setFilteredData(ListingData);
    } else {
      const filteredList = ListingData.filter(
        (item) => item.category === category.toLowerCase()
      );
      setFilteredData(filteredList);
    }
  }, [category]);

  return filteredData;
};
