"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionRevealProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};
export function SectionReveal({
  id,
  children,
  className = "",
}: SectionRevealProps) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.section
      id={id}
      initial={false}
      whileInView={
        reducedMotion ? undefined : { opacity: [0.86, 1], y: [12, 0] }
      }
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
