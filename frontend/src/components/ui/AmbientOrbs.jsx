import { motion, useReducedMotion } from "framer-motion";

/** Soft ambient light — restrained for a professional look. */
export default function AmbientOrbs() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-verified/10 blur-3xl" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-verified/12 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 top-24 h-64 w-64 rounded-full bg-wire/8 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}
