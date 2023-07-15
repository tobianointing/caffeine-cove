import CaorouselButton from "../../components/CaorouselButton";
import arrow_right from "../../assets/arrowright.svg";
import arrow_left from "../../assets/arrowleft.svg";
import coffee_blast2 from "../../assets/coffee_blast2.png";
import coffee_blast1 from "../../assets/coffee_blast1.png";
import { motion, useAnimate } from "framer-motion";

import { feedbacks as fbs } from "../../content/feedbacks";
import { useEffect, useState } from "react";

export default function Feedback() {
  const [feedbacks] = useState(fbs);
  const [count, setCount] = useState(0);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "p",
      {
        opacity: [0, 1],
        x: [50, 0],
      },
      { duration: 0.5, ease: "easeInOut" }
    );
    animate(
      ".person",
      {
        opacity: [0, 1],
        clipPath: [
          "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
          "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        ],
      },
      { duration: 0.3 }
    );
  }, [count]);

  const handleNext = () => {
    if (count >= feedbacks.length - 1) {
      setCount(0);
      return;
    }
    setCount(count + 1);
  };

  const handlePrev = () => {
    if (count <= 0) {
      setCount(feedbacks.length - 1);
      return;
    }
    setCount(count - 1);
  };

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
    <section className="relative px-[3rem] py-[5.125rem] tablet:px-[5rem] laptop:px-[12.0625rem]">
      <motion.h1
        variants={textVariants}
        initial="hidden"
        viewport={{ once: true }}
        whileInView={"visible"}
        className="mb-4 text-center  text-[2rem] font-bold text-chocolate laptop:text-h1"
      >
        Our coffee perfection feedback
      </motion.h1>
      <motion.p
        variants={textVariants}
        initial="hidden"
        viewport={{ once: true }}
        whileInView={"visible"}
        className=" mb-8 text-center text-secondary"
      >
        Our customers has amazing things to say about us
      </motion.p>

      <div
        ref={scope}
        className="relative mb-[3.5rem] w-full border border-[#F9C06A6B] bg-[#FFF9F1] px-8 pb-[6.25rem] pt-[3rem] text-center tablet:w-[980x] tablet:px-[6.25rem] tablet:pt-[8.0625rem]"
      >
        <p
          className={`relative mb-7 text-sm text-secondary before:absolute before:-left-[74px] before:-top-[30px] before:text-[10rem] before:font-bold before:text-chocolate before:content-['“'] tablet:text-base laptop:text-lg laptop:before:text-[13.75rem]`}
        >
          {feedbacks[count].text}
        </p>
        <p className="mb-1 text-[1.5rem] text-chocolate opacity-0 laptop:text-[2rem]">
          {feedbacks[count].name}
        </p>
        <p className="text-sm text-secondary laptop:text-xl">
          {feedbacks[count].title}
        </p>

        <CaorouselButton
          img={arrow_right}
          classNames="-left-[41px]"
          onClick={handlePrev}
        />
        <CaorouselButton
          img={arrow_left}
          classNames="-right-[41px]"
          onClick={handleNext}
        />
        <div className="person absolute -bottom-[55px] left-0 right-0 flex w-full justify-center tablet:-bottom-[72px] ">
          <img
            className="w-[100px] tablet:w-auto"
            src={feedbacks[count].img}
            alt="person"
          />
        </div>
      </div>
      <motion.img
        viewport={{ once: true }}
        whileInView={{
          right: [-100, -50],
          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        }}
        className="absolute right-0 top-[223px] w-[170px] tablet:top-[150px] tablet:w-[300px] laptop:top-[105px] laptop:w-auto"
        src={coffee_blast1}
        alt="coffee blast"
      />
      <motion.img
        viewport={{ once: true }}
        whileInView={{
          left: [-100, -50],
          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        }}
        className="absolute bottom-[110px] left-0 w-[170px] tablet:w-[300px] laptop:bottom-[70px] laptop:w-auto"
        src={coffee_blast2}
        alt="coffee blast"
      />
    </section>
  );
}
