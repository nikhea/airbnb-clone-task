import { ListingData } from "@/data/listingData";
import React from "react";
import ListingCard from "./ListingCard";
import Container from "../UI/Container";

const Listing = () => {
  const displayListing = ListingData.map((listing, index) => (
    <ListingCard data={listing} key={index} />
  ));
  return (
    <Container>
      <div className="grid grid-cols-3 gap-3">{displayListing}</div>
    </Container>
  );
};

export default Listing;
