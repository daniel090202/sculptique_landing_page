import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

// Import images của bạn
import ProductThumbnailImage from "../assets/images/highlight_section/product_thumbnail_image.webp";
import ThumbnailProductSaleBanner from "../assets/images/highlight_section/thumbnail_product_sale_banner.webp";
import HighLightImage01 from "../assets/images/highlight_section/highlight_image_01.webp";
import HighLightImage02 from "../assets/images/highlight_section/highlight_image_02.webp";
import HighLightImage03 from "../assets/images/highlight_section/highlight_image_03.webp";
import HighLightImage04 from "../assets/images/highlight_section/highlight_image_04.webp";
import HighLightImage05 from "../assets/images/highlight_section/highlight_image_05.webp";
import HighLightImage06 from "../assets/images/highlight_section/highlight_image_06.webp";
import HighLightImage07 from "../assets/images/highlight_section/highlight_image_07.webp";

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

  return (
    <div className="px-[15px] w-full flex-1 flex flex-col space-y-[16px] md:px-0 md:max-w-[588px]">
      {/* Desktop Layout */}
      <div className="hidden md:flex md:flex-col md:space-y-[16px]">
        <div className="relative">
          <img
            src={ProductThumbnailImage}
            alt="Product Thumbnail Image"
            className="w-[588px] h-[588px] object-cover rounded-[8px]"
          />
          <img
            src={ThumbnailProductSaleBanner}
            alt="Sale Banner On Product Thumbnail Image"
            className="absolute top-[16px] right-[48px] w-[120px] h-[120px] object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-[16px]">
          <img
            src={HighLightImage01}
            alt="Highlight Image 01"
            className="w-[286px] h-[286px] object-cover rounded-[8px]"
          />
          <img
            src={HighLightImage02}
            alt="Highlight Image 02"
            className="w-[286px] h-[286px] object-cover rounded-[8px]"
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
          <div className="flex">
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
    </div>
  );
};

export default LeftHighlightSection;
