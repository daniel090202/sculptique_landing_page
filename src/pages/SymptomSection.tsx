import { SymptomGroup } from "../components";

import SymptomImage06 from "../assets/images/symptom_section/symptom_image_06.webp";
import SymptomImage07 from "../assets/images/symptom_section/symptom_image_07.webp";
import SymptomImage08 from "../assets/images/symptom_section/symptom_image_08.webp";
import SymptomImage09 from "../assets/images/symptom_section/symptom_image_09.webp";
import SymptomImage10 from "../assets/images/symptom_section/symptom_image_10.webp";
import SymptomImage11 from "../assets/images/symptom_section/symptom_image_11.webp";

import CheckIconImage from "../assets/images/common/check_image_icon.webp";
import CrossIconImage from "../assets/images/common/cross_image_icon.webp";
import DoubleArrowImage from "../assets/images/common/double_arrow_icon.webp";

import DrainageImageDesktop01 from "../assets/images/symptom_section/drainage_image_desktop_01.webp";
import DrainageImageDesktop02 from "../assets/images/symptom_section/drainage_image_desktop_02.webp";

const SymptomSection = () => {
  const DrainageSection01 = () => {
    const tickList = [
      {
        id: 1,
        title: "Waste gets drained away",
      },
      {
        id: 2,
        title: "Fluid stays balanced",
      },
      {
        id: 3,
        title: "Your body feels light and energized",
      },
    ];

    const crossList = [
      {
        id: 1,
        title: "Vessel pumping weakens",
      },
      {
        id: 2,
        title: "One-way valves fail",
      },
      {
        id: 3,
        title: "Protein clogs form",
      },
      {
        id: 4,
        title: "Vessel walls become leaky",
      },
    ];

    return (
      <div
        className={
          "flex flex-col flex-col-reverse md:flex-row md:items-center lg:items-start justify-between gap-[16px] md:gap-[100px]"
        }
      >
        <div className={"flex-1 mx-auto bg-white"}>
          <p
            className={
              "my-[8px] text-[16px] md:text-[18px] font-nunito font-[400] leading-[1.3em]"
            }
          >
            Your lymphatic system is your body's internal cleaning crew—a
            network of vessels that processes{" "}
            <span className="font-bold">
              3-4 liters of cellular waste and excess fluid every single day.
            </span>
          </p>

          <p
            className={
              "my-[8px] text-[16px] md:text-[18px] font-nunito font-[400] leading-[1.3em]"
            }
          >
            {"When it's working properly, you don't even know it exists."}
          </p>

          <div className={"space-y-[8px]"}>
            {tickList.map((item) => (
              <div className={"flex items-start gap-3"} key={item.id}>
                <img
                  src={CheckIconImage}
                  alt={"check_icon"}
                  className={"w-[20px] h-[20px] object-cover"}
                />

                <p
                  className={
                    "text-[16px] md:text-[18px] font-nunito font-[400] leading-[1.3em] text-[#0c7c00] font-semibold"
                  }
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div
            className={
              "my-[24px] py-[8px] px-[16px] bg-[#ffe3e3] rounded-[6px]"
            }
          >
            <p
              className={
                "my-[8px] text-[16px] md:text-[18px] font-nunito font-[400] leading-[1.3em]"
              }
            >
              {
                "But after age 35, declining estrogen hijacks this system's ability to function."
              }
            </p>
          </div>

          <div className={"space-y-[8px]"}>
            {crossList.map((item) => (
              <div className={"flex items-start gap-3"} key={item.id}>
                <img
                  src={CrossIconImage}
                  alt={"cross_icon"}
                  className={"w-[20px] h-[20px] object-cover"}
                />

                <p
                  className={
                    "text-[16px] md:text-[18px] font-nunito font-[400] leading-[1.3em] text-[#a60003] font-semibold"
                  }
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <p
            className={
              "my-[8px] text-[16px] md:text-[18px] font-nunito font-[600] leading-[1.3em]"
            }
          >
            {
              "Instead of processing and removing waste, it backs up in your tissues."
            }
          </p>
        </div>

        <div className={"h-full flex-1"}>
          <img
            src={SymptomImage10}
            alt={"drainage_image_desktop_10"}
            className={
              "w-[360px] h-[302px] md:w-[310px] md:h-[260px] lg:w-[570px] lg:h-[478px] object-cover"
            }
          />
        </div>
      </div>
    );
  };

  const DrainageSection02 = () => {
    const crossList = [
      {
        id: 1,
        title: "That's why you're bloated.",
      },
      {
        id: 2,
        title: "That's why your ankles swell.",
      },
      {
        id: 3,
        title: "That's why you see cellulite.",
      },
      {
        id: 4,
        title: "That's why you're bloated.",
      },
    ];

    return (
      <div
        className={
          "md:py-[56px] flex flex-col md:flex-row md:items-center lg:items-start justify-between gap-[16px] md:gap-[100px]"
        }
      >
        <div className={"hidden md:block flex-1"}>
          <img
            src={DrainageImageDesktop02}
            alt={"drainage_image_desktop_02"}
            className={
              "md:w-[310px] md:h-[207px] lg:w-[570px] lg:h-[380px] object-cover"
            }
          />
        </div>

        <div className={"md:hidden flex-1"}>
          <img
            src={SymptomImage11}
            alt={"drainage_image_desktop_02"}
            className={"w-[360px] h-[240px] object-cover"}
          />
        </div>

        <div className={"flex-1 mx-auto bg-white"}>
          <h2
            className={
              "text-[16px] md:text-[18px] font-nunito font-extrabold leading-[1.3em]"
            }
          >
            {"And it accumulates. Day after day. Week after week."}
          </h2>

          <p
            className={
              "my-[8px] text-[16px] md:text-[18px] font-nunito font-[400] leading-[1.3em]"
            }
          >
            That gallon of fluid your body should be draining every 24 hours?
            It's pooling in your stomach, your legs, your face—anywhere gravity
            and tissue structure allow it to settle.
          </p>

          <div
            className={
              "bg-[#ffe3e3] rounded-[8px] py-[8px] px-[16px] my-[24px]"
            }
          >
            <p
              className={
                "my-[8px] text-[16px] md:text-[18px] font-nunito font-[400] leading-[1.3em]"
              }
            >
              The metabolic waste your cells produce overnight? It's still
              sitting there at noon. At dinner. While you're trying to fall
              asleep.
            </p>

            <ul className={"space-y-[8px]"}>
              {crossList.map((item) => (
                <li className={"my-[8px] flex items-start gap-3"} key={item.id}>
                  <img
                    src={CrossIconImage}
                    alt={"cross_icon"}
                    className={"w-[20px] h-[20px] object-cover"}
                  />

                  <p
                    className={
                      "text-[16px] md:text-[18px] font-nunito font-[400] leading-[1.3em] text-[#a60003] font-semibold"
                    }
                  >
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <p
            className={
              "my-[8px] text-[16px] md:text-[18px] font-nunito font-[700] leading-[1.3em]"
            }
          >
            Your cells are literally sitting in their own waste—and your body
            can't flush it out.
          </p>

          <p
            className={
              "my-[8px] text-[16px] md:text-[18px] font-nunito font-[400] leading-[1.3em]"
            }
          >
            The longer this goes on, the worse it gets. More congestion. More
            inflammation. More pressure on an already compromised system.
          </p>
        </div>
      </div>
    );
  };

  return (
    <section
      className={
        "px-[15px] pt-[32px] md:px-0 md:pt-[56px] max-w-[1240px] mx-auto md:px-[50px] lg:px-0"
      }
    >
      <div
        className={
          "font-lora text-[24px] md:text-[32px] text-center font-[500] leading-[1.3em]"
        }
      >
        <h2>
          {"Why Your "}
          <span className={"text-[#039869]"}>
            {"Bloating, Brain Fog & Swollen Legs "}
          </span>
          {" Are"}
          <br />
          {"Actually Connected"}
        </h2>

        <p
          className={
            "text-[16px] md:text-[18px] font-[500] font-nunito my-[16px] leading-[1.3em]"
          }
        >
          {
            "If you're experiencing more than one of these symptoms, your body is trying to tell you"
          }
          <br />
          {"something:"}
        </p>
      </div>

      <SymptomGroup />

      <div className={"hidden md:flex w-full items-center justify-center"}>
        <img
          src={SymptomImage06}
          alt={"symptom_image_06"}
          className={
            "w-[668px] h-[141px] lg:w-[920px] lg:h-[195px] object-cover"
          }
        />
      </div>

      <div className={"mt-[24px] md:hidden flex items-center justify-center"}>
        <img
          src={SymptomImage08}
          alt={"symptom_image_06"}
          className={"max-w-[420px] h-[145px] object-cover"}
        />
      </div>

      <div className={"my-[24px] mx-auto flex items-center justify-center"}>
        <img
          src={DoubleArrowImage}
          alt={"double-arrow"}
          className={"w-[34px] h-[46px] md:w-[48px] md:h-[65px] object-cover"}
        />
      </div>

      <h2
        className={
          "my-[16px] text-center text-[24px] md:text-[32px] font-[400] font-lora leading-[1.3em]"
        }
      >
        {"The Connection "}
        <span className={"text-[#039869]"}>You've Been Missing</span>
      </h2>

      <div className={"hidden md:flex items-center justify-center"}>
        <img
          src={SymptomImage07}
          alt={"symptom_image_07"}
          className={
            "w-[668px] h-[400px] lg:w-[920px] lg:h-[551px] object-cover"
          }
        />
      </div>

      <div className={"md:hidden flex items-center justify-center"}>
        <img
          src={SymptomImage09}
          alt={"symptom_image_07"}
          className={"w-[360px] h-[373px] object-cover"}
        />
      </div>

      <div className={"my-[24px] mx-auto flex items-center justify-center"}>
        <img
          src={DoubleArrowImage}
          alt={"double-arrow"}
          className={"w-[34px] h-[46px] md:w-[48px] md:h-[65px] object-cover"}
        />
      </div>

      <h2
        className={
          "my-[16px] text-center text-[24px] md:text-[32px] font-[400] font-lora leading-[1.3em]"
        }
      >
        Your <span className={"text-[#039869]"}>Hidden</span> Drainage System
      </h2>

      {DrainageSection01()}

      {DrainageSection02()}
    </section>
  );
};

export default SymptomSection;
