type PrimaryButtonProps = {
  text: string;
};
import { motion } from "framer-motion";
export default function PrimaryButton({ text }: PrimaryButtonProps) {
  return (
    <motion.button
      data-testid="primary-button"
      initial={false}
      animate="visible"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.97 }}
      className="rounded-3xl bg-primary px-[26px] py-[14px] text-black"
    >
      {text}
    </motion.button>
  );
}
