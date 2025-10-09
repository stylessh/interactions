import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Scanner() {
  return (
    <div className="absolute inset-0 w-full z-10 pointer-events-none">
      <motion.div
        initial={{ left: 0 }}
        animate={{ left: "100%" }}
        exit={{
          opacity: 0,
          scale: 0.9,
          transition: { duration: 0.8, type: "spring" },
        }}
        transition={{
          visualDuration: 1.25,
          type: "spring",
          bounce: 0,
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: 0.5,
        }}
        className={cn(
          "w-px h-[150%]",
          "absolute -top-[25%]",
          "bg-linear-to-b from-background via-red-500 to-background",
          "origin-center"
        )}
      >
        <div className="absolute top-1/2 -translate-y-1/2 w-1 h-[30%] bg-red-500 blur-lg" />
      </motion.div>
    </div>
  );
}
