import LeftHighlightSection from "../components/LeftHighlightSection";
import RightHighlightSection from "../components/RightHighlightSection";

const HighlightSection = () => {
  return (
    <section className={"max-w-[1240px] mx-auto flex justify-between"}>
      <LeftHighlightSection />

      <RightHighlightSection />
    </section>
  );
};

export default HighlightSection;
