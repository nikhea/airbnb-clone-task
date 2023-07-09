"use client";

import Image from "next/image";

import HeartButton from "./HeartButton";
import { AiFillStar } from "react-icons/ai";

interface ListingCardProps {
  data: any;
}

const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col w-full gap-2">
        {/* aspect-square */}
        <div className="relative w-full overflow-hidden h-[500px]  rounded-xl">
          <Image
            fill
            className="object-cover w-full h-full transition group-hover:scale-110"
            // src={data?.images}
            src="/images/air.webp"
            alt="Listing"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold capitalize">
            {data?.location.state}, {data.location.country}
          </div>
          <div>
            <AiFillStar size={18} className="mr-2"/> {data?.avarageRating}
          </div>
        </div>
        <div className="font-light text-neutral-500">
          Hosted by {data?.hostName}
        </div>
        <div className="font-light text-neutral-500">
          {data?.month} {data?.avalibility}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {data?.price}</div>

          <div className="font-light">night</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
