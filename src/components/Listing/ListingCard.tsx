"use client";

import Image from "next/image";

import HeartButton from "./HeartButton";

interface ListingCardProps {
  data: any;
}

const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col w-full gap-2">
        <div className="relative w-full overflow-hidden  aspect-square rounded-xl">
          <Image
            fill
            className="object-cover w-full h-full transition  group-hover:scale-110"
            src={data.images}
            alt="Listing"
          />
          <div className="absolute  top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="text-lg font-semibold">
          {data?.location.state}, {data.location.country}
        </div>
        <div className="font-light text-neutral-500">
          {/* {reservationDate || data.category} */} hello
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {data.price}</div>

          <div className="font-light">night</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
