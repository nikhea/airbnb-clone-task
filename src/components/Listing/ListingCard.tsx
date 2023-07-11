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
          <div>
            <HeartButton itemID={data.id} isFavorite={data.isFavorite} />
          </div>
        </div>
        <div className={style.listingCard__name}>{data.name}</div>
        <div className={style.listingCard__StateCountry}>
          <div>
            {data?.location.state}, {data.location.country}
          </div>
          <div className={style.listingCard__rating}>
            <AiFillStar size={18} className="mr-2" /> {data?.averageRating}
          </div>
        </div>
        <div className={style.listingCard__hostName}>
          Hosted by <span>{data?.hostName}</span>
        </div>
        <div className={style.listingCard__monthContainer}>
          <span>{data?.month} </span>
          {data?.availability}
        </div>
        <div className={style.listingCard__priceContainer}>
          <div className={style.listingCard__price}>$ {data?.price}</div>

          <div className={style.listingCard__night}>night</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
{
}
