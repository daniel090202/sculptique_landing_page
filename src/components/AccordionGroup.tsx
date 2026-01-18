import React from "react";

import ExpandButtonImage from "../assets/images/common/expand_button.webp";

interface AccordionGroupProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({
  title,
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className={`w-full mb-4 p-[16px] border-[1px] transition-all rounded-[32px] duration-300 ${
        isOpen
          ? "border-[#039869] bg-white"
          : "border-[#d2d2d2] bg-white hover:border-gray-300"
      }`}
    >
      <button
        onClick={onToggle}
        className={
          "w-full flex items-center justify-between focus:outline-none"
        }
      >
        <span className={"text-[16px] font-nunito font-semibold text-left"}>
          {title}
        </span>

        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <img
            src={ExpandButtonImage}
            alt={"expand-button"}
            className={
              "w-[24px] h-[24px] object-cover transition-all duration-300"
            }
          />
        </div>
      </button>

      {isOpen ? (
        <div
          className={`pt-[16px] overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default AccordionGroup;
