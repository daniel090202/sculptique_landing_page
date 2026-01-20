import EffectDesktopImage01 from "../assets/images/effect_section/effect_desktop_image_01.webp";
import EffectDesktopImage02 from "../assets/images/effect_section/effect_desktop_image_02.webp";
import EffectMobileImage01 from "../assets/images/effect_section/effect_mobile_image_01.webp";
import EffectMobileImage02 from "../assets/images/effect_section/effect_mobile_image_02.webp";

const EffectSection = () => {
  return (
    <section
      className={
        "max-w-[1240px] mx-auto py-[32px] md:px-[50px] md:py-[32px] lg:py-[56px] grid grid-cols-1 md:grid-cols-5"
      }
    >
      <div className={"col-span-1 md:col-span-3 px-[32px]"}>
        <h2
          className={
            "font-lora text-center md:text-left text-[24px] md:text-[32px] font-[500] my-[16px]"
          }
        >
          We’re On A Mission To Help 100,000,000 Women Visibly, Naturally Get
          Rid Of Bloating…And Feel Like Themselves Again
        </h2>

        <p
          className={
            "text-center md:text-left text-[18px] font-nunito font-[500] my-[12px]"
          }
        >
          Here's where we're at right now:
        </p>

        <div className={"rounded-[8px] overflow-hidden"}>
          <img
            src={EffectDesktopImage02}
            alt={"Effect Image 02"}
            className={
              "hidden md:block md:w-[360px] md:h-[97px] lg:w-[665px] lg:h-[160px] object-cover"
            }
          />
        </div>
      </div>

      <div
        className={
          "col-span-1 md:col-span-2 flex flex-col md:flex-row items-center justify-center"
        }
      >
        <img
          src={EffectDesktopImage01}
          alt={"Effect Image 01"}
          className={
            "hidden md:block md:w-[296px] md:h-[220px] lg:w-[490px] lg:h-[364px] object-cover"
          }
        />

        <img
          src={EffectMobileImage01}
          alt={"Effect Mobile Image 01"}
          className={"md:hidden w-[352px] h-[261px] object-cover"}
        />

        <img
          src={EffectMobileImage02}
          alt={"Effect Mobile Image 02"}
          className={"md:hidden w-[352px] h-[186px] object-cover"}
        />
      </div>
    </section>
  );
};

export default EffectSection;
