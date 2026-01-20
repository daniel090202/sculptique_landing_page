import React, { useState } from "react";

import TickImageIcon from "../../assets/images/common/check_image_icon.webp";
import SingleDownArrowIcon from "../../assets/images/common/single_down_arrow.webp";

interface IngredientData {
  id: number;
  benefit: string;
  name: string;
  dosage: string;
  image: string;
  details?: string;
}

interface IngredientCardProps {
  data: IngredientData;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={
        "border-r border-b border-black last:border-r-0 p-[24px] bg-white flex flex-col"
      }
    >
      <div className={"flex items-start justify-center gap-[8px]"}>
        <img
          src={TickImageIcon}
          alt={"Tick Icon"}
          className={"w-[16px] h-[16px]"}
        />

        <h3
          className={
            "text-[#0c7c00] font-nunito text-[16px] font-semibold leading-[1.3em]"
          }
        >
          {data.benefit}
        </h3>
      </div>

      <div className={"flex items-center md:flex-col gap-[16px]"}>
        <div className={"my-[12px] flex justify-center items-center"}>
          <img
            src={data.image}
            alt={data.name}
            className={
              "max-w-[69px] max-h-[69px] md:max-w-[120px] md:max-h-[80px] object-contain"
            }
          />
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={
            "w-full flex items-center md:items-start justify-between gap-[8px] text-left group transition-colors"
          }
        >
          <p
            className={"flex-1 text-[16px] font-nunito font-[600]"}
          >{`${data.name} ${data.dosage}`}</p>

          <img
            src={SingleDownArrowIcon}
            alt={"Single Down Arrow Icon"}
            className={`w-[24px] h-[12px] text-gray-400 transition-transform duration-200 flex-shrink-0 cursor-pointer ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Expanded Details */}
      {isExpanded && data.details && (
        <div className={"pt-[12px]"}>
          <p className={"text-[14px] font-nunito font-[500] leading-[1.3em]"}>
            {data.details}
          </p>
        </div>
      )}
    </div>
  );
};

export default IngredientCard;
