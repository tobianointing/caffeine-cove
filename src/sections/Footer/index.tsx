import fb from "../../assets/fb.svg";
import inst from "../../assets/inst.svg";
import twit from "../../assets/twit.svg";
import yout from "../../assets/yout.svg";
import FooterItem from "../../components/FooterItem";
import pngwing from "../../assets/pngwing.png";
import { footerContent } from "../../content";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-footer relative px-[1.8rem] pb-[4.5rem] pt-[5rem] text-white tablet:pt-[6rem] laptop:px-[5.8125rem] laptop:pt-[10.125rem]">
      <motion.img
        whileInView={{
          left: [-100, 0],
          transition: {
            duration: 0.5,
          },
        }}
        className="absolute -top-[6%] left-0 w-[110px] tablet:-top-[22%] tablet:w-[200px] laptop:-top-[45%] laptop:w-auto"
        src={pngwing}
        alt="pngwing"
      />
      <motion.img
        whileInView={{
          right: [-100, 0],
          transition: {
            duration: 0.5,
          },
        }}
        className="absolute -top-[6%] right-0 w-[110px]  scale-x-[-1] tablet:-top-[22%]  tablet:w-[200px] laptop:-top-[45%] laptop:w-auto"
        src={pngwing}
        alt="pngwing"
      />
      <div className="grid grid-cols-1 justify-items-center gap-[4.125rem] text-center tablet:grid-cols-2 tablet:justify-items-start tablet:text-start laptop:grid-cols-[380px_1fr_1fr_2.2fr]">
        <div>
          <h1 className="mb-5 font-['Clicker_Script'] text-h1 font-normal">
            Bean Scene
          </h1>
          <p className="mb-8 text-sm leading-[22px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex justify-center gap-6 tablet:justify-start">
            <a href="">
              <img src={fb} alt="facebook icon" />
            </a>
            <a href="">
              <img src={inst} alt="instagram icon" />
            </a>
            <a href="">
              <img src={yout} alt="youtube icon" />
            </a>
            <a href="">
              <img src={twit} alt="twitter icon" />
            </a>
          </div>
        </div>

        {footerContent.map((item, index) => (
          <FooterItem key={index} header={item.header} menus={item.menus} />
        ))}
      </div>
    </footer>
  );
}
