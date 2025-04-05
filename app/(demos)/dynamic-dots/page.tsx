"use client";

import { DemoWrapper } from "@/components/demo-wrapper";
import { Dot } from "./components/dot";
import { useState } from "react";
import { MorphText } from "@/components/morph-text";
import { motion } from "motion/react";
import { DOTS } from "./components/content";


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
