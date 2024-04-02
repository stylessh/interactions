"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function MotionColumn({
  children,
  className,
  id,
  multiplier = 1,
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
  multiplier?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selector = `.scroll-wrapper-${id} .scroll-el-${id}`;
    const pageHeight = document.body.getBoundingClientRect().height;
    const columnHeight = document
      .querySelector(selector)!
      .getBoundingClientRect().height!;

    const node = gsap.to(selector, {
      y: `${
        pageHeight - Math.max(columnHeight, window.screen.height) * multiplier
      }px`,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: process.env.NODE_ENV === "development",
      },
    });

    return () => {
      node.kill();
    };
  }, [id, multiplier]);

  return (
    <section className={cn(`scroll-wrapper-${id}`, className)} ref={ref}>
      <div className={cn(`scroll-el-${id}`)}>{children}</div>
    </section>
  );
}
