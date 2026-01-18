import ProductThumbnailImage from "../assets/images/highlight_section/product_thumbnail_image.webp";
import ThumbnailProductSaleBanner from "../assets/images/highlight_section/thumbnail_product_sale_banner.webp";

import HighLightImage01 from "../assets/images/highlight_section/highlight_image_01.webp";
import HighLightImage02 from "../assets/images/highlight_section/highlight_image_02.webp";
import HighLightImage03 from "../assets/images/highlight_section/highlight_image_03.webp";
import HighLightImage04 from "../assets/images/highlight_section/highlight_image_04.webp";
import HighLightImage05 from "../assets/images/highlight_section/highlight_image_05.webp";
import HighLightImage06 from "../assets/images/highlight_section/highlight_image_06.webp";
import HighLightImage07 from "../assets/images/highlight_section/highlight_image_07.webp";

const LeftHighlightSection = () => {
  return (
    <div className={"max-w-[588px] flex-1 w-full flex flex-col space-y-[16px]"}>
      <div className={"relative"}>
        <img
          src={ProductThumbnailImage}
          alt={"Product Thumbnail Image"}
          className={"w-[588px] h-[588px] object-cover rounded-[8px]"}
        />

        <img
          src={ThumbnailProductSaleBanner}
          alt={"Sale Banner On Product Thumbnail Image"}
          className={
            "absolute top-[16px] right-[48px] w-[120px] h-[120px] object-cover"
          }
        />
      </div>

      <div className={"grid grid-cols-2 gap-x-[16px]"}>
        <img
          src={HighLightImage01}
          alt={HighLightImage01}
          className={"w-[286px] h-[286px] object-cover rounded-[8px]"}
        />

        <img
          src={HighLightImage02}
          alt={HighLightImage02}
          className={"w-[286px] h-[286px] object-cover rounded-[8px]"}
        />
      </div>

      <div className={"grid grid-cols-3 gap-x-[16px]"}>
        <img
          src={HighLightImage03}
          alt={HighLightImage03}
          className={"object-cover rounded-[8px]"}
        />

        <img
          src={HighLightImage04}
          alt={HighLightImage04}
          className={"object-cover rounded-[8px]"}
        />

        <img
          src={HighLightImage05}
          alt={HighLightImage05}
          className={"object-cover rounded-[8px]"}
        />
      </div>

      <div className={"grid grid-cols-2 gap-x-[16px]"}>
        <img
          src={HighLightImage06}
          alt={HighLightImage06}
          className={"object-cover rounded-[8px]"}
        />

        <img
          src={HighLightImage07}
          alt={HighLightImage07}
          className={"object-cover rounded-[8px]"}
        />
      </div>
    </div>
  );
};

export default LeftHighlightSection;
