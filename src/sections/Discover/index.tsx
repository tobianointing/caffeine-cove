import PrimaryButton from "../../components/PrimaryButton";
import coffee_beans_cup from "../../assets/coffee-beans-cup.png";
import coffee_blast1 from "../../assets/coffee_blast1.png";
import { motion } from "framer-motion";

export default function Discover() {
  return (
    <section className="relative mt-[5.125rem] flex items-start justify-between gap-[5.9375rem] px-[1.8rem] laptop:px-[5.8125rem]">
      <motion.div
        whileInView={{
          opacity: 1,
          x: [-100, 0],
          transition: { duration: 0.6 },
        }}
        className="mb-[5.125rem] space-y-[1.8125rem] tablet:w-[60%] laptop:mt-[5rem] laptop:w-[585px]"
      >
        <h1 className="text-[2rem] font-bold text-chocolate laptop:text-h1">
          Discover the best coffee
        </h1>
        <p className="text-base text-secondary laptop:text-[1.25rem]">
          Bean Scene is a coffee shop that provides you with quality coffee that
          helps boost your productivity and helps build your mood. Having a cup
          of coffee is good, but having a cup of real coffee is greater. There
          is no doubt that you will enjoy this coffee more than others you have
          ever tasted.
        </p>
        <PrimaryButton text="Learn more" />
      </motion.div>
      <motion.img
        whileInView={{ opacity: 1, x: [100, 0], transition: { duration: 0.6 } }}
        className="hidden w-[40%] tablet:block"
        src={coffee_beans_cup}
        alt="coffee seeds cup"
      />
      <motion.img
        whileInView={{
          left: [-100, -50],
          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
        className="absolute -bottom-[80px] -left-[50px] -z-[1] w-[300px] scale-x-[-1] laptop:-bottom-[100px] laptop:w-auto"
        src={coffee_blast1}
        alt="coffee blast"
      />
    </section>
  );
}
