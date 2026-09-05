import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal.jsx";

export default function EntryHeading({ code, title, description }) {
  const reduce = useReducedMotion();

  return (
    <Reveal className="mb-10 flex flex-col gap-3 border-b border-rule pb-7 md:flex-row md:items-end md:justify-between">
      <div>
        <motion.p
          className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-verified"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {code}
        </motion.p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tightish text-paper md:text-4xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-sm text-sm leading-relaxed text-muted md:text-right">{description}</p>
      )}
    </Reveal>
  );
}
