import LeftHighlightSection from "../components/LeftHighlightSection";
import RightHighlightSection from "../components/RightHighlightSection";

const HighlightSection = () => {
  return (
    <section
      className={
        "max-w-[1240px] mx-auto flex flex-col justify-between md:flex-row"
      }
    >
      <LeftHighlightSection />

      <RightHighlightSection />
    </section>
  );
};

export default HighlightSection;
