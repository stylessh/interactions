import { motion } from "motion/react";

export const AnimatedNumber = ({ value }: { value: string }) => {
  return (
    <motion.p className="inline-flex items-center overflow-hidden">
      {value.split("").map((char, idx) => {
        return (
          <motion.span
            key={char}
            initial={{
              y: idx % 2 === 0 ? "4px" : "-4px",
              filter: "blur(2px)",
              opacity: 0,
            }}
            animate={{ y: "0", filter: "blur(0px)", opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.6,
              delay: 0.3 + idx * 0.015,
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.p>
  );
};
