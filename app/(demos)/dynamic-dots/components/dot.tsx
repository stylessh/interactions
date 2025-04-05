"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Dot as DotType } from "./content";
import { useState } from "react";

export function Dot({
  background,
  id,
  Content,
  onSelect,
}: DotType & { onSelect: (dot: number | null) => void }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className={cn(
        "size-5 rounded-full flex items-center justify-center relative",
        background
      )}
      layoutId={`dot-${id}`}
      animate={
        isHovered
          ? { width: "32px", height: "32px" }
          : {
              width: "20px",
              height: "20px",
              transition: {
                delay: 0.1,
              },
            }
      }
      onMouseEnter={() => {
        setIsHovered(true);
        onSelect(id);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onSelect(null);
      }}
    >
      <AnimatePresence mode="sync">
        {isHovered && (
          <motion.div
            className="size-5 cursor-pointer"
            initial={{ opacity: 0, scale: 0.85, filter: "blur(2px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              filter: "blur(2px)",
            }}
            transition={{
              duration: 0.9,
              type: "spring",
              bounce: 0.5,
            }}
          >
            {Content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
