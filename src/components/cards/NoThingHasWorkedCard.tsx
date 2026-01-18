import CrossIconImage from "../../assets/images/common/cross_image_icon.webp";

interface CardData {
  id: number;
  image: string;
  title: string;
  reason: string;
}

interface NoThingHasWorkedCardProps {
  data: CardData;
}

const NoThingHasWorkedCard: React.FC<NoThingHasWorkedCardProps> = ({
  data,
}) => {
  return (
    <div className={"bg-white rounded-[6px] overflow-hidden"}>
      <div className="relative">
        <img
          src={data.image}
          alt={data.title}
          className={"w-full h-[330px] object-cover"}
        />
      </div>

      <div className={"p-[24px]"}>
        <p className="text-[20px] font-nunito font-[600] leading-[1.3em] text-center mb-6">
          {data.title}
        </p>

        <div
          className={
            "mt-[24px] min-h-[180px] bg-[#ffe3e3] rounded-[6px] py-[8px] px-[16px]"
          }
        >
          <div className={"flex items-center justify-center gap-2 mb-3"}>
            <h3 className={"text-[16px] font-nunito font-[600]"}>
              {"Why it failed"}
            </h3>

            <img
              src={CrossIconImage}
              alt={"cross_icon"}
              className={"w-[24px] h-[25px] object-cover"}
            />
          </div>
          <p className="mt-[12px] text-[16px] font-nunito font-[700] leading-[1.3em] text-center">
            {data.reason}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoThingHasWorkedCard;
