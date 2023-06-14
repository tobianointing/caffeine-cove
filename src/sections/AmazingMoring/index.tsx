import cup from "../../assets/cup.png";
import coffee_beans from "../../assets/coffee_bean.png";
import PrimaryButton from "../../components/PrimaryButton";
import { motion } from "framer-motion";

export default function AmazingMorning() {
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
    <section className="bg-get-a-chance relative flex items-center justify-between px-[1.8rem] py-[3.3125rem] text-white laptop:px-[5.8125rem]">
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView={"visible"}
        className="relative z-10 w-full space-y-[1.375rem] tablet:w-[50%]"
      >
        <h1 className="text-[2rem] laptop:text-h1">
          Get a chance to have an Amazing morning
        </h1>
        <p className="w-[80%] text-base laptop:text-h2">
          We are giving you are one time opportunity to experience a better life
          with coffee.
        </p>
        <PrimaryButton text="Order Now" />
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[#603809] opacity-80"></div>
      <div className="hidden tablet:block">
        <motion.img
          whileInView={{ x: [120, 0], transition: { duration: 0.5 } }}
          className="relative z-10 mr-[5rem] "
          src={cup}
          alt="coffee cup"
        />
        <img
          className="absolute bottom-0 right-0"
          src={coffee_beans}
          alt="coffee cup"
        />
      </div>
    </section>
  );
}
