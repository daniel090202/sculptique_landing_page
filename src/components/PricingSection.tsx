import { useState } from "react";
import type { Benefit } from "./PricingGroup";
import PricingGroup from "./PricingGroup";

interface Option {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  badge?: string;
  benefits: Benefit[];
}

const PricingSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("option3");

  const options: Option[] = [
    {
      id: "option1",
      title: "1 Bottle",
      subtitle: "1 bottle total | Save $27.99",
      price: "31.96",
      originalPrice: "59.95",
      benefits: [{ type: "shipping", text: "Free USA Shipping" }],
    },
    {
      id: "option2",
      title: "Buy 2 Get 1 Free",
      subtitle: "3 bottles total | Save $115.93",
      price: "63.92",
      originalPrice: "179.85",
      badge: "New Year's Sale",
      benefits: [
        { type: "shipping", text: "Free USA Shipping" },
        { type: "ebook", text: "Free Anti-Bloating Protocol E-book" },
      ],
    },
    {
      id: "option3",
      title: "Buy 3 Get 2 Free",
      subtitle: "5 bottles total | Save $203.87",
      price: "95.88",
      originalPrice: "299.75",
      benefits: [
        { type: "shipping", text: "Free USA Shipping" },
        { type: "ebook", text: "Free Anti-Bloating Protocol E-book" },
        { type: "giftcard", text: "$20 Gift Card" },
      ],
    },
  ];

  return (
    <div className={"w-full mx-auto p-[12px] bg-[#f3eee0] rounded-[8px]"}>
      {options.map((option: Option) => (
        <PricingGroup
          key={option.id}
          title={option.title}
          subtitle={option.subtitle}
          price={option.price}
          originalPrice={option.originalPrice}
          badge={option.badge}
          benefits={option.benefits}
          isChecked={selectedOption === option.id}
          onSelect={() => setSelectedOption(option.id)}
        />
      ))}
    </div>
  );
};

export default PricingSection;
