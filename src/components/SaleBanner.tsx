import React from "react";

import SaleBannerImage01 from "../assets/images/sale_banner/banner_image_01.webp";
import SaleBannerImage02 from "../assets/images/sale_banner/banner_image_02.webp";
import SaleBannerImage03 from "../assets/images/sale_banner/banner_image_03.webp";
import SaleBannerImage04 from "../assets/images/sale_banner/banner_image_04.webp";

interface FeatureProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={imageUrl}
        alt={title}
        className={"w-fit h-[40px] object-cover mb-[16px]"}
      />

      <p className={"font-[700] text-[16px] font-nunito my-[8px]"}>{title}</p>

      <p className={"text-[16px] font-nunito font-[400]"}>{description}</p>
    </div>
  );
};

const SaleBanner: React.FC = () => {
  const features: FeatureProps[] = [
    {
      imageUrl: SaleBannerImage01,
      title: "Free Shipping from USA",
      description: "On all orders",
    },
    {
      imageUrl: SaleBannerImage02,
      title: "Naturally Supports Your Body",
      description: "Promotes healthy immune cell functions",
    },
    {
      imageUrl: SaleBannerImage03,
      title: "100% Natural Ingredients",
      description: "8 active, natural ingredients",
    },
    {
      imageUrl: SaleBannerImage04,
      title: "Try it Risk Free for 60 Days",
      description: "60-day money-back guarantee",
    },
  ];

  return (
    <div className={"w-full bg-[#f3eee0] py-[32px]"}>
      <div
        className={
          "px-[15px] md:px-[50px] lg:px-0 max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-4"
        }
      >
        {features.map((feature, index) => (
          <Feature
            key={index}
            imageUrl={feature.imageUrl}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SaleBanner;
