"use client";

import { HTMLAttributes, SVGProps, useState } from "react";
import { AnimatePresence, motion, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

const DEFAULT_TRANSITION = {
  type: "spring" as const,
  duration: 0.25,
  bounce: 0.1,
};

export function Assistant() {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isExpanded) {
    return (
      <Card onClick={() => setIsExpanded(true)}>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-x-8">
            <Info />
            <div className="flex items-center gap-x-2">
              <Avatar />
              <OffButton />
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className="w-full max-w-[360px] rounded-3xl"
      onClick={() => setIsExpanded(false)}
    >
      <div className="flex flex-col justify-center gap-4">
        <div className="flex justify-between gap-x-8">
          <Info />
          <div className="flex items-center gap-x-2">
            <Avatar />
            <OffButton />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={DEFAULT_TRANSITION}
          className="flex justify-between gap-x-8 border-t border-neutral-800 pt-2 pr-1"
        >
          <p className="text-neutral-50 text-lg font-medium">
            Navigating to Billing
          </p>

          <Configuration className="size-6 text-neutral-400" />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <BorealGradient />
      </AnimatePresence>
    </Card>
  );
}

const Card = ({
  className,
  children,
  ...props
}: { className?: string } & MotionProps & HTMLAttributes<HTMLDivElement>) => {
  return (
    <motion.div
      layoutId="assistant-card"
      className={cn(
        "bg-neutral-900 border border-neutral-800 p-3 rounded-2xl relative",
        className
      )}
      transition={DEFAULT_TRANSITION}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const Info = () => {
  return (
    <div className="flex flex-col gap-y-0">
      <motion.h2
        layoutId="assistant-name"
        className="text-xl font-medium text-neutral-50"
        transition={DEFAULT_TRANSITION}
      >
        Alan
      </motion.h2>
      <motion.p
        layoutId="assistant-status"
        className="text-neutral-400"
        transition={DEFAULT_TRANSITION}
      >
        Waiting for response
      </motion.p>
    </div>
  );
};

const Avatar = () => {
  return (
    <motion.div
      layoutId="assistant-avatar"
      className="size-12 bg-linear-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-full"
      transition={DEFAULT_TRANSITION}
    />
  );
};

const OffButton = () => {
  return (
    <motion.button
      layoutId="assistant-off-button"
      className="size-12 bg-neutral-900 border border-neutral-700 rounded-full grid place-items-center"
      transition={DEFAULT_TRANSITION}
    >
      <PhoneOff className="size-6 text-neutral-50" />
    </motion.button>
  );
};

const BorealGradient = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "backOut", duration: 0.9, delay: 0.37 }}
      className="absolute inset-0 blur-[10px] -z-10 rounded-3xl overflow-hidden"
    >
      <div
        className="absolute -inset-full animate-[spin_4s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 180deg at 50.00% 50.00%, #FFB7B7 0deg, rgba(151, 71, 255, 0.50) 180deg, #48E3AB 270deg, #FFC4C4 360deg)",
        }}
      />
      <div className="absolute inset-0 bg-neutral-50/15" />
    </motion.div>
  );
};

const PhoneOff = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 38 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.96 22.04C16.7021 23.7816 18.7196 25.2239 20.9312 26.3088C21.2616 26.4606 21.6339 26.4952 21.9867 26.4071C22.3395 26.319 22.6517 26.1133 22.872 25.824L23.44 25.08C23.7381 24.6826 24.1246 24.36 24.5689 24.1378C25.0133 23.9157 25.5032 23.8 26 23.8H30.8C31.6487 23.8 32.4626 24.1371 33.0627 24.7373C33.6629 25.3374 34 26.1513 34 27V31.8C34 32.6487 33.6629 33.4626 33.0627 34.0627C32.4626 34.6629 31.6487 35 30.8 35C27.0179 35 23.2729 34.2551 19.7787 32.8078C16.2845 31.3605 13.1096 29.2391 10.4352 26.5648M34 3L2 35M6.416 21.5312C3.52961 16.9386 1.99886 11.6243 2 6.2C2 5.35131 2.33714 4.53737 2.93726 3.93726C3.53738 3.33714 4.35131 3 5.2 3H10C10.8487 3 11.6626 3.33714 12.2627 3.93726C12.8629 4.53737 13.2 5.35131 13.2 6.2V11C13.2 11.4968 13.0843 11.9867 12.8622 12.4311C12.64 12.8754 12.3174 13.2619 11.92 13.56L11.1712 14.1216C10.8775 14.3459 10.6704 14.6649 10.5853 15.0246C10.5001 15.3842 10.5421 15.7622 10.704 16.0944C10.8293 16.3491 10.9595 16.6014 11.0944 16.8512"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Configuration = (props: SVGProps<SVGSVGElement> & MotionProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ ...DEFAULT_TRANSITION, delay: 0.37, staggerChildren: 0.15 }}
      {...props}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="1"
        animate={{ y: [0, -0.5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="19"
        cy="12"
        r="1"
        animate={{ y: [0, -0.5, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
      <motion.circle
        cx="5"
        cy="12"
        r="1"
        animate={{ y: [0, -0.5, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />
    </motion.svg>
  );
};
