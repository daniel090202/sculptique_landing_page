import MoneyBackImageIcon from "../assets/images/common/money_back_icon.webp";
import ExpertAdviceThumbnail from "../assets/images/expert_advice/expert_advice_image.webp";

const ExpertAdviceSection = () => {
  return (
    <section
      className={
        "px-[15px] py-[32px] px-[50px] lg:px-0 w-full bg-white md:py-[56px] max-w-[1340px] mx-auto flex flex-col flex-col-reverse md:flex-row items-center min-h-[552px]"
      }
    >
      {/* Left Content */}
      <div
        className={
          "h-full flex-1 p-[16px] md:p-[32px] bg-[#f7f7f7] md:rounded-l-[12px]"
        }
      >
        <p className={"text-gray-500 text-[16px] font-nunito"}>
          July 4th, 2025
        </p>

        <h1
          className={
            "text-[24px] md:text-[32px] font-lora font-[500] my-[16px]"
          }
        >
          Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic
        </h1>

        <div className={"font-nunito text-[18px] font-[500] mb-[12px]"}>
          <p className={"mb-[12px]"}>
            "Your nutrition plays a powerful role in your appearance. If your
            body is missing key vitamins and nutrients, it can't process fat and
            upkeep healthy connective tissue, which is why unprocessed fat flows
            up and starts pushing up against your skin, forming bumps you know
            as cellulite.
          </p>

          <p>
            SmoothSkin by Sculptique™ contains ingredients that are
            scientifically proven to enhance microcirculation, boost lymphatic
            drainage, and reduce inflammation, which restores your tissue and
            breaks down the fat cells in your skin."
          </p>
        </div>

        <button
          className={
            "w-full mt-[24px] text-[16px] md:text-[18px] font-nunito md:max-w-[450px] bg-black text-white p-[16px] md:px-[80px] md:py-[18px] font-[600] rounded-[4px] hover:opacity-80 transition-colors duration-200 cursor-pointer"
          }
        >
          Try Lymphatic Drainage Risk-Free
        </button>

        <div
          className={"flex items-center justify-center gap-[16px] mt-[24px]"}
        >
          <img
            src={MoneyBackImageIcon}
            alt={"Money Back Icon"}
            className={"w-[24px] h-[24px] object-cover"}
          />
          <span className={"text-[16px] font-nunito font-[500]"}>
            {"60-Day Money-Back Guarantee"}
          </span>
        </div>
      </div>

      {/* Right Image */}
      <div className={"flex-1 relative"}>
        <img
          src={ExpertAdviceThumbnail}
          alt={"Expert Advice Thumbnail"}
          className={
            "w-full h-[315px] md:h-[984px] lg:h-[564px] object-cover rounded-r-[12px]"
          }
        />
      </div>
    </section>
  );
};

export default ExpertAdviceSection;
