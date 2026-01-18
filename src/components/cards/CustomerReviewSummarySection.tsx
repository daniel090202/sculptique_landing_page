import React from "react";

import VerifiedCheckmarkImageIcon from "../../assets/images/common/verified-checkmark.webp";

interface CustomerReviewSummarySectionProps {
  stars: number;
  count: number;
  maxCount: number;
}

const CustomerReviewSummarySection: React.FC<
  CustomerReviewSummarySectionProps
> = ({ stars, count, maxCount }) => {
  const percentage = (count / maxCount) * 100;

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      if (index < stars) {
        return (
          <svg
            key={index}
            className={"w-[16px] h-[15px] fill-[#FA8A8A]"}
            viewBox={"0 0 24 24"}
          >
            <path
              fill={"#FA8A8A"}
              d={
                "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              }
            />
          </svg>
        );
      } else {
        return (
          <svg
            key={index}
            className={"w-[16px] h-[15px]"}
            viewBox={"0 0 24 24"}
          >
            <path
              d={
                "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              }
              fill={"none"}
              stroke={"#FA8A8A"}
              strokeWidth={"2"}
            />
          </svg>
        );
      }
    });
  };

  return (
    <div className="flex items-center gap-3 mb-2">
      <div className={"flex items-center"}>{renderStars()}</div>

      <div className={"flex-1 bg-[#e0e0e080] h-[14px] overflow-hidden"}>
        <div
          className={"bg-[#FA8A8A] h-full transition-all duration-300"}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <span
        className={"w-4 text-[12.8px] text-right text-[#7b7b7b] font-medium"}
      >
        {count}
      </span>
    </div>
  );
};

const CustomerReviews: React.FC = () => {
  const totalReviews = 110;
  const ratings = [
    { stars: 5, count: 84 },
    { stars: 4, count: 17 },
    { stars: 3, count: 8 },
    { stars: 2, count: 1 },
    { stars: 1, count: 0 },
  ];

  const averageRating = 4.67;
  const maxCount = Math.max(...ratings.map((r) => r.count));

  return (
    <div>
      <h2
        className={
          "text-[24px] font-nunito font-semibold text-center mb-[24px]"
        }
      >
        {"Customer Reviews"}
      </h2>

      <div className={"flex items-center justify-between gap-8 items-start"}>
        <div className={"flex-1"}>
          <div className={"flex items-center gap-[6px]"}>
            <div className={"flex items-center"}>
              {Array.from({ length: 5 }, (_, index) => {
                const isHalfStar = index === 4 && averageRating < 5;

                return (
                  <div key={index} className={"relative"}>
                    <svg className={"w-[20px] h-[15px]"} viewBox={"0 0 24 24"}>
                      <path
                        d={
                          "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        }
                        fill={"none"}
                        stroke={"#FA8A8A"}
                        strokeWidth={"2"}
                      />

                      {isHalfStar ? (
                        <path
                          d={
                            "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77V2z"
                          }
                          fill={"#FA8A8A"}
                        />
                      ) : index < Math.floor(averageRating) ? (
                        <path
                          d={
                            "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          }
                          fill={"#FA8A8A"}
                        />
                      ) : null}
                    </svg>
                  </div>
                );
              })}
            </div>

            <div
              className={
                "font-nunito text-[16px] leading-[1.3em] font-[400] text-center"
              }
            >
              {averageRating} out of 5
            </div>
          </div>

          <div className={"flex items-center gap-2"}>
            {`Based on ${totalReviews} reviews`}

            <img
              src={VerifiedCheckmarkImageIcon}
              alt={"Verified Checkmark"}
              className={"w-[17px] h-[17px] object-cover"}
            />
          </div>
        </div>

        <div className={"flex-1 flex flex-col gap-0"}>
          {ratings.map((rating) => (
            <CustomerReviewSummarySection
              key={rating.stars}
              stars={rating.stars}
              count={rating.count}
              maxCount={maxCount}
            />
          ))}
        </div>

        <div className={"h-full flex-1 flex items-center justify-center"}>
          <button
            className={
              "max-w-[240px] w-full bg-[#FA8A8A] font-nunito text-[16px] leading-[1.3em] font-[800] text-center hover:opacity-80 text-white py-[10px] px-[20px] transition-colors duration-200 cursor-pointer"
            }
          >
            {"Write a review"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
