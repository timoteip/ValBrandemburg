"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Wraps server-rendered content in a subtle fade-and-rise entrance that plays
 * when the element scrolls into view. This is the seam that lets sections stay
 * Server Components: only the wrapper is client code; the children are passed
 * straight through. Honors prefers-reduced-motion by rendering statically.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
