"use client";

import { DemoWrapper } from "@/components/demo-wrapper";
import { Input } from "./components/input";
import { useRef, useState } from "react";
import { cn, timeout } from "@/lib/utils";
import { Scanner } from "./components/scanner";
import { AnimatePresence, motion } from "motion/react";
import { Success } from "./components/success";

const STATUS_TEXTS = {
  default: "We've sent you a code to verify your account.",
  verifying: "Verifying your account...",
  verified: "Account verified successfully.",
};

export default function OTPScanner() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<keyof typeof STATUS_TEXTS>("default");

  const onComplete = (value: string) => {
    formRef.current?.submit();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("verifying");
    await timeout(5000);

    setStatus("verified");
  };

  return (
    <DemoWrapper name="otp-scanner">
      <motion.form
        className="flex flex-col justify-center items-center h-full gap-8"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <AnimatePresence mode="popLayout">
            {status === "verifying" && <Scanner />}
            {status === "verified" && <Success />}
          </AnimatePresence>

          <Input
            disabled={status === "verifying" || status === "verified"}
            onComplete={onComplete}
          />
        </div>

        <AnimatePresence initial={false} mode="wait">
          <motion.p
            key={status}
            className={cn(
              "text-xs text-neutral-500",
              status === "verified" && "text-white"
            )}
            initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -5, filter: "blur(4px)" }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            {STATUS_TEXTS[status]}
          </motion.p>
        </AnimatePresence>
      </motion.form>
    </DemoWrapper>
  );
}
