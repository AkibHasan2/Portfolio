import { motion, useReducedMotion } from "framer-motion";
import EntryHeading from "../ui/EntryHeading.jsx";

function formatRange(start, end) {
  const opts = { year: "numeric", month: "short" };
  const s = start ? new Date(start).toLocaleDateString("en-US", opts) : "";
  const e = end ? new Date(end).toLocaleDateString("en-US", opts) : "Present";
  return `${s} — ${e}`;
}

export default function Experience({ experience = [] }) {
  const list = experience;
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <EntryHeading code="ENTRY // 04 — EXPERIENCE" title="Posting history" description="Roles, in order." />
      <ol className="relative space-y-10 border-l border-rule pl-8">
        {list.map((e, i) => {
          const company = e.Company || e.company;
          const role = e.Role || e.role;
          const start = e.StartDate || e.startDate;
          const end = e.EndDate || e.endDate;
          const summary = e.Summary || e.summary;

          return (
            <motion.li
              key={e.Id || e.id || i}
              className="relative"
              initial={reduce ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-verified"
                initial={reduce ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.15 + i * 0.1 }}
                whileHover={reduce ? undefined : { scale: 1.4 }}
              />
              <span
                className="pointer-events-none absolute -left-[calc(2rem+9px)] top-0.5 h-4 w-4 rounded-full bg-verified/30 animate-pulse-dot"
                aria-hidden
              />
              <p className="font-mono text-xs uppercase tracking-widest text-muted">{formatRange(start, end)}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-paper">
                {role} <span className="text-muted">· {company}</span>
              </h3>
              {summary && <p className="mt-2 max-w-2xl text-sm text-muted">{summary}</p>}
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
