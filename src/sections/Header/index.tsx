import PrimaryButton from "../../components/PrimaryButton";
import hamburger from "../../assets/hamburger.svg";
import close_icon from "../../assets/icon-close.svg";
import { useState } from "react";
import { Variants, motion } from "framer-motion";

import { useMediaQuery } from "usehooks-ts";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");

  const itemVariants: Variants | undefined = matches
    ? undefined
    : {
        open: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 24 },
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
      };

  return (
    <header className="z-11 relative flex items-center px-[1.8rem] pt-[1.25rem] laptop:px-[5.8125rem]">
      <a href="/" className="font-['Clicker_Script'] text-[2.1875rem]">
        Caffeine Cove
      </a>

      <motion.nav
        variants={
          matches
            ? undefined
            : {
                open: {
                  clipPath: "circle(141.4% at 100% 0)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  clipPath: "circle(0.0% at 100% 0)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }
        }
        animate={isOpen ? "open" : "closed"}
        className={`fixed bottom-0 left-0 right-0 top-0 z-20 grid flex-1 place-content-center gap-16 bg-white text-base  font-bold  text-black transition-transform tablet:static tablet:flex tablet:h-auto tablet:translate-x-0 tablet:gap-0 tablet:bg-inherit tablet:text-sm tablet:font-medium tablet:text-white`}
      >
        <motion.img
          whileHover={{ rotate: [0, 90] }}
          src={close_icon}
          alt="close icon"
          className="absolute left-8 top-8 cursor-pointer tablet:hidden"
          onClick={() => setIsOpen(false)}
        />
        <motion.ul className="flex flex-col items-center gap-7 font-['PlayFair_Display'] text-4xl tablet:ml-auto tablet:flex-row tablet:gap-[1.75rem] tablet:text-sm laptop:gap-[3.75rem]">
          <NavItem name="Home" link="/" />
          <NavItem name="Menu" link="/menu" />
          <NavItem name="About Us" link="/about-us" />
          <NavItem name="Contact Us" link="/contact-us" />
        </motion.ul>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-5 font-['PlayFair_Display']  text-xl  tablet:ml-auto tablet:flex-row tablet:gap-[1.75rem] tablet:text-sm laptop:gap-[2.1875rem]"
        >
          <button className="relative before:absolute before:-bottom-[6px] before:h-[1px] before:w-0 before:rounded-sm before:bg-white before:transition-[width] hover:before:w-full">
            Sign In
          </button>
          <PrimaryButton text="Sign Up" />
        </motion.div>
      </motion.nav>

      <img
        src={hamburger}
        className="ml-auto cursor-pointer tablet:hidden"
        alt="hambuger menu"
        onClick={() => setIsOpen(true)}
      />
    </header>
  );
}

type NavItemProps = {
  name: string;
  link: string;
};

function NavItem({ name, link }: NavItemProps) {
  const matches = useMediaQuery("(min-width: 768px)");

  const itemVariants: Variants | undefined = matches
    ? undefined
    : {
        open: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 24 },
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
      };
  return (
    <motion.li
      variants={itemVariants}
      className="relative before:absolute before:-bottom-[6px] before:h-[1px] before:w-0 before:rounded-sm before:bg-white before:transition-[width] hover:before:w-full"
    >
      <a href={link}>{name}</a>
    </motion.li>
  );
}
