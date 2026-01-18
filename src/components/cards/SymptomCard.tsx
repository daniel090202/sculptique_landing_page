interface SymptomCard {
  id: number;
  image: string;
  description: string;
}

const SymptomCard: React.FC<{ symptom: SymptomCard }> = ({ symptom }) => {
  return (
    <div
      className={
        "bg-white rounded-lg overflow-hidden transition-shadow duration-300 space-y-[10px]"
      }
    >
      <div className={"aspect-[4/3] overflow-hidden"}>
        <img
          src={symptom.image}
          alt={`Symptom ${symptom.id}`}
          className={
            "w-full h-[184px] object-cover hover:scale-105 transition-transform duration-300"
          }
        />
      </div>

      <div className={"p-[16px] min-h-[150px] bg-[#f7f7f7] rounded-b-[6px]"}>
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
