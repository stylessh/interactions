"use client";

import { useState, useEffect } from "react";
import { motion, animate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

function OrangeIndicator() {
  return (
    <svg
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -right-2 top-1/2 -translate-y-1/2 w-20 text-orange-500 z-20 drop-shadow-xl"
    >
      <defs>
        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffc066" />
          <stop offset="100%" stop-color="#ff6600" />
        </linearGradient>
      </defs>

      <path
        d="M10,50 
             a10,10 0 0 1 10,-10 
             L290,30 
             L290,70 
             L20,60 
             a10,10 0 0 1 -10,-10 
             Z"
        fill="url(#orangeGradient)"
      />
    </svg>
  );
}

function AnimatedLines({ count }: { count: number }) {
  const circleAngle = 360;
  const totalLines = 40;
  const lineAngle = circleAngle / totalLines;

  const lines = Array.from({ length: totalLines }, (_, i) => ({
    id: i,
    angle: i * lineAngle,
  }));

  const rotation = useMotionValue(0);

  useEffect(() => {
    const currentRotation = rotation.get();
    animate(rotation, currentRotation - lineAngle, {
      type: "spring",
      duration: 0.75,
      bounce: 0.5,
      onComplete: () => {
        // If we've completed a full circle, reset to 0
        if (rotation.get() <= -circleAngle) {
          rotation.set(0);
        }
      },
    });
  }, [count]);

  return (
    <motion.div
      className="absolute inset-0 origin-center"
      style={{ rotate: rotation }}
    >
      {lines.map((line) => (
        <div
          key={line.id}
          className={cn(
            "absolute top-1/2 left-1/2 w-[70px] h-[1px] origin-left opacity-50 bg-neutral-600",
            line.id % 5 === 0 && "bg-white"
          )}
          style={{
            transform: `rotate(${line.angle}deg)`,
          }}
        />
      ))}
    </motion.div>
  );
}

export function Clock() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => (c + 1) % 40);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-20 h-full overflow-hidden isolate">
      <div className="absolute w-full h-full left-[60%]">
        <AnimatedLines count={count} />
      </div>

      <OrangeIndicator />

      <div className="absolute -right-[30%] top-1/2 -translate-y-1/2 size-8 rounded-full bg-gradient-to-br from-neutral-950 to-neutral-700 blur-sm z-0" />
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 size-6 rounded-full bg-gradient-to-br from-white to-neutral-500 z-10 shadow-md" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-neutral-900 from-5% to-transparent z-5" />
    </div>
  );
}
