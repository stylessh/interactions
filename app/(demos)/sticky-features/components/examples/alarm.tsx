import { motion } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../card";

export function Alarm() {
  // should animate fires when the component is in view
  const { shouldAnimate } = useContext(AnimationContext);

  return (
    <motion.div
      className="aspect-[16/2.8] w-1/2 bg-background rounded-[99px] flex items-center justify-between pl-3 pr-2"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: {
          bounce: 0.4,
          type: "spring",
          duration: 0.5,
        },
      }}
      viewport={{ amount: 0.9, margin: "-150px 0px -400px 0px" }}
      aria-label="Alarm component with a time of 12:00 AM."
    >
      <motion.p
        className="inline-flex gap-x-1 text-sm md:text-base"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={shouldAnimate ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ delay: 0.2 }}
      >
        <span className="text-primary">12:00</span>
        <span className="">AM</span>
      </motion.p>

      <motion.div
        className="bg-green-500 text-background p-0.5 md:p-1.5 rounded-[99px]"
        initial={{ opacity: 0, scale: 0.4, filter: "blur(4px)" }}
        animate={
          shouldAnimate ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}
        }
        transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 md:size-5"
          animate={shouldAnimate ? { rotate: [0, 5, -5, 5, -5, 0] } : {}}
          transition={{ duration: 0.4, repeat: Infinity, delay: 1 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}
