import { IngredientCardTable } from "../components";

import ImgredientImageDesktop09 from "../assets/images/ingredient_section/ingredient_image_desktop_09.webp";
import ImgredientImageDesktop10 from "../assets/images/ingredient_section/ingredient_image_desktop_10.webp";

const IngredientSection = () => {
  return (
    <section
      className={
        "bg-[#f7f2e7] py-[32px] md:py-[56px] mt-[35px] mb-0 md:px-[50px] lg:px-0"
      }
    >
      <div className={"max-w-[1240px] mx-auto"}>
        <div className={"w-full px-[15px] md:px-0"}>
          <h2
            className={
              "w-full font-lora font-[500] text-[24px] md:text-[32px] my-[16px] text-center leading-[1.3em]"
            }
          >
            <span className={"text-[#039869]"}>
              {"The 8-Ingredient System"}
            </span>
            {" That Restores What Hormones Once Maintained"}
          </h2>

          <p
            className={
              "my-[16px] font-nunito font-[500] text-[16px] md:text-[18px] text-center leading-[1.3em]"
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

        <div
          className={
            "hidden mt-[40px] mx-auto md:flex justify-center items-center"
          }
        >
          <img
            src={ImgredientImageDesktop09}
            alt={"Ingredient Image"}
            className={"w-[580px] h-[480px] object-cover"}
          />
        </div>

        <div
          className={
            "mt-[40px] mx-auto flex justify-center items-center md:hidden"
          }
        >
          <img
            src={ImgredientImageDesktop10}
            alt={"Ingredient Image 10"}
            className={"w-[384px] h-[420px] object-cover"}
          />
        </div>
      </div>
    </section>
  );
};

export default IngredientSection;
