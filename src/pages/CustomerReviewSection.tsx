import { useState } from "react";

import { ChevronDown } from "lucide-react";

import {
  CustomerReviewCard,
  CustomerReviewSummarySection,
  Pagination,
} from "../components";

import DiamondAuthenticity from "../assets/images/customer_review_section/diamond_authenticity.webp";
import CustomerReviewHeaderImage from "../assets/images/customer_review_section/customer_review_header_image.webp";

interface Review {
  id: number;
  rating: number;
  author: string;
  isVerified: boolean;
  date: string;
  content: string;
}

const CustomerReviewSection = () => {
  const [sortBy, setSortBy] = useState("Most Recent");

  const reviews: Review[] = [
    {
      id: 1,
      rating: 5,
      author: "Anonymous",
      isVerified: true,
      date: "12/08/2025",
      content:
        "Pretty sure I'm seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it's working.",
    },
    {
      id: 2,
      rating: 5,
      author: "Anonymous",
      isVerified: true,
      date: "12/01/2025",
      content: "One month and I've already seen a difference!",
    },
    {
      id: 3,
      rating: 5,
      author: "Donabeth Houx",
      isVerified: true,
      date: "11/23/2025",
      content:
        "I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It's a miracle! I no longer have to worry about elephantitus in my future! Thank you so much!!!!!!",
    },
    {
      id: 4,
      rating: 5,
      author: "Dawn Camacho",
      isVerified: true,
      date: "11/17/2025",
      content:
        "It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I purchased another round. I'm happy.",
    },
    {
      id: 5,
      rating: 5,
      author: "Anonymous",
      isVerified: true,
      date: "11/13/2025",
      content: "I have noticed a difference on my swelling.",
    },
  ];

  const SortDropdown: React.FC<{
    sortBy: string;
    onSortChange: (sort: string) => void;
  }> = ({ sortBy }) => {
    return (
      <div className={"py-[8px] border-b-[1px] border-[#fa8a8a1a]"}>
        <div
          className={"inline-flex items-center cursor-pointer text-[#fa8a8a]"}
        >
          <span
            className={
              "font-nunito text-[14px] text-[#fa8a8a] font-[700] py-[10px] pr-[10px]"
            }
          >
            {sortBy}
          </span>

          <ChevronDown className={"w-4 h-4 font-semibold"} />
        </div>
      </div>
    );
  };

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    console.log("Page changed to:", page);
  };

  return (
    <section
      className={"max-w-[1240px] mx-auto bg-white py-[56px] px-[15px] md:px-0"}
    >
      <div
        className={
          "flex flex-col items-center justify-center space-y-[16px] md:max-w-[800px] md:mx-[220px]"
        }
      >
        <div className={"w-full flex items-center justify-center"}>
          <img
            src={CustomerReviewHeaderImage}
            alt={"Customer Review Header Image"}
            className={"w-[200px] h-[19px] object-cover"}
          />
        </div>

        <h2
          className={
            "font-lora text-[24px] md:text-[32px] leading-[1.3em] font-[500] text-center"
          }
        >
          Real Women, Real Results: 93,000+
          <br />
          Transformations
        </h2>

        <p
          className={
            "font-nunito text-[16px] md:text-[18px] leading-[1.3em] font-normal text-center"
          }
        >
          {"All reviews verified from actual paying customers"}
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

      <div className={"py-[24px] px-[16px] md:px-[50px] lg:px-[16px]"}>
        <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />

        {reviews.map((review) => (
          <CustomerReviewCard key={review.id} review={review} />
        ))}
      </div>

      <div className={"flex items-center justify-center"}>
        <Pagination
          currentPage={currentPage > 3 ? 1 : currentPage}
          totalPages={3}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default CustomerReviewSection;
