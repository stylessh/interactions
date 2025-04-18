"use client";

import { DemoWrapper } from "@/components/demo-wrapper";
import { Button } from "./components/button";
import { MotionConfig } from "motion/react";

const timeout = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default function ButtonWithFeedback() {
  const handleClick = async () => {
    await timeout(1000);

    if (Math.random() > 0.5) {
      throw new Error("Random error occurred");
    }

    return { data: "clicked", error: null };
  };

  return (
    <DemoWrapper name="button-with-feedback">
      <MotionConfig
        transition={{
          type: "spring",
          duration: 0.4,
          bounce: 0,
        }}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <Button
            successText="10 rows saved"
            errorText="Network error"
            onClick={handleClick}
          >
            Take action
          </Button>
        </div>
      </MotionConfig>
    </DemoWrapper>
  );
}
