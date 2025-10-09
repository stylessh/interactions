"use client";

import React, { createContext, useState } from "react";
import { motion } from "motion/react";

export const AnimationContext = createContext<{
  shouldAnimate: boolean;
}>({
  shouldAnimate: false,
});

export function Card({
  children,
  onViewportEnter,
}: {
  children: React.ReactNode;
  onViewportEnter: () => void;
}) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  return (
    <motion.li
      className="bg-background-100 rounded-md w-full aspect-4/3 grid place-items-center"
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
      onViewportEnter={() => {
        if (!shouldAnimate) {
          setShouldAnimate(true);
        }

        onViewportEnter();
      }}
      onViewportLeave={() => {
        if (shouldAnimate) {
          setShouldAnimate(false);
        }
      }}
    >
      <AnimationContext.Provider
        value={{
          shouldAnimate,
        }}
      >
        {children}
      </AnimationContext.Provider>
    </motion.li>
  );
}
