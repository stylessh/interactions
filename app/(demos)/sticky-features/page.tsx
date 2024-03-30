"use client";

import { useRef, useState } from "react";
import { Card } from "./components/card";
import { motion } from "framer-motion";
import { features } from "./components/features";
import { DemoWrapper } from "@/components/demo-wrapper";

export default function StickyFeatures() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const [activeFeature, setActiveFeature] = useState<number>(1);
  const [initial, setInitial] = useState<boolean>(true);

  const feature = features.find((feature) => feature.id === activeFeature)!;

  const infoChange = (featureId: number) => {
    if (initial) {
      setInitial(false);
    }

    setActiveFeature(featureId);
  };

  return (
    <DemoWrapper name="sticky-features">
      <section className="relative max-w-screen-lg w-[90%] mx-auto pb-[450px] grid md:grid-cols-2 gap-10">
        <article className="py-2 mb-8 md:mb-0 md:sticky top-32 h-max">
          <motion.h1
            className="text-primary text-2xl"
            ref={titleRef}
            key={`feature-title-${activeFeature}`}
            animate={
              !initial
                ? {
                    x: -6,
                    y: -4,
                    rotateY: -10,
                    opacity: 1,
                  }
                : { opacity: 1, rotateY: 0, z: 0 }
            }
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
          >
            {feature.title}
          </motion.h1>
          <motion.p
            className="mt-2 text-pretty"
            ref={descriptionRef}
            key={`feature-description-${activeFeature}`}
          >
            Every single detail matters. We have to make sure that every
            interaction is delightful and meaningful without sacrificing
            simplicity.
          </motion.p>
        </article>

        <ul className="flex flex-col gap-y-10 -mt-12">
          {features.map((feature) => (
            <Card
              key={feature.id}
              onViewportEnter={() => infoChange(feature.id)}
            >
              {feature.component}
            </Card>
          ))}
        </ul>
      </section>
    </DemoWrapper>
  );
}
