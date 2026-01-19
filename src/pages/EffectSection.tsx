import EffectDesktopImage01 from "../assets/images/effect_section/effect_desktop_image_01.webp";
import EffectDesktopImage02 from "../assets/images/effect_section/effect_desktop_image_02.webp";

const EffectSection = () => {
  return (
    <section className={"max-w-[1240px] mx-auto py-[56px] grid grid-cols-5"}>
      <div className={"col-span-3 px-[32px]"}>
        <h2 className={"font-lora text-[32px] font-[500] my-[16px]"}>
          We’re On A Mission To Help 100,000,000 Women Visibly, Naturally Get
          Rid Of Bloating…And Feel Like Themselves Again
        </h2>

        <p className={"text-[18px] font-nunito font-[500] my-[12px]"}>
          Here's where we're at right now:
        </p>

        <img
          src={EffectDesktopImage02}
          alt={"Effect Image 02"}
          className={"w-[636px] h-[172px] object-cover"}
        />
      </div>

      <div className={"col-span-2 flex items-center justify-center"}>
        <img
          src={EffectDesktopImage01}
          alt={"Effect Image 01"}
          className={"w-[490px] h-[364px] object-cover"}
        />
      </div>
    </section>
  );
};

export default EffectSection;
