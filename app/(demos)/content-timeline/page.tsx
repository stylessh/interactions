"use client";

import { DemoWrapper } from "@/components/demo-wrapper";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import useMeasure from "react-use-measure";
import { highlight } from "sugar-high";

// Define the checkpoints
const CHECKPOINTS = [
  { id: 1, value: 0, label: "Start" },
  { id: 2, value: 33, label: "First" },
  { id: 3, value: 66, label: "Second" },
  { id: 4, value: 100, label: "End" },
];

// Generate bars with double density between checkpoints
const generateBars = () => {
  const bars = [];
  let id = 0;

  // Loop through checkpoints to generate bars between them
  for (let i = 0; i < CHECKPOINTS.length - 1; i++) {
    // Add checkpoint bar
    bars.push({
      id: id++,
      position: CHECKPOINTS[i].value,
      isCheckpoint: true,
      width: 2, // Single width for checkpoint
    });

    const start = CHECKPOINTS[i].value;
    const end = CHECKPOINTS[i + 1].value;
    const segmentLength = end - start;

    // Calculate number of bars for this segment (double density)
    const barsInSegment = Math.round(segmentLength * 2); // 2 bars per percentage point

    // Generate bars between checkpoints
    for (let j = 1; j < barsInSegment; j++) {
      const position = start + (j * segmentLength) / barsInSegment;
      bars.push({
        id: id++,
        position,
        isCheckpoint: false,
        width: 1, // Normal width for non-checkpoint bars
      });
    }
  }

  // Add final checkpoint
  bars.push({
    id: id++,
    position: CHECKPOINTS[CHECKPOINTS.length - 1].value,
    isCheckpoint: true,
    width: 2, // Single width for checkpoint
  });

  return bars;
};

const BARS = generateBars();

export default function ContentTimeline() {
  const [sliderValue, setSliderValue] = useState(0);
  const [activeCheckpoint, setActiveCheckpoint] = useState(CHECKPOINTS[0]);
  const [isDragging, setIsDragging] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [cardRef, cardBounds] = useMeasure();

  // Update active checkpoint based on slider value
  useEffect(() => {
    const closest = CHECKPOINTS.reduce((prev, curr) => {
      return Math.abs(curr.value - sliderValue) <
        Math.abs(prev.value - sliderValue)
        ? curr
        : prev;
    });

    setActiveCheckpoint(closest);
  }, [sliderValue]);

  const updateSliderValue = useCallback((clientX: number) => {
    if (!timelineRef.current) return;

    const rect = timelineRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderValue(percentage);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      updateSliderValue(e.clientX);
    },
    [updateSliderValue]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      updateSliderValue(e.clientX);
    },
    [isDragging, updateSliderValue]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove as any);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove as any);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseDown, handleMouseMove, handleMouseUp]);

  const highlightedCode = useMemo(() => {
    return highlight(
      `<motion.div animate={{ x: 100 }} transition={{ duration: 1 }} />`
    );
  }, []);

  const content = useMemo(() => {
    switch (activeCheckpoint.id) {
      case 1:
        return null;
      case 2:
        return (
          <>
            <h2 className="text-2xl font-bold text-white">Intuitive API</h2>

            <p className="text-neutral-400">
              Animate faster with an easy-to-use powerful animation API.
            </p>

            <ul className="mt-4 flex text-xs gap-x-2">
              <li className="px-1.5 py-0.5 bg-purple-900 rounded-full text-purple-300">
                Per property parameters
              </li>
              <li className="px-1.5 py-0.5 bg-green-900 rounded-full text-green-300">
                Ease, duration, delay, repeat
              </li>
              <li className="px-1.5 py-0.5 bg-blue-900 rounded-full text-blue-300">
                Spring physics
              </li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-2xl font-bold text-white">Simple setup</h2>
            <p className="text-neutral-400">
              Use the same API for all your animations.
            </p>

            <div className="mt-4 bg-neutral-950 rounded-md p-2 w-full border border-neutral-800">
              <pre
                className="text-xs"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <span className="flex items-center gap-x-2">
              <motion.svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="text-green-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </motion.svg>

              <span className="text-white">Get motion in your app.</span>
            </span>
          </>
        );
      default:
        return null;
    }
  }, [activeCheckpoint, highlightedCode]);

  return (
    <DemoWrapper name="content-timeline">
      <div className="w-full max-w-[520px] mx-auto p-6 relative">
        <AnimatePresence>
          {content !== null && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, height: cardBounds.height }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                duration: 0.4,
                bounce: 0.1,
              }}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-md absolute left-1/2 -translate-x-1/2 bottom-[calc(55%+1rem)] overflow-hidden"
            >
              <div ref={cardRef} className="relative overflow-hidden p-4">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={`content-${activeCheckpoint.id}`}
                    initial={{ x: 10, opacity: 0, filter: "blur(6px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ x: -10, opacity: 0, filter: "blur(6px)" }}
                    transition={{
                      type: "spring",
                      duration: 0.5,
                      bounce: 0,
                    }}
                  >
                    {content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute w-full py-8 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {/* Hidden native slider for accessibility */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="sr-only"
            aria-label="Timeline slider"
          />

          {/* Custom timeline */}
          <motion.div
            ref={timelineRef}
            className="relative h-12 select-none"
            onMouseDown={handleMouseDown}
            style={{ cursor: isDragging ? "grabbing" : "pointer" }}
            animate={{
              scaleY: isDragging ? 1.5 : 1,
            }}
            transition={{
              duration: 0.2,
              bounce: 0,
            }}
          >
            {/* Background bars */}
            <div className="absolute inset-0 flex items-center justify-between">
              {BARS.map((bar) => (
                <div
                  key={bar.id}
                  className={`h-6 ${
                    bar.isCheckpoint
                      ? "bg-neutral-300 w-[2px]"
                      : "bg-neutral-800 w-px"
                  }`}
                  style={{
                    position: "absolute",
                    left: `${bar.position}%`,
                    transform: "translateX(-50%)",
                  }}
                />
              ))}
            </div>

            {/* Handler */}
            <AnimatePresence>
              {sliderValue !== 0 && (
                <motion.div
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 h-8 w-[2px] transition-[width] bg-red-500",
                    isDragging && "w-[4px]"
                  )}
                  animate={{
                    left: `${sliderValue}%`,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    type: "spring",
                    duration: 0.2,
                    bounce: 0,
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </DemoWrapper>
  );
}
