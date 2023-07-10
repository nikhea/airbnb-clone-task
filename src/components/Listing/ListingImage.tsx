"use client";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import HeartButton from "./HeartButton";
import { ListingItem } from "@/types/ListingItem";
import SliderButton from "../UI/SliderButton";
SwiperCore.use([
  Navigation,
  Pagination,
  EffectCoverflow,
  EffectCoverflow,
  Autoplay,
]);
type ListingImage = {
  images: StaticImageData[] | string[];
  data: ListingItem;
};
export const ListingImage: FC<ListingImage> = ({ images, data }) => {
  const displayImages = images.map((image, index) => (
    <SwiperSlide key={index}>
      <div className="relative w-full overflow-hidden h-[300px]  rounded-xl">
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
    </SwiperSlide>
  ));
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={3}
    >
      <div className=" group">
        <div> {displayImages}</div>
        <SliderButton />
      </div>
    </Swiper>
  );
};
