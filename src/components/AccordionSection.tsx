import { useState } from "react";
import AccordionGroup from "./AccordionGroup";

const SculptiqueAccordion: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div>
      <AccordionGroup
        title="Ingredients proven by science"
        isOpen={openIndexes.includes(0)}
        onToggle={() => handleToggle(0)}
      >
        <div>
          <h3 className={"text-[16px] font-nunito font-bold mb-4"}>
            Sculptique Ingredients:
          </h3>
          <ul className={"mt-[16px] text-[16px] pl-[40px] space-y-3 list-disc"}>
            <li>
              <strong>Echinacea purpurea Extract</strong> – Known for its
              anti-inflammatory properties, it may support skin health.
            </li>
            <li>
              <strong>Dandelion Extract</strong> – Traditionally used as a
              diuretic, it may help reduce water retention.
            </li>
            <li>
              <strong>Burdock Powder</strong> – Contains antioxidants that may
              promote skin clarity.
            </li>
            <li>
              <strong>Cleavers Extract</strong> – Believed to support lymphatic
              drainage and detoxification.
            </li>
            <li>
              <strong>Rutin</strong> – A flavonoid that may strengthen blood
              vessels and improve circulation.
            </li>
            <li>
              <strong>Bromelain Powder</strong> – An enzyme from pineapple that
              may reduce inflammation and support tissue repair.
            </li>
            <li>
              <strong>Lemon Powder</strong> – Rich in vitamin C, it may aid in
              collagen production and skin rejuvenation.
            </li>
            <li>
              <strong>Kelp Extract</strong> - A source of iodine and minerals
              that may support skin metabolism.
            </li>
          </ul>
          <p className={"mt-4 text-[16px] font-nunito"}>
            These natural ingredients work together to reduce puffiness,
            bloating, fluid retention.
          </p>
        </div>
      </AccordionGroup>

      <AccordionGroup
        title={"How does it actually work?"}
        isOpen={openIndexes.includes(1)}
        onToggle={() => handleToggle(1)}
      >
        <p className={"text-[16px] font-nunito font-semibold leading-relaxed"}>
          Sculptique works by improving blood flow and supporting lymphatic
          drainage to reduce fluid buildup that causes puffiness, inflammation,
          and water retention. It also reduces inflammation and boosts collagen
          production to help skin become firmer and smoother.
        </p>
      </AccordionGroup>

      <AccordionGroup
        title="Shipping and returns"
        isOpen={openIndexes.includes(2)}
        onToggle={() => handleToggle(2)}
      >
        <div
          className={
            "text-[16px] font-nunito font-semibold leading-relaxed space-y-[12px]"
          }
        >
          <p>
            All of Sculptique orders get FREE shipping straight from our USA
            warehouse. Orders are usually shipped out within 1-2 working days,
            and you should receive the order within 3-7 working days for
            domestic USA orders, and within 10 working days for International
            orders.
          </p>
          <p>
            We also offer a 60-day money back guarantee - if you are unsatisfied
            with our product, you can take advantage of our guarantee and ship
            back the product to us to get your return within 60 days of
            receiving your order.
          </p>
        </div>
      </AccordionGroup>
    </div>
  );
};

export default SculptiqueAccordion;
