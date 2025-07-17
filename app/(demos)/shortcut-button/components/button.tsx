"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useCallback, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export function Button({
  children,
  variant = "default",
  shortcut,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  variant?: "default" | "primary";
  shortcut: string;
  className?: string;
  onClick?: () => void;
} & MotionProps) {
  const [pressed, setPressed] = useState(false);
  const [hotKeyPressed, setHotKeyPressed] = useState(false);

  useHotkeys(
    shortcut,
    () => {
      setPressed(true);
      setHotKeyPressed(true);
      handleClick();
    },
    [],
    {
      keydown: true,
    }
  );

  const handleClick = useCallback(() => {
    setTimeout(() => {
      setPressed(false);
      setHotKeyPressed(false);
      onClick?.();
    }, 150);
  }, [onClick]);

  return (
    <motion.button
      className={cn(
        "w-fit",
        "pl-4 pr-3 py-1.5 rounded-md",
        "font-medium tracking-tight",
        "shadow-[inset_0_-3px_0px_0px_var(--tw-shadow-color)]",
        "flex items-center gap-3.5",

        "ring-0 outline-none focus-visible:outline-white",

        variant === "default" &&
          "bg-neutral-800 border border-neutral-700 shadow-neutral-700/50 ",
        variant === "primary" &&
          "bg-green-700 border border-green-500 shadow-green-500/50 text-white",
        props.className
      )}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === shortcut || e.key === "Enter" || e.key === " ") {
          setPressed(true);
          handleClick();
        }
      }}
      animate={{
        scale: pressed ? 0.98 : 1,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        duration: 0.32,
        bounce: 0.1,
      }}
      {...props}
    >
      {children}

      {shortcut && (
        <motion.span
          className={cn(
            "text-xs size-5 rounded-md flex items-center justify-center font-bold",
            variant === "primary" && "bg-green-500/50",
            variant === "default" && "bg-neutral-700/50"
          )}
          animate={{
            scale: hotKeyPressed ? 1.15 : 1,
          }}
          transition={{
            type: "spring",
            duration: 0.4,
            bounce: 0.5,
          }}
        >
          {shortcut}
        </motion.span>
      )}
    </motion.button>
  );
}
