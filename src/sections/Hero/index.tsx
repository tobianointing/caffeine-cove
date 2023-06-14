import PrimaryButton from "../../components/PrimaryButton";
import { motion } from "framer-motion";

export default function Hero() {
  const variants = {
    hidden: {
      opacity: 0,
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    visible: {
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="visible"
      className="relative px-[1.8rem] pb-[5.9375rem] pt-[4rem] tablet:pt-[7.1875rem] laptop:px-[5.8125rem]"
    >
      <div className="z-10 w-[90%] font-['PlayFair_Display'] tablet:w-[47%]">
        <p className="text-[1.2rem] laptop:text-[1.375rem]">
          We’ve got your morning covered with
        </p>
        <h1 className="font-['Clicker_Script'] text-[10rem] leading-[13rem] tablet:leading-[18.1875rem] laptop:text-[13.75rem]">
          Coffee
        </h1>
        <p className="mb-5 text-base leading-[2.125rem] laptop:text-[1.25rem]">
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </p>

        <PrimaryButton text="Order Now" />
      </div>
    </motion.section>
  );
}
