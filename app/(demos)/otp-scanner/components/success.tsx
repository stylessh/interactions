import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function Success() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative size-10 bg-green-500 rounded-full flex items-center justify-center text-green-900 shadow-[0_0px_50px_-12px_rgb(0,0,0,var(--tw-shadow-color))] shadow-green-500">
        <CheckmarkIcon className="size-6" />
      </div>
    </motion.div>
  );
}

const CheckmarkIcon = ({ className }: { className: string }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={className}
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.5 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
    >
      <motion.path
        d="M20 6 9 17l-5-5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        exit={{ pathLength: 0 }}
        transition={{ duration: 1.25, type: "spring", bounce: 0.5 }}
      />
    </motion.svg>
  );
};
