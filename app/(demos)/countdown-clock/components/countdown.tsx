"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Countdown() {
  const [count, setCount] = useState(1799);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        if (c === 0) {
          return 60;
        }
        return c - 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  return (
    <div className="flex items-center gap-x-4 text-3xl">
      <p className="font-black text-neutral-500">
        <motion.span layout>
          <AnimatePresence mode="popLayout" initial={false}>
            {minutes
              .toString()
              .padStart(2, "0")
              .split("")
              .map((digit, index) => (
                <motion.span
                  className="inline-block tabular-nums"
                  key={`${digit}-${index}`}
                  initial={{ y: "8px", filter: "blur(2px)", opacity: 0 }}
                  animate={{ y: "0", filter: "blur(0px)", opacity: 1 }}
                  exit={{ y: "-8px", filter: "blur(2px)", opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.35 }}
                >
                  {digit}
                </motion.span>
              ))}
          </AnimatePresence>
        </motion.span>
        <span className="text-white">M</span>{" "}
        <motion.span layout>
          <AnimatePresence mode="popLayout" initial={false}>
            {seconds
              .toString()
              .padStart(2, "0")
              .split("")
              .map((digit, index) => (
                <motion.span
                  className="inline-block tabular-nums"
                  key={`${digit}-${index}`}
                  initial={{ y: "8px", filter: "blur(2px)", opacity: 0 }}
                  animate={{ y: "0", filter: "blur(0px)", opacity: 1 }}
                  exit={{ y: "-8px", filter: "blur(2px)", opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.35 }}
                >
                  {digit}
                </motion.span>
              ))}
          </AnimatePresence>
        </motion.span>
        <span className="text-white pl-px">S</span>
      </p>
    </div>
  );
}
