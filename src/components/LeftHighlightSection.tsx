import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

import ProductThumbnailImage from "../assets/images/highlight_section/product_thumbnail_image.webp";
import ThumbnailProductSaleBanner from "../assets/images/highlight_section/thumbnail_product_sale_banner.webp";
import HighLightImage01 from "../assets/images/highlight_section/highlight_image_01.webp";
import HighLightImage02 from "../assets/images/highlight_section/highlight_image_02.webp";
import HighLightImage03 from "../assets/images/highlight_section/highlight_image_03.webp";
import HighLightImage04 from "../assets/images/highlight_section/highlight_image_04.webp";
import HighLightImage05 from "../assets/images/highlight_section/highlight_image_05.webp";
import HighLightImage06 from "../assets/images/highlight_section/highlight_image_06.webp";
import HighLightImage07 from "../assets/images/highlight_section/highlight_image_07.webp";

import LeafImageIcon from "../assets/images/common/leaf_image_icon.webp";
import NutritionModal from "./modals/NutritionalModal";

import WhiteLeftButtonImage from "../assets/images/common/white_left_arrow_button.webp";
import WhiteRightButtonImage from "../assets/images/common/white_right_arrow_button.webp";

interface ImageItem {
  src: string;
  alt: string;
  hasBanner?: boolean;
}

const LeftHighlightSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const allImages: ImageItem[] = [
    { src: ProductThumbnailImage, alt: "Product Thumbnail", hasBanner: true },
    { src: HighLightImage01, alt: "Highlight 1" },
    { src: HighLightImage02, alt: "Highlight 2" },
    { src: HighLightImage03, alt: "Highlight 3" },
    { src: HighLightImage04, alt: "Highlight 4" },
    { src: HighLightImage05, alt: "Highlight 5" },
    { src: HighLightImage06, alt: "Highlight 6" },
    { src: HighLightImage07, alt: "Highlight 7" },
  ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div className="px-[15px] w-full flex-1 flex flex-col space-y-[16px] md:px-0 md:max-w-[219px] lg:max-w-[588px]">
      {/* Desktop Layout */}
      <div className="hidden md:flex md:flex-col md:space-y-[16px]">
        <div className="relative">
          <img
            src={ProductThumbnailImage}
            alt="Product Thumbnail Image"
            className="md:w-[219px] md:h-[219px] lg:w-[588px] lg:h-[588px] object-cover rounded-[8px]"
          />
          <img
            src={ThumbnailProductSaleBanner}
            alt="Sale Banner On Product Thumbnail Image"
            className="absolute md:top-[16px] md:right-[12px] lg:top-[16px] lg:right-[48px] w-[120px] h-[120px] object-cover"
          />

          <div
            onClick={handleOpenModal}
            className={
              "cursor-pointer absolute bottom-[24px] md:left-0 md:right-0 lg:left-1/2 lg:-translate-x-1/2 flex items-center bg-[#ffffffd9] px-[24px] py-[8px] rounded-[24px] border border-black gap-[8px]"
            }
          >
            <img
              src={LeafImageIcon}
              alt={"Leaf Image Icon"}
              className={
                "md:w-[24px] md:h-[24px] lg:w-[24px] lg:h-[24px] object-cover rounded-[8px]"
              }
            />

            <span
              className={
                "flex-1 md:text-[14px] lg:text-[14px] font-montserrat text-center"
              }
            >
              {"Nutritional Information"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-[16px]">
          <img
            src={HighLightImage01}
            alt="Highlight Image 01"
            className=" object-cover rounded-[8px]"
          />

          <img
            src={HighLightImage02}
            alt="Highlight Image 02"
            className=" object-cover rounded-[8px]"
          />
        </div>

        <div className="grid grid-cols-3 gap-x-[16px]">
          <img
            src={HighLightImage03}
            alt="Highlight Image 03"
            className="object-cover rounded-[8px]"
          />
          <img
            src={HighLightImage04}
            alt="Highlight Image 04"
            className="object-cover rounded-[8px]"
          />
          <img
            src={HighLightImage05}
            alt="Highlight Image 05"
            className="object-cover rounded-[8px]"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-[16px]">
          <img
            src={HighLightImage06}
            alt="Highlight Image 06"
            className="object-cover rounded-[8px]"
          />
          <img
            src={HighLightImage07}
            alt="Highlight Image 07"
            className="object-cover rounded-[8px]"
          />
        </div>
      </div>

      <div className="md:hidden">
        <div className="overflow-hidden mb-3" ref={emblaRef}>
          <div className="relative flex gap-4">
            {allImages.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-[384px] h-[384px] aspect-square object-cover rounded-[8px]"
                />

                {image.hasBanner && (
                  <img
                    src={ThumbnailProductSaleBanner}
                    alt="Sale Banner"
                    className="absolute top-[16px] right-[16px] w-[80px] h-[80px] object-cover"
                  />
                )}
              </div>
            ))}

            <div className="absolute top-1/2 -translate-y-1/2 left-[20px] w-[32px] h-[32px] object-cover cursor-pointer">
              <img
                src={WhiteLeftButtonImage}
                alt={"White Left Button Image"}
                className="w-[32px] h-[32px] object-cover"
              />
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-[20px] w-[32px] h-[32px] object-cover cursor-pointer">
              <img
                src={WhiteRightButtonImage}
                alt={"White Right Button Image"}
                className="w-[32px] h-[32px] object-cover"
              />
            </div>

            <div
              onClick={handleOpenModal}
              className={
                "max-w-[290px] absolute bottom-[24px] left-[60px] flex items-center bg-[#ffffffd9] px-[24px] py-[8px] rounded-[24px] border border-black gap-[8px]"
              }
            >
              <img
                src={LeafImageIcon}
                alt={"Leaf Image Icon"}
                className={"w-[24px] h-[24px] object-cover rounded-[8px]"}
              />

              <span className={"block text-[14px] font-montserrat text-nowrap"}>
                {"Nutritional Information"}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail Scroll Bar */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex pb-2">
            {allImages.map((image, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`px-[4px] flex-shrink-0 w-[88px] rounded-[8px] overflow-hidden transition-all ${
                  index === selectedIndex ? "" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded-[8px]"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <NutritionModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default LeftHighlightSection;
