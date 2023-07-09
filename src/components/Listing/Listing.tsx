"use client";
import React from "react";
import ListingCard from "./ListingCard";
import Container from "../UI/Container";
import { useListingStore } from "@/hooks/useListingStore";
import { ListingItem } from "@/types/ListingItem";
import { ListingData } from "@/data/listingData";

const Listing = () => {
  // const { listingData } = useListingStore();
  const displayListing = ListingData.map(
    (listing: ListingItem, index: number) => (
      <ListingCard data={listing} key={index} />
    )
  );
  return (
    <Container>
      <div className="grid grid-cols-1 gap-3 my-3 md:grid-cols-2 lg:grid-cols-4">
        {displayListing}
      </div>
    </Container>
  );
};

export default Listing;