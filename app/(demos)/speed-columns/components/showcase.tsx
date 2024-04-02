"use client";

import { getRandomGradient } from "@/lib/utils";
import { motion } from "framer-motion";

export function Showcase() {
  return (
    <section className="h-max">
      <div className="w-full h-20 bg-transparent" />

      <article className="">
        <h1 className="text-xl text-primary">Different speeds.</h1>
        <p className="mt-4 text-pretty">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Donec nec ipsum nec nisl lacinia posuere. Sed auctor
          vehicula nunc.
        </p>
      </article>

      <article className="my-20">
        <motion.div
          className="w-full aspect-[4/3] bg-foreground/5 relative rounded-md overflow-hidden"
          animate={{
            background: "rgb(249 115 22)",
            transition: {
              duration: 0.6,
              delay: 0.7,
              type: "spring",
              bounce: 0.4,
            },
          }}
          whileHover={{
            scale: 1.086,
            transition: {
              duration: 0.4,
              delay: 0,
              type: "spring",
              bounce: 0.4,
            },
          }}
        >
          <motion.h3
            className="text-7xl md:text-[8vw] text-background font-black absolute -bottom-[4vw] left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, filter: "blur(4px)", marginBottom: -5 }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              marginBottom: 0,
            }}
            transition={{
              duration: 0.2,
              delay: 1,
            }}
          >
            Motion
          </motion.h3>
        </motion.div>

        <p className="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Donec nec ipsum nec nisl lacinia posuere. Sed auctor
          vehicula nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla facilisi. Donec nec ipsum nec nisl lacinia posuere. Sed
          auctor vehicula nunc.
        </p>
      </article>

      <article className="mt-16">
        <h2 className="text-primary text-xl">Gallery</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Donec nec ipsum nec nisl lacinia.
        </p>

        <ul className="flex flex-col gap-y-4 mt-20">
          {new Array(6).fill(null).map((_, i) => {
            const [from, to] = getRandomGradient();

            return (
              <div
                key={i}
                className="aspect-[4/3] bg-gradient-to-br from-black to-background rounded-md"
                style={{
                  background: `linear-gradient(135deg, ${from}, ${to})`,
                }}
              />
            );
          })}
        </ul>
      </article>
    </section>
  );
}
