import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal.jsx";

export default function EntryHeading({ code, title, description }) {
  const reduce = useReducedMotion();

  return (
    <Reveal className="mb-10 flex flex-col gap-3 border-b border-rule pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.3em] text-verified"
          initial={reduce ? false : { opacity: 0, letterSpacing: "0.5em" }}
          whileInView={reduce ? undefined : { opacity: 1, letterSpacing: "0.3em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {code}
        </motion.p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-paper md:text-4xl">{title}</h2>
        {!reduce && (
          <motion.span
            className="mt-3 block h-px origin-left bg-gradient-to-r from-verified via-wire/40 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </div>
      {description && <p className="max-w-sm text-sm text-muted md:text-right">{description}</p>}
    </Reveal>
  );
}
