"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Wraps server-rendered content in a subtle fade-and-rise entrance that plays
 * when the element scrolls into view. This is the seam that lets sections stay
 * Server Components: only the wrapper is client code; the children are passed
 * straight through. Honors prefers-reduced-motion by rendering statically.
 *
 * The reduced-motion preference is only applied after mount. The server can't
 * know the visitor's setting, so reading it during the first render would make
 * the client markup diverge from the server's and trip a hydration mismatch.
 * Instead the first client render always matches the server's animated markup,
 * then settles to a static element for visitors who ask for reduced motion.
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted && prefersReducedMotion) {
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
