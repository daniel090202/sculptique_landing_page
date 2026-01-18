import { IngredientCardTable } from "../components";

import ImgredientImageDesktop09 from "../assets/images/ingredient_section/ingredient_image_desktop_09.webp";

const IngredientSection = () => {
  return (
    <section className={"bg-[#f7f2e7] py-[56px] mt-[35px] mb-0"}>
      <div className={"max-w-[1240px] mx-auto"}>
        <div className={"mx-[220px]"}>
          <h2
            className={
              "font-lora font-[500] text-[32px] my-[16px] text-center leading-[1.3em]"
            }
          >
            <span className={"text-[#039869]"}>The 8-Ingredient System</span>
            {" That Restores What Hormones Once Maintained"}
          </h2>

          <p
            className={
              "my-[16px] font-nunito font-[500] text-[18px] text-center leading-[1.3em]"
            }
          >
            Sculptique is the only formula that addresses ALL 6 mechanisms of
            lymphatic dysfunction simultaneously—not with symbolic doses, but
            with therapeutic amounts based on clinical research.
            <br />
            Not just moving fluid temporarily. Not just reducing inflammation.{" "}
            <strong>Complete restoration.</strong>
          </p>
        </div>

        <IngredientCardTable className={"mt-[40px]"} />

        <div className={"mt-[40px] mx-auto flex justify-center items-center"}>
          <img
            src={ImgredientImageDesktop09}
            alt={"Ingredient Image"}
            className={"w-[580px] h-[480px] object-cover"}
          />
        </div>
      </div>
    </section>
  );
};

export default IngredientSection;
