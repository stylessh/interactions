"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Logo } from "./logo";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { cn } from "@/lib/utils";
import { useHotkeys } from "react-hotkeys-hook";
import { useClickOutside } from "@/hooks/use-click-outside";

const MotionLogo = motion.create(Logo);

type BadgeStatus = "idle" | "connected" | "warning" | "error" | "expanded";
type BadgeSize = "sm" | "md";

type BadgeConfig = Record<
  BadgeStatus,
  {
    pill: {};
    colors: Record<string, string>;
    logo?: Record<string, string>;
  }
>;

const badgeConfig: BadgeConfig = {
  idle: {
    pill: {},
    colors: {
      background: "var(--color-background-100)",
      color: "var(--color-foreground)",
      borderColor: "var(--color-neutral-600)",
    },
    logo: {
      color: "var(--color-foreground)",
    },
  },
  connected: {
    pill: {},
    colors: {
      background: "var(--color-green-900)",
      color: "var(--color-green-300)",
      borderColor: "var(--color-green-300)",
    },
    logo: {
      color: "var(--color-green-200)",
    },
  },
  warning: {
    pill: {},
    colors: {
      background: "var(--color-amber-900)",
      color: "var(--color-amber-200)",
      borderColor: "var(--color-amber-300)",
    },
    logo: {
      color: "var(--color-amber-200)",
    },
  },
  error: {
    pill: {},
    colors: {
      background: "var(--color-red-900)",
      color: "var(--color-red-300)",
      borderColor: "var(--color-red-300)",
    },
    logo: {
      color: "var(--color-red-300)",
    },
  },
  expanded: {
    pill: {},
    colors: {
      background: "var(--color-background-100)",
      color: "var(--color-foreground)",
      borderColor: "var(--color-neutral-600)",
    },
    logo: {
      color: "var(--color-foreground)",
    },
  },
};

const statusMessages = {
  connected: [
    ["3 rows saved", "Event triggered"],
    ["521 users online", "Data synced"],
    ["5 queries executed", "Cache updated"],
    ["2 tables modified", "Backup complete"],
  ],
  warning: [
    ["RLS not found", "Unknown SQL query"],
    ["Slow query detected", "Index missing"],
    ["High memory usage", "Connection timeout"],
    ["Deprecated API detected", "Schema drift detected"],
  ],
  error: [
    ["Runtime Error", "Fragile RLS policy"],
    ["Connection failed", "Database locked"],
    ["Syntax error", "Permission denied"],
    ["Timeout exceeded", "Resource exhausted"],
  ],
};

const getStatusInfo = (status: BadgeStatus) => {
  switch (status) {
    case "idle":
      return null;
    case "connected":
      return statusMessages.connected[
        Math.floor(Math.random() * statusMessages.connected.length)
      ];
    case "warning":
      return statusMessages.warning[
        Math.floor(Math.random() * statusMessages.warning.length)
      ];
    case "error":
      return statusMessages.error[
        Math.floor(Math.random() * statusMessages.error.length)
      ];
    case "expanded":
      return null;
  }
};

export function DevBadge() {
  const [size, setSize] = useState<BadgeSize>("sm");
  const [status, setStatus] = useState<BadgeStatus>("idle");
  const [autoCycle, setAutoCycle] = useState(false);

  const statusArray: BadgeStatus[] = [
    "idle",
    "connected",
    "warning",
    "error",
    "expanded",
  ];
  const sizeArray: BadgeSize[] = ["sm", "md"];

  useHotkeys("s", () => setStatus("connected"));
  useHotkeys("w", () => setStatus("warning"));
  useHotkeys("e", () => setStatus("error"));
  useHotkeys("i", () => setStatus("idle"));

  useHotkeys("x", () => setSize("sm"));
  useHotkeys("m", () => setSize("md"));
  useHotkeys("a", () => setAutoCycle((prev) => !prev));

  const badgeRef = useRef<HTMLDivElement>(null);

  useClickOutside(badgeRef, () => setSize("sm"));

  // Random status and size cycling (only when autoCycle is true)
  useEffect(() => {
    if (!autoCycle) return;

    const interval = setInterval(() => {
      const randomStatus =
        statusArray[Math.floor(Math.random() * statusArray.length)];
      const randomSize =
        sizeArray[Math.floor(Math.random() * sizeArray.length)];
      setStatus(randomStatus);
      setSize(randomSize);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [autoCycle]);

  const config = useMemo(() => {
    if (size === "sm") {
      return badgeConfig["idle"];
    }

    return badgeConfig[status];
  }, [status, size]);

  const handleBadgeChange = () => {
    if (status === "idle") {
      return;
    }

    setSize("md");
  };

  return (
    <MotionConfig transition={{ type: "spring", duration: 0.35, bounce: 0.2 }}>
      <motion.div
        onClick={handleBadgeChange}
        className={cn("relative", "p-1.5 border border-transparent")}
        layout
        style={{ ...config.colors, borderRadius: "9999px" }}
        ref={badgeRef}
      >
        <motion.div
          className={cn(
            "relative overflow-hidden",
            "flex items-center justify-center gap-3"
          )}
        >
          <MotionLogo
            layout
            className={cn(
              "size-8 transition-[filter] duration-200 ease-in-out"
            )}
            style={config.logo}
          />

          <AnimatePresence mode="popLayout">
            {status !== "idle" && size === "md" && (
              <motion.span
                key={status}
                layout
                data-slot="status"
                className="font-sans font-medium pr-1 select-none"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.15,
                }}
              >
                {getStatusInfo(status)?.[0]}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* top-right slot */}
        <AnimatePresence mode="sync">
          {status !== "idle" && size === "sm" && (
            <motion.div
              key={status}
              className={cn("absolute -top-2 -right-2 size-2.5 rounded-full", {
                "bg-green-500": status === "connected",
                "bg-amber-500": status === "warning",
                "bg-red-500": status === "error",
                "bg-blue-500": status === "expanded",
              })}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.6,
                type: "spring",
                bounce: 0.5,
              }}
            ></motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
}
