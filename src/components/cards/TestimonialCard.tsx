import React from "react";

import RatingStarsImage from "../../assets/images/common/rating_stars.webp";
import VerfiedCustomerBanner from "../../assets/images/common/verified_customer_banner.webp";

interface TestimonialProps {
  name?: string;
  location?: string;
  rating?: number;
  title?: string;
  content?: string;
  avatarUrl?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name = "Margaret Ellison",
  location = "FL",
  rating = 5,
  title = "Even my husband noticed... the spark came back.",
  content = "After years of hiding under coverups, picking apart my body, and feeling disconnected, I finally feel at ease again. I feel less bloated, lighter, like my body is working with me not against me. These past months, I've been present. Even my marriage feels renewed, not just in how I look but in how I feel. It's hard to explain, but once you try it you'll get it. I'd recommend this to my closest friends without question.",
  avatarUrl = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
}) => {
  return (
    <div className={"bg-[#f3eee0] rounded-[12px] p-[12px]"}>
      <div className="flex items-start gap-6 mb-6">
        <div className={"flex-shrink-0"}>
          <img
            alt={name}
            src={avatarUrl}
            className={"w-[71px] h-[72px] rounded-full object-cover"}
          />
        </div>

        <div className={"flex-1 pt-2 flex items-start gap-3 mb-3"}>
          <div>
            <h3
              className={"text-[16px] font-nunito font-semibold text-gray-900"}
            >
              {name} | {location}
            </h3>

            <img
              src={RatingStarsImage}
              alt={RatingStarsImage}
              className={"mt-[6px] w-[100px] h-[18px] object-cover"}
            />
          </div>

          <div className={"flex items-center gap-1 text-green-600"}>
            <img
              src={VerfiedCustomerBanner}
              alt={VerfiedCustomerBanner}
              className={"w-[120px] h-[20px] object-cover"}
            />
          </div>
        </div>
      </div>

      {/* Review Content */}
      <div className={"space-y-[8px]"}>
        <h4
          className={
            "text-[16px] font-nunito font-bold text-gray-900 leading-tight"
          }
        >
          {title}
        </h4>

        <p className="text-[16px] font-nunito leading-[1.3rem]">{content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
