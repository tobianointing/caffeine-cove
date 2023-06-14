import { motion } from "framer-motion";
import PrimaryButton from "../PrimaryButton";

type CoffeeCardProps = {
  id: number;
  img: string;
  title: string;
  description: string;
  price: string;
};

export default function CoffeeCard({
  id,
  img,
  title,
  description,
  price,
}: CoffeeCardProps) {
  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
      },
    }),
  };
  return (
    <motion.div
      data-testid="coffee-card"
      custom={id}
      variants={cardVariant}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      className="border border-[#f9c06a6b]"
    >
      <img src={img} className="w-full" alt="item image" />
      <div className="space-y-[0.375rem] text-center">
        <p className="text-[1.375rem] font-bold text-chocolate">{title}</p>
        <p>{description}</p>
        <p className="text-lg font-bold text-chocolate">{price}</p>
      </div>
      <div className="-mb-[25px] mt-[1.125rem] flex justify-center">
        <PrimaryButton text="Order now" />
      </div>
    </motion.div>
  );
}
