"use client";

import { DemoWrapper } from "@/components/demo-wrapper";
import { Button } from "./components/button";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function ShortcutButton() {
  const [pressed, setPressed] = useState<"dashboard" | "docs" | "">("");

  const message = useMemo(() => {
    if (pressed === "dashboard") return "You pressed the dashboard button";
    if (pressed === "docs") return "You pressed the docs button";
    return "Press the shortcut";
  }, [pressed]);

  return (
    <DemoWrapper name="shortcut-button">
      <div className="grid place-items-center">
        <motion.div layout className="flex flex-col gap-4 items-center">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Button
              variant="primary"
              shortcut="D"
              onClick={() => {
                setPressed("dashboard");
              }}
            >
              Go to dashboard
            </Button>
            <Button
              variant="default"
              shortcut="L"
              onClick={() => {
                setPressed("docs");
              }}
            >
              View docs
            </Button>
          </div>

          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              transition={{
                duration: 0.4,
                bounce: 0,
              }}
              key={pressed}
            >
              {message}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </DemoWrapper>
  );
}
