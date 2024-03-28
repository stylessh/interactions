import React from "react";
import { motion } from "framer-motion";

export function Pill() {
  return (
    <motion.div
      className="bg-primary w-1/2 aspect-[16/2] rounded-[99px] shadow-md flex items-center justify-between px-1.5 gap-x-2"
      initial={{ scale: 0.5, opacity: 1 }}
      animate={{
        scale: 1,
        transition: {
          bounce: 0.4,
          type: "spring",
          duration: 0.5,
        },
      }}
      whileHover={{
        scaleX: 1.02,
      }}
      aria-label="A pill-shaped component with some controls inside."
    >
      <motion.div
        className="bg-foreground rounded-full h-5 flex-1 bg-green-600"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,

          transition: {
            bounce: 0.4,
            type: "spring",
            duration: 0.5,

            delay: 0.4,
          },
        }}
      />

      <motion.div
        className="bg-foreground rounded-full size-5 bg-orange-500"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,

          transition: {
            bounce: 0.4,
            type: "spring",
            duration: 0.5,

            delay: 0.4,
          },
        }}
        whileHover={{
          scaleX: 1.02,
        }}
      />

      <motion.div
        className="bg-foreground rounded-full h-5 w-12 bg-red-600"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,

          transition: {
            bounce: 0.4,
            type: "spring",
            duration: 0.5,

            delay: 0.4,
          },
        }}
        whileHover={{
          scaleX: 1.02,
        }}
      />
    </motion.div>
  );
}
