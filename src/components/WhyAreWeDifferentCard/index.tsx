import { Variants, motion } from "framer-motion";

type WhyAreWeDifferentCardProps = {
  id: number;
  img: string;
  title: string;
  reason: string;
};

export default function WhyAreWeDifferentCard({
  id,
  img,
  title,
  reason,
}: WhyAreWeDifferentCardProps) {
  const cardVariant: Variants = {
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
      data-testid="whyarewedifferentcard"
      custom={id}
      variants={cardVariant}
      initial="hidden"
      whileInView={"visible"}
      // viewport={{ once: true }}
      className="flex flex-col items-center bg-[#FFEED8] py-9 text-center"
    >
      <img src={img} className="mb-[1.5625rem]" alt="icon" />
      <p className="mb-2 text-[1.75rem] font-bold text-chocolate">{title}</p>
      <p className="w-[70%] text-xl text-secondary">{reason}</p>
    </motion.div>
  );
}
