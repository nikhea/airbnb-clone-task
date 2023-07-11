"use client";
import React from "react";
import ListingCard from "./ListingCard";
import Container from "../UI/Container";
import { ListingItem } from "@/types/ListingItem";
import style from "./style/listing.module.scss";
const Listing = ({ listingData }: any) => {
  const displayListing = listingData.map(
    (listing: ListingItem, index: number) => (
      <ListingCard data={listing} key={index} />
    )
  );
  return (
    <Container>
      <div className={style.listing}>{displayListing}</div>
    </Container>
  );
};

export default Listing;
