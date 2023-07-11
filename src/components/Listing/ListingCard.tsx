"use client";
import Image from "next/image";
import HeartButton from "./HeartButton";
import { AiFillStar } from "react-icons/ai";
import { ListingItem } from "@/types/ListingItem";
import style from "./style/listing.module.scss";
interface ListingCardProps {
  data: ListingItem;
}

const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
  return (
    <div className={`${style.listingCard} group`}>
      <div className={style.listingCard__Item}>
        {/* aspect-square */}
        <div className={style.listingCard__ImageContainer}>
          <Image fill src={data.image} alt="Listing" />
          <div className="absolute top-3 right-3">
            <HeartButton itemID={data.id} isFavorite={data.isFavorite} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold capitalize">
            {data?.location.state}, {data.location.country}
          </div>
          <div className="flex items-center justify-between">
            <AiFillStar size={18} className="mr-2" /> {data?.averageRating}
          </div>
        </div>
        <div className="font-light text-neutral-500">
          Hosted by <span className="capitalize">{data?.hostName}</span>
        </div>
        <div className="font-light text-neutral-500">
          <span className="capitalize">{data?.month} </span>{" "}
          {data?.availability}
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
{
}
