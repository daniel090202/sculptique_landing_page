import { CustomerReviewSummarySection } from "../components";

import DiamondAuthenticity from "../assets/images/customer_review_section/diamond_authenticity.webp";
import CustomerReviewHeaderImage from "../assets/images/customer_review_section/customer_review_header_image.webp";

const CustomerReviewSection = () => {
  return (
    <section className={"max-w-[1240px] mx-auto bg-white py-[56px]"}>
      <div
        className={
          "flex flex-col items-center justify-center space-y-[16px] max-w-[800px] mx-[220px]"
        }
      >
        <img
          src={CustomerReviewHeaderImage}
          alt={"Customer Review Header Image"}
          className={"w-[200px] h-[19px] object-cover"}
        />

        <h2
          className={
            "font-lora text-[32px] leading-[1.3em] font-[400] text-center"
          }
        >
          Real Women, Real Results: 93,000+
          <br />
          Transformations
        </h2>

        <p className="font-nunito text-[18px] leading-[1.3em] font-normal text-center">
          All reviews verified from actual paying customers
        </p>
      </div>

      <div className={"py-[24px] px-[16px]"}>
        <CustomerReviewSummarySection />
      </div>

      <div
        className={
          "flex items-center justify-center p-[16px] pl-[32px] border-b-[1px] border-t-[1px] border-[#fa8a8a1a]"
        }
      >
        <div className={"flex flex-col items-center justify-center py-[16px]"}>
          <img
            src={DiamondAuthenticity}
            alt={"Diamond Authenticity"}
            className={"w-[80px] h-[80px] object-cover"}
          />

          <p className={"font-nunito text-[12px] text-[#4c8eda] font-[800]"}>
            {"100.0"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewSection;
