"use client";
import React from "react";
import ListingCard from "./ListingCard";
import Container from "../UI/Container";
import { useListingStore } from "@/hooks/useListingStore";

const Listing = () => {
  const { listingData } = useListingStore();
  const displayListing = listingData.map((listing, index) => (
    <ListingCard data={listing} key={index} />
  ));
  return (
    <Container>
      <div className="grid grid-cols-1 gap-3 my-3 md:grid-cols-2 lg:grid-cols-4">
        {displayListing}
      </div>
    </Container>
  );
};

export default Listing;
