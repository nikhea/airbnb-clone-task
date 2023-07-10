import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import HeartButton from "./HeartButton";
import { ListingItem } from "@/types/ListingItem";

type ListingImage = {
  images: StaticImageData[] | string[];
  data: ListingItem;
};
export const ListingImage: FC<ListingImage> = ({ images, data }) => {
  const displayImages = images.map((image, index) => (
    <div
      key={index}
      className="relative w-full overflow-hidden h-[300px]  rounded-xl"
    >
      <Image
        fill
        className="object-cover w-full h-full transition group-hover:scale-110"
        src={image}
        alt="Listing"
      />
      <div className="absolute top-3 right-3">
        <HeartButton itemID={data.id} isFavorite={data.isFavorite} />
      </div>
    </div>
  ));
  return <div>{displayImages}</div>;
};
