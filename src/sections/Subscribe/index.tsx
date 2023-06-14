import { motion } from "framer-motion";

export default function Subscribe() {
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
    <section className="bg-subscribe relative py-[5rem] text-white">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[#603809] opacity-80"></div>
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView={"visible"}
        className="relative z-10"
      >
        <h1 className="mb-4 text-center text-[2rem] font-bold laptop:text-h1">
          Subscribe to get the Latest News
        </h1>
        <div className="laptop:w-full] flex justify-center">
          <p className="mb-8 w-[90%] text-center tablet:w-[50%]">
            Don’t miss out on our latest news, updates, tips and special offers
          </p>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            name="email"
            className="rounded-l-[4px] bg-[#FFF9F1] px-[1.625rem] py-4 text-black outline-none ring-0 placeholder:text-secondary tablet:w-[280px] laptop:w-[505px]"
            placeholder="Enter your email"
          />
          <button className="w-[100px] bg-primary  text-chocolate laptop:w-[137px]">
            Subscribe
          </button>
        </div>
      </motion.div>
    </section>
  );
}
