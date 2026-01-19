import MoneyBackImageIcon from "../assets/images/common/money_back_icon.webp";
import AdviceBannerImage from "../assets/images/advice_section/advice_banner_image.webp";
import AdviceImage from "../assets/images/advice_section/advice_thumbnail.webp";

const AdviceSection = () => {
  return (
    <section className={"py-[56px] bg-[#f3eee0]"}>
      <div className={"max-w-[1240px] mx-auto grid grid-cols-4 gap-[64px]"}>
        <div className={"col-span-2 flex items-center justify-center"}>
          <div>
            <img
              src={AdviceBannerImage}
              alt={"Advice Banner Image"}
              className={"w-[350px] h-[21px] object-cover"}
            />

            <h2 className={"font-lora text-[32px] font-[500] my-[16px]"}>
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

            <button
              className={
                "mt-[24px] text-[18px] font-nunito max-w-[450px] bg-black text-white px-[80px] py-[18px] font-[700] rounded-[4px] hover:opacity-80 transition-colors duration-200"
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
            "col-span-2 flex items-center justify-center rounded-[24px] overflow-hidden"
          }
        >
          <img
            src={AdviceImage}
            alt={AdviceImage}
            className={"w-[568px] h-[568px] object-cover"}
          />
        </div>
      </div>
    </section>
  );
};

export default AdviceSection;
