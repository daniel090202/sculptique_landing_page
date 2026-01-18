import { NoThingHasWorkedCard } from "../components";

import NothingHasWorkedImage01 from "../assets/images/symptom_section/nothing_has_worked_image_01.webp";
import NothingHasWorkedImage02 from "../assets/images/symptom_section/nothing_has_worked_image_02.webp";
import NothingHasWorkedImage03 from "../assets/images/symptom_section/nothing_has_worked_image_03.webp";

import MoneyBackImageIcon from "../assets/images/common/money_back_icon.webp";
import DrainageImageDesktop03 from "../assets/images/symptom_section/drainage_image_desktop_03.webp";

interface CardData {
  id: number;
  image: string;
  title: string;
  reason: string;
}

const NoThingHasWorkedSection = () => {
  const HealthMythCardsSection = () => {
    const cardsData: CardData[] = [
      {
        id: 1,
        image: NothingHasWorkedImage01,
        title: "You cut out gluten, dairy, sugar. You ate clean for months.",
        reason:
          "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.",
      },
      {
        id: 2,
        image: NothingHasWorkedImage02,
        title: "You tried viral lymphatic drops from TikTok.",
        reason:
          'They\'re just pricey water with trace herbs. The "active ingredients" are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine.',
      },
      {
        id: 3,
        image: NothingHasWorkedImage03,
        title: "You got lymphatic massage or bought compression socks.",
        reason:
          "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own.",
      },
    ];

    return (
      <div
        className={
          "mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]"
        }
      >
        {cardsData.map((card) => (
          <NoThingHasWorkedCard key={card.id} data={card} />
        ))}
      </div>
    );
  };

  return (
    <section className={"bg-[#f7f2e7] pb-[70px] mt-[35px]"}>
      <div className={"max-w-[1240px] mx-auto"}>
        <h2
          className={
            "my-[16px] font-lora text-[32px] font-[450] leading-[1.3em] text-center"
          }
        >
          Why Nothing Has <span className={"text-[#039869]"}>Worked</span>
        </h2>

        {HealthMythCardsSection()}

        <div className={"flex items-center justify-center"}>
          <img
            src={DrainageImageDesktop03}
            alt={"drainage_image"}
            className={"w-[920px] h-[218px] object-cover"}
          />
        </div>

        <div className={"flex flex-col items-center justify-center"}>
          <button
            className={
              "mt-[24px] py-[18px] px-[80px] bg-black text-white rounded-[4px] font-nunito font-[800] text-[18px] cursor-pointer hover:opacity-80"
            }
          >
            {"Try Lymphatic Drainage Risk-Free"}
          </button>

          <p className={"mt-[16px] flex items-center gap-[16px]"}>
            <span>
              <img
                src={MoneyBackImageIcon}
                alt={MoneyBackImageIcon}
                className={"w-[24px] h-[24px] object-cover"}
              />
            </span>

            <span className={"font-nunito font-[700] text-[16px]"}>
              {"60 day money-back guarantee"}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NoThingHasWorkedSection;
