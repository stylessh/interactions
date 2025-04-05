"use client";

import React, { useContext } from "react";
import { motion } from "motion/react";
import { AnimationContext } from "../card";

const variants = {
  "initial-view": {
    scale: 1,
    opacity: 1,
    borderRadius: "50%",

    transition: {
      bounce: 0.4,
      type: "spring",
      duration: 0.5,

      delay: 0.2,
    },
  },
  "in-view": {
    scale: 1,
    opacity: 1,

    transition: {
      bounce: 0.4,
      type: "spring",
      duration: 0.5,

      delay: 0.4,
    },
  },
  color: {},
};

export function MergedBubbles() {
  const { shouldAnimate } = useContext(AnimationContext);
  return (
    <motion.div
      className="grid grid-cols-12 w-1/2 aspect-[16/2.8]"
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
      viewport={{ amount: 0.9, margin: "-150px 0px -400px 0px" }}
      aria-label="A pill-shaped component with some controls inside."
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          className="bg-primary"
          initial={{ scale: 0.2, opacity: 0 }}
          animate={shouldAnimate ? ["initial-view"] : ["in-view"]}
          variants={variants}
        />
      ))}
    </motion.div>
  );
}
