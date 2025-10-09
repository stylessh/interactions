"use client";
import { cn } from "@/lib/utils";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

interface ButtonProps {
  successText: string;
  errorText: string;
  children: React.ReactNode;
  onClick?: () => Promise<{ data: any; error: any }>;
}

type ButtonStatus = "default" | "success" | "error" | "loading";

const tryCatch = async (fn: () => Promise<{ data: any; error: any }>) => {
  try {
    return { data: await fn(), error: null };
  } catch (error) {
    return { data: null, error };
  }
};

const buttonVariants = {
  default: {
    opacity: 1,
    filter: "blur(0px)",

    transition: {
      type: "spring" as const,
      duration: 0.4,
    },
  },
  hide: {
    opacity: 0,
    filter: "blur(2px)",

    transition: {
      type: "spring" as const,
      duration: 0.4,
    },
  },
};

const feedbackVariants = {
  hide: {
    y: 0,
    opacity: 0,
  },
  default: {
    opacity: 1,
    y: -18,
  },
};

export function Button({
  successText,
  errorText,
  children,
  onClick,
}: ButtonProps) {
  const [status, setStatus] = useState<ButtonStatus>("default");

  // after feedback set to default in 3s
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (status === "success" || status === "error") {
      timeoutId = setTimeout(() => {
        setStatus("default");
      }, 1500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [status]);

  const handleClick = async () => {
    if (!onClick) return;

    setStatus("loading");
    const { data, error } = await tryCatch(onClick);

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
    }
  };

  const Response = useMemo(() => {
    switch (status) {
      case "success":
        return successText;
      case "error":
        return errorText;
      default:
        return null;
    }
  }, [status, successText, errorText]);

  return (
    <div className="relative">
      <AnimatePresence>
        {Response ? (
          <motion.div
            className={cn(
              "w-[90%] absolute inset-x-0 py-0.5 rounded-t-md text-xs mx-auto px-1.5 inline-flex items-center gap-1",
              {
                "bg-green-700 text-white": status === "success",
                "bg-red-600 text-white": status === "error",
              }
            )}
            variants={feedbackVariants}
            initial="hide"
            animate="default"
            exit="hide"
          >
            {status === "success" ? <CheckmarkIcon /> : null}
            {status === "error" ? <WarningIcon /> : null}

            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                type: "spring",
                duration: 0.4,
                delay: 0.18,
              }}
            >
              {Response}
            </motion.span>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {status === "success" || status === "error" ? (
          <motion.div
            className="absolute -top-2 h-4 z-5 bg-linear-to-t from-neutral-900/50 to-transparent w-[90%] mx-auto inset-x-0 blur-xs"
            variants={buttonVariants}
            initial="hide"
            animate="default"
            exit="hide"
          />
        ) : null}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        className={cn(
          "bg-neutral-900 border border-neutral-800 rounded-xl px-10 py-2.5 text-lg ease-in-out transition-colors relative z-10",
          status === "default" && "hover:bg-neutral-800/50"
        )}
        disabled={status === "loading"}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {status === "loading" ? <LoadingSpinner /> : null}

          <motion.div
            variants={buttonVariants}
            initial="default"
            animate={status === "loading" ? ["hide"] : ["default"]}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

const LoadingSpinner = () => {
  return (
    <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="size-4 animate-spin"
        variants={buttonVariants}
        initial="hide"
        animate="default"
        exit="hide"
      >
        <path d="M12 2v4M16.2 7.8l2.9-2.9M18 12h4M16.2 16.2l2.9 2.9M12 18v4M4.9 19.1l2.9-2.9M2 12h4M4.9 4.9l2.9 2.9"></path>
      </motion.svg>
    </motion.div>
  );
};

const CheckmarkIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="size-3"
      viewBox="0 0 24 24"
    >
      <motion.path
        d="M21.801 10A10 10 0 1 1 17 3.335"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          type: "spring",
          duration: 0.4,
          bounce: 0.1,
          delay: 0.05,
        }}
      ></motion.path>

      <motion.path
        d="m9 11 3 3L22 4"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          type: "spring",
          duration: 0.5,
          delay: 0.1,
        }}
      ></motion.path>
    </motion.svg>
  );
};

const WarningIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="size-3"
      viewBox="0 0 24 24"
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          type: "spring",
          duration: 0.4,
          bounce: 0.1,
          delay: 0.05,
        }}
      ></motion.circle>
      <motion.path
        d="M12 8v4M12 16h.01"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          type: "spring",
          duration: 0.4,
          bounce: 0.1,
          delay: 0.15,
        }}
      ></motion.path>
    </motion.svg>
  );
};
