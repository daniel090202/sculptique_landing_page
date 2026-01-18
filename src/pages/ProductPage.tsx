import SymptomSection from "./SymptomSection";
import HighlightSection from "./HighlightSection";
import IngredientSection from "./IngredientSection";
import NoThingHasWorkedSection from "./NoThingHasWorkedSection";

import AutoScrollBanner from "../components/BannerCarousel";
import CustomerReviewSection from "./CustomerReviewSection";

const ProductPage = () => {
  return (
    <>
      <HighlightSection />

      <AutoScrollBanner />

      <SymptomSection />

      <NoThingHasWorkedSection />

      <IngredientSection />

      <CustomerReviewSection />
    </>
  );
};

export default ProductPage;
