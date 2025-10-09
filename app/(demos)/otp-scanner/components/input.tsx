"use client";

import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { cn } from "@/lib/utils";
import { OTPInput, SlotProps, REGEXP_ONLY_DIGITS } from "input-otp";

export function Input({
  disabled,
  onComplete,
}: {
  disabled: boolean;
  onComplete: (value: string) => void;
}) {
  return (
    <MotionConfig transition={{ type: "spring", duration: 0.4, bounce: 0 }}>
      <OTPInput
        minLength={6}
        maxLength={6}
        containerClassName={cn(
          "group flex items-center gap-x-2 has-disabled:opacity-30",
          {
            "pointer-events-none opacity-30": disabled,
          }
        )}
        onComplete={onComplete}
        render={({ slots }) => (
          <>
            {slots.map((slot, index) => (
              <Slot key={index} {...slot} />
            ))}
          </>
        )}
        autoFocus
        pattern={REGEXP_ONLY_DIGITS}
      />
    </MotionConfig>
  );
}

const Slot = (props: SlotProps) => {
  return (
    <div
      className={cn(
        "relative w-12 aspect-[3/3.5] text-[2rem]",
        "flex items-center justify-center",
        "transition-all duration-200",
        "bg-neutral-900 rounded-md",
        "border border-neutral-800",
        "shadow-[0_0_0_1px_rgba(0,0,0,0.1)]",
        "shadow-md",

        { "bg-neutral-900/50": props.isActive }
      )}
    >
      <div className="group-has-[input[data-input-otp-placeholder-shown]]:opacity-20">
        <AnimatePresence>
          {props.char ? (
            <motion.span
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              className="text-neutral-100"
            >
              {props.char}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="popLayout">
        {props.hasFakeCaret && <FakeDash />}
      </AnimatePresence>
    </div>
  );
};

const FakeDash = () => {
  return (
    <motion.div
      layoutId="fake-dash"
      transition={{ duration: 0.2, type: "spring", bounce: 0.2 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="grid w-full place-items-center absolute inset-0"
    >
      <div className="w-3 h-2 rounded-xs bg-neutral-300" />
    </motion.div>
  );
};
