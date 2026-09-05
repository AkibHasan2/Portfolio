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
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <EntryHeading
        code="04 — Experience"
        title="Experience"
        description="Roles and impact, chronologically."
      />
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
              initial={reduce ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-verified bg-ink" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {formatRange(start, end)}
              </p>
              <h3 className="mt-1.5 font-display text-xl font-bold tracking-tightish text-paper">
                {role}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-verified">{company}</p>
              {summary && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{summary}</p>}
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
