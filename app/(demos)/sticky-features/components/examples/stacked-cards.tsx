"use client";

import { useContext } from "react";
import { AnimationContext } from "../card";
import { motion } from "motion/react";

export function StackedCards() {
  const { shouldAnimate } = useContext(AnimationContext);

  return (
    <motion.div className="w-full flex justify-center items-center flex-col relative">
      <motion.div
        className="w-1/2 aspect-[5/3] bg-primary/50 rounded-md absolute -top-4 md:-top-8 scale-90"
        initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
        animate={shouldAnimate ? { opacity: 1, scale: 0.9, rotateY: 0 } : {}}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: 0.1 }}
      />
      <motion.div
        className="w-1/2 aspect-[5/3] bg-primary/70 rounded-md absolute -top-2 md:-top-4 scale-95"
        initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
        animate={shouldAnimate ? { opacity: 1, scale: 0.95, rotateY: 0 } : {}}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: 0.05 }}
      />
      <motion.div
        className="w-1/2 aspect-[5/3] bg-primary rounded-md  shadow-md z-30"
        initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
        animate={shouldAnimate ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
      />
    </motion.div>
  );
}
