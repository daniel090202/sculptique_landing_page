import React from "react";

import Brand01 from "../assets/images/brand_carousel/brand_01.webp";
import Brand02 from "../assets/images/brand_carousel/brand_02.webp";
import Brand03 from "../assets/images/brand_carousel/brand_03.webp";

const AutoScrollBanner: React.FC<{ className?: string }> = ({ className }) => {
  const brands = [
    Brand01,
    Brand02,
    Brand01,
    Brand03,
    Brand01,
    Brand02,
    Brand01,
    Brand03,
  ];

  return (
    <div
      className={`w-full bg-[#f3eee0] py-[20px] overflow-hidden ${className}`}
    >
      <h2
        className={
          "text-center text-[24px] font-nunito text-gray-800 mb-[20px]"
        }
      >
        {"As Seen In"}
      </h2>

      <div className={"relative"}>
        <div className={"flex animate-scroll"}>
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <img
                src={brand}
                alt={brand}
                className={
                  "h-[30px] font-serif tracking-wider text-gray-700 whitespace-nowrap"
                }
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AutoScrollBanner;
