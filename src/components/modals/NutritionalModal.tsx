import CloseButtonImage from "../../assets/images/common/close_button_image.webp";
import SupplemenFactDesktopImage from "../../assets/images/highlight_section/supplement_fact_desktop_image.webp";

import PinkCheckButtonImage from "../../assets/images/common/pink_tick_button_image.webp";
interface NutritionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Ingredient {
  name: string;
  amount: string;
  unit: string;
  isItalic?: boolean;
  isIndented?: boolean;
}

const NutritionModal = ({ isOpen, onClose }: NutritionModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-[12px] shadow-2xl max-w-[450px] p-[16px] w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 flex items-center justify-center cursor-pointer transition-colors z-10 border border-[#d54370] rounded-full"
          aria-label="Close modal"
        >
          <img
            src={CloseButtonImage}
            alt="Close Button"
            className={"rotate-45 w-[22px] h-[22px]"}
          />
        </button>

        <div className="text-center mb-[16px]">
          <h2 className="text-[24px] lg:text-[28px] font-lora font-[500]">
            Nutritional Information
          </h2>
        </div>

        <img
          src={SupplemenFactDesktopImage}
          alt={"Supplement Fact"}
          className={"lg:w-[418px] lg:h-[460px] object-cover"}
        />

        <button className="my-[16px] w-full bg-black text-[16px] font-montserrat text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          {"Try Lymphatic Drainage Risk-Free"}
        </button>

        <div
          className={
            "mb-[12px] md:px-[20px] grid grid-cols-1 md:flex md:items-center gap-3"
          }
        >
          {["Made & produced in the USA", "100% Natural Ingredients"].map(
            (feature, index) => (
              <div key={index} className="flex items-center gap-[6px]">
                <img
                  src={PinkCheckButtonImage}
                  alt={"Pink Check"}
                  className={"w-[16px] h-[16px]"}
                />
                <span className={"text-[12px] font-nunito"}>{feature}</span>
              </div>
            ),
          )}
        </div>

        <div
          className={
            "md:px-[40px] grid grid-cols-1 md:flex md:items-center gap-3"
          }
        >
          {["60-Day Money-Back Guarantee", "Free Shipping"].map(
            (feature, index) => (
              <div key={index} className="flex items-center gap-[12px]">
                <img
                  src={PinkCheckButtonImage}
                  alt={"Pink Check"}
                  className={"w-[16px] h-[16px]"}
                />
                <span className={"text-[12px] font-nunito"}>{feature}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default NutritionModal;
