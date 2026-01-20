import IngredientCard from "./cards/IngredientCard";

import IngredientImageDesktop01 from "../assets/images/ingredient_section/ingredient_image_desktop_01.webp";
import IngredientImageDesktop02 from "../assets/images/ingredient_section/ingredient_image_desktop_02.webp";
import IngredientImageDesktop03 from "../assets/images/ingredient_section/ingredient_image_desktop_03.webp";
import IngredientImageDesktop04 from "../assets/images/ingredient_section/ingredient_image_desktop_04.webp";
import IngredientImageDesktop05 from "../assets/images/ingredient_section/ingredient_image_desktop_05.webp";
import IngredientImageDesktop06 from "../assets/images/ingredient_section/ingredient_image_desktop_06.webp";
import IngredientImageDesktop07 from "../assets/images/ingredient_section/ingredient_image_desktop_07.webp";
import IngredientImageDesktop08 from "../assets/images/ingredient_section/ingredient_image_desktop_08.webp";

interface IngredientData {
  id: number;
  benefit: string;
  name: string;
  dosage: string;
  image: string;
  details?: string;
}

const IngredientCardTable: React.FC<{ className?: string }> = ({
  className,
}) => {
  const ingredientsData: IngredientData[] = [
    {
      id: 1,
      benefit: "Reactivate Lymphatic Pumps",
      name: "Cleavers Extract",
      dosage: "100mg",
      image: IngredientImageDesktop01,
      details: `Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance. 
      
[Study: Enhanced NK cell activity in immunosuppressed models]`,
    },
    {
      id: 2,
      benefit: "Flush Excess Fluid",
      name: "Dandelion Extract",
      dosage: "250mg",
      image: IngredientImageDesktop02,
      details: `Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001). 
      
[Study: First human pilot study on diuretic effects]`,
    },
    {
      id: 3,
      benefit: "Break Down Protein Clogs",
      name: "Bromelain Powder",
      dosage: "100mg",
      image: IngredientImageDesktop03,
      details: `Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo.

[Study: As effective as prescription NSAIDs for inflammation]`,
    },
    {
      id: 4,
      benefit: "Strengthen Vessel Walls",
      name: "Rutin",
      dosage: "100mg",
      image: IngredientImageDesktop04,
      details: `Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients.

[Study: Systematic review of 1,643 participants]`,
    },
    {
      id: 5,
      benefit: "Reduce Inflammation",
      name: "Burdock Root Powder",
      dosage: "200mg",
      image: IngredientImageDesktop05,
      details: `Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients.

[Study: Systematic review of 1,643 participants]`,
    },
    {
      id: 6,
      benefit: "Boost Immune Clearance",
      name: "Echinacea Purpurea Extract",
      dosage: "500mg",
      image: IngredientImageDesktop06,
      details: `Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections.

[Study: Increased NK cell cytotoxic activity]`,
    },
    {
      id: 7,
      benefit: "Support Metabolism",
      name: "Kelp Extract",
      dosage: "30mg",
      image: IngredientImageDesktop07,
      details: `Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials.

[Study: Dose-dependent increase in TSH levels]`,
    },
    {
      id: 8,
      benefit: "Antioxidant Protection",
      name: "Lemon Powder",
      dosage: "50mg",
      image: IngredientImageDesktop08,
      details: `Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials.

[Study: Dose-dependent increase in TSH levels]`,
    },
  ];

  return (
    <div className={"px-[15px] md:px-0"}>
      <div
        className={`border border-black rounded-xl overflow-hidden ${className}`}
      >
        <div className={"grid grid-cols-1 md:grid-cols-4"}>
          {ingredientsData.slice(0, 4).map((ingredient) => (
            <IngredientCard key={ingredient.id} data={ingredient} />
          ))}
        </div>

        <div className={"grid grid-cols-1 md:grid-cols-4"}>
          {ingredientsData.slice(4, 8).map((ingredient) => (
            <IngredientCard data={ingredient} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IngredientCardTable;
