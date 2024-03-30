import { motion, MotionProps } from "framer-motion";
import { ComponentProps, useContext } from "react";
import { AnimationContext } from "../card";
import { cn } from "@/lib/utils";

export function Frame() {
  const { shouldAnimate } = useContext(AnimationContext);

  return (
    <motion.div className="w-1/2 max-h-42">
      <motion.div
        className="bg-[#1f6eb7] text-white w-max text-sm px-2"
        initial={{ opacity: 0 }}
        animate={shouldAnimate ? { opacity: 1 } : {}}
      >
        Frame
      </motion.div>
      <motion.div
        className="w-full aspect-[2/2] border border-[#1f6eb7] p-3"
        initial={{ opacity: 0 }}
        animate={shouldAnimate ? { opacity: 1 } : {}}
      >
        <motion.div
          className="w-full h-full bg-background p-3 flex flex-col"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <motion.div
              className="size-3 rounded-full bg-orange-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
            />

            <div className="flex items-center gap-x-2">
              <motion.div
                className="h-3 w-6 rounded-full bg-gray-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
              />
              <motion.div
                className="h-3 w-10 rounded-full bg-gray-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 }}
              />
              <motion.div
                className="size-3 rounded-full bg-gray-600"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 }}
              />
            </div>
          </div>

          <div className=" w-full relative pt-3">
            <motion.div
              className="w-full aspect-[16/2] bg-gray-500/10 rounded-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
            />

            <div className="grid grid-cols-[60%,1fr] gap-2 h-full md:h-[138px] mt-2">
              <motion.div
                className="bg-orange-500/10 rounded-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.85 }}
              />
              <motion.div
                className="bg-gray-700/10 rounded-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 }}
              />
            </div>

            <Cursor
              className="absolute left-2 md:left-6 top-[70px] md:top-24 text-primary"
              delay={1.4}
            />
            <Cursor
              className="absolute right-2 md:right-6 top-16 md:top-20 text-orange-500"
              invert
              delay={1.45}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Cursor(
  props: ComponentProps<"div"> &
    MotionProps & { invert?: boolean; delay: number }
) {
  const { shouldAnimate } = useContext(AnimationContext);

  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: props.delay }}
    >
      <svg
        width="17"
        height="18"
        fill="currentColor"
        viewBox="0 0 17 18"
        className={cn("size-6", props.invert && "transform -rotate-90")}
      >
        <motion.path
          fill="currentColor"
          d="M15.504 3.11l-2.968 12.296c-.27 1.114-1.772 1.309-2.316.299l-2.744-5.096-5.472-1.954C.916 8.266.892 6.737 1.967 6.315l11.864-4.662a1.25 1.25 0 011.673 1.457zm-7.937 7.532h0s0 0 0 0l.084-.236-.084.236z"
        ></motion.path>
      </svg>
    </motion.div>
  );
}
