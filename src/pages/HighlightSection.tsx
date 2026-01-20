import LeftHighlightSection from "../components/LeftHighlightSection";
import RightHighlightSection from "../components/RightHighlightSection";

const HighlightSection = () => {
  return (
    <section
      className={
        "mb-[32px] max-w-[1240px] mx-auto flex flex-col justify-between md:flex-row md:gap-[64px] md:px-[50px] lg:px-0 lg:gap-0"
      }
    >
      <LeftHighlightSection />

      <RightHighlightSection />
    </section>
  );
};

export default HighlightSection;
