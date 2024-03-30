import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AnimationContext } from "../card";

export function Pill() {
  const { shouldAnimate } = useContext(AnimationContext);

  return (
    <motion.div
      className="bg-primary/10 w-1/2 aspect-[16/2] rounded-[99px] shadow-md flex items-center justify-between px-1.5 gap-x-2"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: {
          bounce: 0.4,
          type: "spring",
          duration: 0.5,
        },
      }}
      viewport={{ amount: 0.9, margin: "-150px 0px 0px 0px" }}
      whileHover={{
        scaleX: 1.02,
      }}
      aria-label="A pill-shaped component with some controls inside."
    >
      <motion.div
        className="bg-foreground rounded-full h-5 w-full bg-green-500"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={
          shouldAnimate
            ? {
                scale: 1,
                opacity: 1,

                transition: {
                  bounce: 0.4,
                  type: "spring",
                  duration: 0.5,

                  delay: 0.4,
                },
              }
            : {}
        }
      />

      <motion.div
        className="bg-foreground rounded-full w-8 h-5 bg-orange-500"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={
          shouldAnimate
            ? {
                scale: 1,
                opacity: 1,

                transition: {
                  bounce: 0.4,
                  type: "spring",
                  duration: 0.5,

                  delay: 0.4,
                },
              }
            : {}
        }
      />

      <motion.div
        className="bg-foreground rounded-full h-5 w-12 bg-red-500"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={
          shouldAnimate
            ? {
                scale: 1,
                opacity: 1,

                transition: {
                  bounce: 0.4,
                  type: "spring",
                  duration: 0.5,

                  delay: 0.4,
                },
              }
            : {}
        }
      />
    </motion.div>
  );
}
