import { useState } from "react";

import { FrequentlyAskedQuesionCard } from "../components";

import MoneyBackImageIcon from "../assets/images/common/money_back_icon.webp";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FrequentlyAskedQuestionSection = () => {
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How is this different from lymphatic drops I saw on TikTok?",
      answer: `Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.

Sculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more.`,
    },
    {
      id: 2,
      question: "Why didn't my diet changes work?",
      answer: `Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.

Sculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more.`,
    },
    {
      id: 3,
      question: "How long until I see results?",
      answer: `Most women notice something within the first week—feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6. But true restoration takes time—we recommend 90 days for complete results.`,
    },
    {
      id: 4,
      question: "Is this safe? Any side effects?",
      answer: `Sculptique contains 100% natural botanical ingredients used safely for centuries. The most common experience is increased urination in the first few days (expected—you're flushing excess fluid). Serious side effects are extremely rare. However, if you have pre-existing conditions or take prescription medications, consult your healthcare provider first.`,
    },
    {
      id: 5,
      question: "Can I take this with other supplements?",
      answer: `Yes. Sculptique works synergistically with most supplements. However, if you're taking blood thinners, diuretics, thyroid medication, or immune-suppressing drugs, check with your healthcare provider first.`,
    },
    {
      id: 6,
      question: "How do I use it?",
      answer: `Take 2 capsules daily with water. Any time of day (though mornings are ideal). With or without food. Just be consistent.`,
    },
    {
      id: 7,
      question: "What if it doesn't work for me?",
      answer: `You have 60 full days to try it. If you don't feel lighter, less bloated, more energized—send it back. Even if you've taken every capsule. We'll refund your purchase immediately. You only keep Sculptique if it works for YOU.`,
    },
    {
      id: 8,
      question: "Where is this manufactured?",
      answer: `Sculptique is manufactured in the USA at an FDA-registered, GMP-certified facility. We use Infrared Spectroscopy testing, heavy metal testing, and third-party quality control. Every batch is tested to ensure therapeutic doses with no contaminants.`,
    },
    {
      id: 9,
      question: "Why isn't this in stores?",
      answer: `Two reasons: Quality control (we oversee the entire process from sourcing to testing) and price (retail markup would make it cost at least double). By selling direct, we maintain the highest quality while keeping the price affordable.`,
    },
    {
      id: 10,
      question: "Is this vegan/gluten-free?",
      answer: `Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients`,
    },
  ];

  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section
      className={
        "mt-[32px] max-w-[1340px] mx-auto flex flex-col items-center px-[15px] md:px-[50px] lg:px-0"
      }
    >
      <h2
        className={"text-[24px] md:text-[32px] font-lora font-[500] my-[16px]"}
      >
        {"Frequently Asked Questions"}
      </h2>

      <div
        className={
          "max-w-[824px] bg-gradient-to-b from-white to-[#f3eee0] p-[16px] md:p-[32px] rounded-[16px]"
        }
      >
        {faqData.map((item) => (
          <FrequentlyAskedQuesionCard
            key={item.id}
            item={item}
            isOpen={openItemId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>

      <button
        className={
          "w-full mt-[24px] text-[16px] md:text-[18px] font-nunito md:max-w-[450px] bg-black text-white p-[16px] md:px-[80px] md:py-[18px] font-[600] rounded-[4px] hover:opacity-80 transition-colors duration-200 cursor-pointer"
        }
      >
        Try Lymphatic Drainage Risk-Free
      </button>

      <div className={"flex items-center justify-center gap-[16px] mt-[16px]"}>
        <img
          src={MoneyBackImageIcon}
          alt={"Money Back Icon"}
          className={"w-[24px] h-[24px] object-cover"}
        />
        <span className={"text-[16px] font-nunito font-[500]"}>
          {"60-Day Money-Back Guarantee"}
        </span>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestionSection;
