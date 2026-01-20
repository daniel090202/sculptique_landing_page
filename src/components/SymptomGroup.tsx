import SymptomCard from "./cards/SymptomCard";

import SymptomImage01 from "../assets/images/symptom_section/symptom_image_01.webp";
import SymptomImage02 from "../assets/images/symptom_section/symptom_image_02.webp";
import SymptomImage03 from "../assets/images/symptom_section/symptom_image_03.webp";
import SymptomImage04 from "../assets/images/symptom_section/symptom_image_04.webp";
import SymptomImage05 from "../assets/images/symptom_section/symptom_image_05.webp";

const SymptomGroup = () => {
  const symptoms: SymptomCard[] = [
    {
      id: 1,
      image: SymptomImage01,
      description:
        "Your stomach is flat in the morning, but by evening you look six months pregnant.",
    },
    {
      id: 2,
      image: SymptomImage02,
      description:
        'Your ankles disappear into "kankles" by the end of the day.',
    },
    {
      id: 3,
      image: SymptomImage03,
      description:
        "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.",
    },
    {
      id: 4,
      image: SymptomImage04,
      description:
        "You feel foggy and exhausted even after a full night's sleep.",
    },
    {
      id: 5,
      image: SymptomImage05,
      description: "You wake up stiff and achy, like your body aged overnight.",
    },
  ];

  return (
    <div className={"mt-[40px] grid grid-cols-1 md:grid-cols-5 gap-[16px]"}>
      {symptoms.map((symptom) => (
        <SymptomCard key={symptom.id} symptom={symptom} />
      ))}
    </div>
  );
};

export default SymptomGroup;
