"use client";

import { DemoWrapper } from "@/components/demo-wrapper";
import { Dot } from "./components/dot";
import { useState } from "react";
import { MorphText } from "@/components/morph-text";
import { motion } from "motion/react";

export const DOTS = [
  {
    id: 1,
    label: "Error",
    background: "bg-red-500 border border-red-300/30",
    Content: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-red-900 size-5"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </svg>
    ),
  },

  {
    id: 3,
    label: "Success",
    background: "bg-green-500 border border-green-300/30",
    Content: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green-900 size-5"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Warning",
    background: "bg-amber-500 border border-amber-300/30",
    Content: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-yellow-900 size-5"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
];

export type Dot = (typeof DOTS)[number];

export default function DynamicDots() {
  const [selectedDot, setSelectedDot] = useState<number | null>(null);

  return (
    <DemoWrapper name="dynamic-dots">
      <div className="grid place-items-center">
        <div className="relative">
          <motion.div layout className="w-max px-2 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center gap-x-2">
            {DOTS.map((dot) => (
              <Dot 
                key={dot.id} 
                {...dot} 
                onSelect={setSelectedDot} 
              />
            ))}
          </motion.div>

          <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+10px)] w-full text-center font-medium">
            <MorphText>
              {DOTS.find((dot) => dot.id === selectedDot)?.label || ""}
            </MorphText>
          </div>
        </div>
      </div>
    </DemoWrapper>
  );
}
