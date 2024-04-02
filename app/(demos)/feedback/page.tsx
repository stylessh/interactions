"use client";

import { DemoWrapper } from "@/components/demo-wrapper";
import { cn } from "@/lib/utils";
import { motion, animate, AnimatePresence } from "framer-motion";
import { useState } from "react";

const textAreaDuration = 0.6;

const variants = {
  emerge: {
    width: "380px",
    padding: "16px 16px",
    clip: "auto",
    whiteSpace: "normal",
    filter: "blur(0px)",

    transition: {
      duration: textAreaDuration,
      delay: 0.2,

      type: "spring",
      bounce: 0.4,
    },
  },
  show: {
    opacity: 1,

    transition: {
      duration: 0.2,
      delay: textAreaDuration,
    },
  },
};

export default function Feedback() {
  const [submitting, setSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitting(true);
    hideTextArea();
    showLoading();

    // simulate a delay
    setTimeout(() => {
      setSubmitting(false);
      setHasSubmitted(true);
    }, 2000);
  };

  const showLoading = () => {
    const spinner = document.querySelector("#spinner")!;

    animate(
      spinner,
      { x: -2, scale: 1, filter: "blur(0px)" },
      { duration: 0.2 }
    );

    animate(
      document.querySelector("#arrow-2")!,
      { x: 80, scale: 0 },
      { duration: 0.2 }
    );

    animate(
      document.querySelector("#arrow-1")!,
      { x: 40, scale: 1 },
      { duration: 0.2 }
    );

    // rotate spinner
    animate(
      spinner,
      { rotate: 360 },
      { duration: 1, repeat: Infinity, ease: "linear" }
    );
  };

  const hideTextArea = () => {
    animate(document.querySelector("#feedback-form")!, {
      width: "60px",
    });

    animate(document.querySelector("#textarea")!, {
      opacity: 0,
      width: 1,
      padding: "16px 0",
      clip: "rect(0,0,0,0)",
      whiteSpace: "nowrap",

      filter: "blur(4px)",
    });
  };

  const showArrow = () => {
    animate(
      document.querySelector("#arrow-2")!,
      { x: 40, scale: 0 },
      { duration: 0.2 }
    );

    animate(
      document.querySelector("#arrow-1")!,
      { x: 0, scale: 1 },
      { duration: 0.2 }
    );
  };

  const hideArrow = () => {
    animate(
      document.querySelector("#arrow-2")!,
      { x: 0, scale: 1 },
      { duration: 0.2 }
    );

    animate(
      document.querySelector("#arrow-1")!,
      { x: -40, scale: 0 },
      { duration: 0.2 }
    );
  };

  const showForm = !submitting && !hasSubmitted;

  return (
    <DemoWrapper name="sticky-features">
      <section className="max-w-screen-lg w-[90%] mx-auto flex-1 grid place-items-center">
        <motion.form
          id="feedback-form"
          className={cn(
            "bg-black rounded-md flex items-end max-w-md overflow-hidden justify-end"
          )}
          initial={{ width: "60px" }}
          animate={{ width: "380px" }}
          onSubmit={handleSubmit}
        >
          <AnimatePresence>
            <motion.textarea
              id="textarea"
              className="md:w-[380px] bg-transparent p-4 resize-none text-foreground placeholder:text-foreground/70 h-auto overflow-hidden outline-none origin-top max-h-[180px]"
              placeholder="Type your feedback here..."
              rows={1}
              value={feedback}
              onChange={(event) => setFeedback(event.target.value)}
              onInput={(event) => {
                // handling auto height on type
                event.currentTarget.style.height = "auto";

                animate(
                  event.currentTarget,
                  { height: event.currentTarget.scrollHeight },
                  { duration: 0.2 }
                );
              }}
              initial={{
                width: 1,
                padding: "16px 0",
                clip: "rect(0,0,0,0)",
                whiteSpace: "nowrap",
                filter: "blur(4px)",
                opacity: 0,
              }}
              animate={["emerge", "show"]}
              variants={variants}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSubmit(event as any);
                  return;
                }
              }}
              autoFocus
              required
              disabled={submitting || hasSubmitted}
            />
          </AnimatePresence>

          <motion.button
            className={cn(
              "p-4 overflow-hidden flex relative",
              submitting && "pointer-events-none"
            )}
            onHoverStart={showArrow}
            onHoverEnd={hideArrow}
            onFocus={showArrow}
            onFocusCapture={showArrow}
            id="submit"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute w-6 h-6 text-orange-500"
              initial={{ scale: 0, x: -80, filter: "blur(4px)" }}
              id="spinner"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </motion.svg>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute text-black fill-orange-500"
              initial={{ x: -40, scale: 0 }}
              id="arrow-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </motion.svg>

            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              id="arrow-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </motion.svg>

            <p className="sr-only">Send feedback</p>
          </motion.button>
        </motion.form>
      </section>
    </DemoWrapper>
  );
}
