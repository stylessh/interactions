import React from "react";
import { motion } from "framer-motion";

export function Card({
  children,
  onViewportEnter,
}: {
  children: React.ReactNode;
  onViewportEnter: () => void;
}) {
  return (
    <motion.li
      className="bg-background-100 rounded-md w-full aspect-[4/3] grid place-items-center"
      initial={{ scale: 0.96, opacity: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          bounce: 0.4,
          type: "spring",
          duration: 0.5,
        },
      }}
      viewport={{ amount: 0.9, margin: "0px 0px -250px 0px" }}
      onViewportEnter={onViewportEnter}
    >
      {children}
    </motion.li>
  );
}
