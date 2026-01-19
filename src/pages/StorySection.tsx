import { useRef, useState } from "react";

import { VideoCard } from "../components";

import BackButtonImage from "../assets/images/common/back_button_image.webp";
import MoneyBackImageIcon from "../assets/images/common/money_back_icon.webp";
import StoryHeaderBannerImage from "../assets/images/story_section/story_header_banner.webp";

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
}

const VideoCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const videos: Video[] = [
    {
      id: 1,
      title: "Home Tour - Living Room",
      thumbnail: StoryHeaderBannerImage,
      url: "https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4",
    },
    {
      id: 2,
      title: "Fitness Routine",
      thumbnail: StoryHeaderBannerImage,
      url: "https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov",
    },
    {
      id: 3,
      title: "Product Review",
      thumbnail: StoryHeaderBannerImage,
      url: "https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4",
    },
    {
      id: 4,
      title: "Kitchen Organization",
      thumbnail: StoryHeaderBannerImage,
      url: "https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4",
    },
    {
      id: 5,
      title: "Kitchen Organization",
      thumbnail: StoryHeaderBannerImage,
      url: "https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4",
    },
    {
      id: 6,
      title: "Kitchen Organization",
      thumbnail: StoryHeaderBannerImage,
      url: "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4",
    },
  ];

  const handleScroll = (): void => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = 320 + 16; // width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);

      setActiveIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number): void => {
    if (scrollContainerRef.current) {
      const cardWidth = 320 + 16;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto p-6">
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        onScroll={handleScroll}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {videos.map((video, index) => (
          <VideoCard
            key={video.id}
            video={video}
            isActive={activeIndex === index}
          />
        ))}
      </div>

      <div className={"mt-[12px] flex justify-between items-center"}>
        <div className="relative w-full max-w-[1001px] h-1 bg-[#00000026] rounded-full overflow-hidden">
          <div
            className={
              "absolute h-full bg-[#039869] rounded-full transition-all duration-300 ease-out"
            }
            style={{
              width: `${100 / videos.length}%`,
              left: `${(activeIndex * 100) / videos.length}%`,
            }}
          />
          {/* Clickable zones */}
          <div className="absolute inset-0 flex">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className="flex-1 cursor-pointer"
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={"flex items-center space-x-[12px]"}>
          <img
            src={BackButtonImage}
            alt={"Back Button Image"}
            className={"w-[32px] h-[32px] object-cover cursor-pointer"}
          />

          <img
            src={BackButtonImage}
            alt={"Back Button Image"}
            className={
              "w-[32px] h-[32px] object-cover cursor-pointer rotate-180"
            }
          />
        </div>
      </div>

      <div className={"mt-[24px] flex flex-col items-center"}>
        <button
          className={
            "mt-[24px] text-[18px] font-nunito max-w-[450px] bg-black text-white px-[80px] py-[18px] font-[600] rounded-[4px] hover:opacity-80 transition-colors duration-200 cursor-pointer"
          }
        >
          Try Lymphatic Drainage Risk-Free
        </button>

        <div
          className={"flex items-center justify-center gap-[16px] mt-[24px]"}
        >
          <img
            src={MoneyBackImageIcon}
            alt={"Money Back Icon"}
            className={"w-[24px] h-[24px] object-cover"}
          />
          <span className={"text-[16px] font-nunito font-[500]"}>
            {"60-Day Money-Back Guarantee"}
          </span>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

const StorySection = () => {
  return (
    <section className={"py-[56px] bg-[#f3eee0]"}>
      <div className={"max-w-[1340px] mx-auto flex flex-col items-center"}>
        <div className={""}>
          <img
            src={StoryHeaderBannerImage}
            alt={"Story Header Banner Image"}
            className={"w-[300px] h-[44px] object-cover"}
          />
        </div>

        <h2 className={"font-lora text-[32px] font-[500] my-[16px]"}>
          {"See The Stories of Sculptique™ Women Firsthand"}
        </h2>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default StorySection;
