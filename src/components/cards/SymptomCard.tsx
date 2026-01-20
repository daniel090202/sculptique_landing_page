interface SymptomCard {
  id: number;
  image: string;
  description: string;
}

const SymptomCard: React.FC<{ symptom: SymptomCard }> = ({ symptom }) => {
  return (
    <div
      className={
        "flex items-center md:flex-col md:items-start md:justify-start bg-white rounded-[8px] overflow-hidden md:space-y-[10px]"
      }
    >
      <div
        className={
          "flex-1 h-full md:max-h-[184px] lg:h-full lg:flex-1 overflow-hidden"
        }
      >
        <img
          src={symptom.image}
          alt={`Symptom ${symptom.id}`}
          className={"w-[180px] h-[150px] md:w-full md:h-[184px] object-cover"}
        />
      </div>

      <div
        className={
          "h-[150px] flex-1 md:flex-0 lg:flex-1 p-[16px] md:h-full lg:min-h-[150px] bg-[#f7f7f7] md:rounded-b-[6px]"
        }
      >
        <p
          className={
            "text-[16px] font-nunito font-[400] text-center leading-relaxed"
          }
        >
          {symptom.description}
        </p>
      </div>
    </div>
  );
};

export default SymptomCard;
