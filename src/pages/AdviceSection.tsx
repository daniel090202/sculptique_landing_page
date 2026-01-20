import MoneyBackImageIcon from "../assets/images/common/money_back_icon.webp";
import AdviceBannerImage from "../assets/images/advice_section/advice_banner_image.webp";
import AdviceImage from "../assets/images/advice_section/advice_thumbnail.webp";

import AdviceMobileImage01 from "../assets/images/advice_section/advice_mobile_image_01.webp";
import AdviceMobileImage02 from "../assets/images/advice_section/advice_mobile_image_02.webp";

const AdviceSection = () => {
  return (
    <section className={"py-[32px] md:py-[56px] bg-[#f3eee0]"}>
      <div
        className={
          "px-[15px] md:px-[50px] lg:px-0 max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-[64px]"
        }
      >
        <div
          className={
            "col-span-1 md:col-span-2 flex items-center justify-center"
          }
        >
          <div>
            <img
              src={AdviceBannerImage}
              alt={"Advice Banner Image"}
              className={
                "hidden md:block md:w-[328px] md:h-[20px] lg:w-[350px] lg:h-[21px] object-cover"
              }
            />

            <div className={"w-full flex items-center justify-center"}>
              <img
                src={AdviceMobileImage01}
                alt={"Advice Banner Image"}
                className={"md:hidden w-[250px] h-[37px] object-cover"}
              />
            </div>

            <h2
              className={
                "font-lora text-[24px] md:text-[32px] font-[500] my-[16px]"
              }
            >
              Stop Masking Symptoms. Start Restoring Root Cause.
            </h2>

            <p className={"text-[18px] font-nunito font-[500] my-[12px]"}>
              You deserve to feel like yourself again. To wake up without
              puffiness. To see your ankles. To look in the mirror and recognize
              the vibrant woman staring back. To have energy for the people you
              love.
            </p>

            <p className={"text-[18px] font-nunito font-[500] my-[12px]"}>
              You deserve a solution that actually works. Not temporary relief.
              Not symptom masking. Complete lymphatic restoration.
            </p>

            <img
              src={AdviceMobileImage02}
              alt={AdviceMobileImage02}
              className={"md:hidden w-[384px] h-[384px] object-cover"}
            />

            <button
              className={
                "w-full p-[16px] mt-[24px] text-[18px] font-nunito md:max-w-[450px] bg-black text-white md:px-[80px] md:py-[18px] font-[600] rounded-[4px] hover:opacity-80 transition-colors duration-200 cursor-pointer"
              }
            >
              Try Lymphatic Drainage Risk-Free
            </button>

            <div
              className={
                "max-w-[495px] flex items-center justify-center gap-[16px] mt-[16px]"
              }
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
        </div>

        <div
          className={
            "hidden md:block col-span-1 md:col-span-2 flex h-full md:flex-col items-center justify-center rounded-[24px] overflow-hidden"
          }
        >
          <img
            src={AdviceImage}
            alt={AdviceImage}
            className={
              "hidden md:block lg:w-[568px] lg:h-[568px] md:w-[328px] md:h-[328px] object-cover"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default AdviceSection;
