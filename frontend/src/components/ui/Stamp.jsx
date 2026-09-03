import { motion, useReducedMotion } from "framer-motion";

export default function Stamp({ children, tone = "verified", animate = true, className = "" }) {
  const reduce = useReducedMotion();
  const toneClasses = {
    verified: "border-verified text-verified",
    amber: "border-amber text-amber",
    wire: "border-wire text-wire",
  };

  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 rounded-sm border-2 px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest -rotate-6 ${
        toneClasses[tone]
      } ${className}`}
      initial={animate && !reduce ? { scale: 2.2, rotate: -14, opacity: 0 } : false}
      whileInView={animate && !reduce ? { scale: 1, rotate: -8, opacity: 1 } : undefined}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 380, damping: 16, delay: 0.2 }}
      whileHover={reduce ? undefined : { scale: 1.06, rotate: -4 }}
    >
      {children}
    </motion.span>
  );
}
