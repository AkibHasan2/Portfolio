import { motion, useReducedMotion } from "framer-motion";

/** Status chip — clean professional badge (no novelty stamp rotation). */
export default function Stamp({ children, tone = "verified", animate = true, className = "" }) {
  const reduce = useReducedMotion();
  const toneClasses = {
    verified: "border-success/40 bg-success/10 text-success",
    amber: "border-amber/40 bg-amber/10 text-amber",
    wire: "border-rule bg-surface2 text-muted",
  };

  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-semibold tracking-wide ${
        toneClasses[tone]
      } ${className}`}
      initial={animate && !reduce ? { opacity: 0, y: 4 } : false}
      whileInView={animate && !reduce ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.1 }}
    >
      {children}
    </motion.span>
  );
}
