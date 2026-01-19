import React from "react";

import { Star, User, Check } from "lucide-react";

interface Review {
  id: number;
  rating: number;
  author: string;
  isVerified: boolean;
  date: string;
  content: string;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className={"flex gap-0.5"}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-[16px] h-[16px] ${
            index < rating
              ? "fill-[#FA8A8A] text-[#FA8A8A]"
              : "fill-[#FA8A8A] text-[#FA8A8A]"
          }`}
        />
      ))}
    </div>
  );
};

const UserAvatar: React.FC = () => {
  return (
    <div className="relative">
      <div
        className={
          "w-[36px] h-[36px] bg-[#e0e0e080] flex items-center justify-center"
        }
      >
        <User className="w-6 h-6 text-[#fa8a8a]" />
      </div>

      <div
        className={
          "absolute bottom-0 right-0 w-[12px] h-[12px] bg-[#fa8a8a] flex items-center justify-center"
        }
      >
        <Check className={"text-white w-[8px] h-[8px]"} />
      </div>
    </div>
  );
};

const VerifiedBadge: React.FC = () => {
  return (
    <span
      className={
        "font-montserrat bg-[#fa8a8a] text-white text-[13px] px-1.5 font-[500]"
      }
    >
      {"Verified"}
    </span>
  );
};

const ReviewHeader: React.FC<{
  author: string;
  isVerified: boolean;
  rating: number;
  date: string;
}> = ({ author, isVerified, rating, date }) => {
  return (
    <div className={"w-full flex flex-col items-start justify-between"}>
      <div className={"w-full flex items-center justify-between mb-[8px]"}>
        <StarRating rating={rating} />

        <span className="text-sm text-gray-500">{date}</span>
      </div>

      <div className={"flex items-start justify-start gap-[8px]"}>
        <UserAvatar />

        <div className="flex items-center gap-2 mb-2">
          <span
            className={"font-montserrat font-medium text-[16px] text-[#fa8a8a]"}
          >
            {author}
          </span>

          {isVerified && <VerifiedBadge />}
        </div>
      </div>
    </div>
  );
};

const CustomerReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className={"bg-white rounded-lg py-[16px]"}>
      <ReviewHeader
        author={review.author}
        isVerified={review.isVerified}
        rating={review.rating}
        date={review.date}
      />

      <p
        className={
          "mt-[10px] font-[600] leading-[1.3em] text-[16px] font-nunito"
        }
      >
        {review.content}
      </p>
    </div>
  );
};

export default CustomerReviewCard;
