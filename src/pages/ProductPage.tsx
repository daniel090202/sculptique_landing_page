import { SaleBanner } from "../components";

import SymptomSection from "./SymptomSection";
import HighlightSection from "./HighlightSection";
import IngredientSection from "./IngredientSection";
import NoThingHasWorkedSection from "./NoThingHasWorkedSection";

import EffectSection from "./EffectSection";
import ExpertAdviceSection from "./ExpertAdviceSection";
import AutoScrollBanner from "../components/BannerCarousel";
import CustomerReviewSection from "./CustomerReviewSection";
import FrequentlyAskedQuestionSection from "./FrequentlyAskedQuestionSection";
import AdviceSection from "./AdviceSection";
import StorySection from "./StorySection";

const ProductPage = () => {
  return (
    <>
      <HighlightSection />

      <AutoScrollBanner />

      <SymptomSection />

      <NoThingHasWorkedSection />

      <IngredientSection />

      <CustomerReviewSection />

      <SaleBanner />

      <ExpertAdviceSection />

      <StorySection />

      <FrequentlyAskedQuestionSection />

      <EffectSection />

      <AdviceSection />
    </>
  );
};

export default ProductPage;
