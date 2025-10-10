"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Chart } from "./chart";

export const DEFAULT_TRANSITION = {
  type: "spring" as const,
  duration: 0.65,
  bounce: 0.25,
};

export function Card() {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isExpanded) {
    return <CardPreview setIsExpanded={setIsExpanded} />;
  }

  return <CardDetails setIsExpanded={setIsExpanded} />;
}

const CardDetails = ({
  setIsExpanded,
}: {
  setIsExpanded: (isExpanded: boolean) => void;
}) => {
  return (
    <motion.div
      layoutId="card-wrapper"
      className="bg-neutral-800 border border-neutral-700 rounded-xl w-full max-w-[720px] p-1 flex flex-col gap-1"
      transition={{
        layout: DEFAULT_TRANSITION,
      }}
      layout
    >
      <div className="p-2 flex justify-between items-center gap-1">
        <div className="flex flex-col">
          <motion.h3
            layoutId="card-title"
            transition={{
              layout: DEFAULT_TRANSITION,
            }}
            className="text-neutral-100 text-2xl font-bold"
          >
            Analytics
          </motion.h3>

          <OnlineCount />
        </div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)", y: 5 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(4px)", y: -5 }}
          transition={{ ...DEFAULT_TRANSITION, delay: 0.15 }}
          className="flex items-center h-max bg-neutral-700 border border-neutral-600 rounded-lg"
        >
          <div className="py-1.5 px-2.5 border-r border-neutral-600 h-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="size-4 text-neutral-100"
            >
              <path d="M8 2v4M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
          </div>

          <motion.p
            layoutId="card-time-interval"
            transition={{
              layout: DEFAULT_TRANSITION,
            }}
            className="text-neutral-400 text-sm font-medium px-4"
          >
            24h
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        layout
        layoutId="card-content"
        className="bg-neutral-700 border border-neutral-600 rounded-lg aspect-video w-full origin-center"
        transition={{
          layout: DEFAULT_TRANSITION,
        }}
      >
        <Chart />
      </motion.div>
    </motion.div>
  );
};

const CardPreview = ({
  setIsExpanded,
}: {
  setIsExpanded: (isExpanded: boolean) => void;
}) => {
  return (
    <motion.div
      layout
      layoutId="card-wrapper"
      className="bg-neutral-800 border border-neutral-700 rounded-xl w-full max-w-[380px] p-1"
      onClick={() => setIsExpanded(true)}
      transition={{
        layout: DEFAULT_TRANSITION,
      }}
    >
      <div className="p-2 flex justify-between items-center">
        <motion.h3
          layoutId="card-title"
          className="text-foreground text-md font-medium"
        >
          Analytics
        </motion.h3>

        <motion.p
          layoutId="card-time-interval"
          className="text-muted-foreground text-sm font-medium inline-flex items-center gap-1"
        >
          24h
          <ArrowRight />
        </motion.p>
      </div>

      <motion.div
        layout
        layoutId="card-content"
        className="bg-neutral-700 border border-neutral-600 rounded-lg p-2 w-full origin-center"
        transition={{
          layout: DEFAULT_TRANSITION,
        }}
      >
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <p className="text-foreground text-2xl font-medium">
              2,623 <span className="text-neutral-400 text-sm">views</span>
            </p>
            <OnlineCount />
          </div>

          <div className="bg-green-900 rounded-full px-2 py-1">
            <p className="text-green-500 text-xs font-medium">+23%</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ArrowRight = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={cn("size-3", className)}
    >
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  );
};

const OnlineCount = () => {
  return (
    <motion.p
      layoutId="online-count"
      transition={{
        layout: DEFAULT_TRANSITION,
      }}
      className="text-neutral-400 text-sm font-medium flex items-center gap-1.5"
    >
      <span className="w-2 h-2 bg-green-500 rounded-full block" />6 online
    </motion.p>
  );
};
