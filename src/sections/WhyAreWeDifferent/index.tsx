import WhyAreWeDifferentCard from "../../components/WhyAreWeDifferentCard";
import { whyWeAreDifferentContents } from "../../content";
import PrimaryButton from "../../components/PrimaryButton";
import { motion } from "framer-motion";

export default function WhyAreWeDifferent() {
  const textVariants = {
    hidden: {
      opacity: 0,
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    visible: {
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative overflow-hidden px-[1.8rem] py-[3.3125rem] laptop:px-[5.8125rem]">
      <motion.h1
        variants={textVariants}
        initial="hidden"
        whileInView={"visible"}
        className="mb-4 text-center text-[2rem] font-bold text-chocolate laptop:text-h1"
      >
        Why are we different?
      </motion.h1>
      <motion.p
        variants={textVariants}
        initial="hidden"
        whileInView={"visible"}
        className=" mb-8 text-center text-secondary"
      >
        We don’t just make your coffee, we make your day!
      </motion.p>

      <div className="grid gap-5 tablet:grid-cols-2 laptop:grid-cols-[repeat(4,_minmax(280px,_1fr))] ">
        {whyWeAreDifferentContents.map((item) => (
          <WhyAreWeDifferentCard
            id={item.id}
            img={item.img}
            reason={item.reason}
            title={item.title}
            key={item.id}
          />
        ))}
      </div>

      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView={"visible"}
        className="mt-8 flex flex-col items-center text-center"
      >
        <p className="text-xl text-secondary">
          Great ideas start with great coffee, Lets help you achieve that
        </p>
        <h1 className="mb-6 text-[1.875rem] font-bold text-chocolate">
          Get started today.
        </h1>
        <PrimaryButton text="Join Us" />
      </motion.div>
    </section>
  );
}
