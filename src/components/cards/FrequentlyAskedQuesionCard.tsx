import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FrequentlyAskedQuesionCard: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div className={"border-b border-white "}>
      <button
        onClick={onToggle}
        className={
          "w-full flex items-center justify-between py-5 px-6 text-left transition-colors cursor-pointer"
        }
      >
        <p className="text-[18px] font-nunito font-[500] pr-8">
          {item.question}
        </p>

        <ChevronDown
          className={`w-[26px] h-[26px] font-[300] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 font-nunito font-[500] text-[16px] leading-[1.3em]">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuesionCard;
