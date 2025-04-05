"use client";

import { motion, AnimatePresence } from "motion/react";

export function MorphText({ children }: { children: string | string[] }) {
  function generateKeys(text: string) {
    const charCount: { [key: string]: number } = {};
    return text.split("").map((char) => {
      if (!charCount[char]) {
        charCount[char] = 0;
      }
      const key = `${char}-${charCount[char]}`;
      charCount[char]++;
      return { char, key };
    });
  }

  const textToDisplay = generateKeys(children as string);

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {textToDisplay.map(({ char, key }) => (
        <motion.span
          key={key}
          layoutId={key}
          style={{ display: "inline-block", font: "inherit" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
            type: "spring",
            bounce: 0,
            opacity: {
              duration: 0.35,
              type: "spring",
              bounce: 0,
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </AnimatePresence>
  );
}
