import CoffeeCard from "../../components/CoffeeCard";
import { coffeeItems } from "../../content";
import coffee_blast1 from "../../assets/coffee_blast1.png";
import { motion, Variants } from "framer-motion";

export default function CoffeeItems() {
  const textVariants: Variants = {
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
    <section className="relative px-[1.8rem] py-[3.3125rem] laptop:px-[5.8125rem]">
      <motion.h1
        variants={textVariants}
        initial="hidden"
        viewport={{ once: true }}
        whileInView={"visible"}
        className="mb-4 text-center text-[2rem] font-bold text-chocolate laptop:text-h1"
      >
        Enjoy a new blend of coffee style
      </motion.h1>
      <motion.p
        variants={textVariants}
        initial="hidden"
        viewport={{ once: true }}
        whileInView={"visible"}
        className=" mb-8 text-center text-secondary"
      >
        Explore all flavours of coffee with us. There is always a new cup worth
        experiencing
      </motion.p>
      <div className="grid gap-5 gap-y-[3rem] tablet:grid-cols-2 laptop:grid-cols-[repeat(4,_minmax(280px,_1fr))]">
        {coffeeItems.map((item) => (
          <CoffeeCard
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            img={item.img}
          />
        ))}
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
        className="absolute -bottom-[85px] -right-[50px] -z-[1] w-[300px] tablet:-bottom-[140px] laptop:-bottom-[170px] laptop:w-auto"
        src={coffee_blast1}
        alt="coffee blast"
      />
    </section>
  );
}
