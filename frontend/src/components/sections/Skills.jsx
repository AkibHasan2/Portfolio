import { motion, useReducedMotion } from "framer-motion";
import EntryHeading from "../ui/EntryHeading.jsx";
import { Stagger, StaggerItem } from "../ui/Reveal.jsx";

function SkillBar({ proficiency }) {
  const reduce = useReducedMotion();
  const pct = (proficiency / 5) * 100;

  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-rule/80">
      <motion.div
        className="h-full rounded-full bg-verified"
        initial={reduce ? { width: `${pct}%` } : { width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />
    </div>
  );
}

export default function Skills({ skills = [] }) {
  const list = skills;
  const grouped = list.reduce((acc, s) => {
    const key = s.Category || s.category;
    acc[key] = acc[key] || [];
    acc[key].push(s);
    return acc;
  }, {});

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <EntryHeading
        code="02 — Skills"
        title="Technical skills"
        description="Production-proven tools I use day to day."
      />
      <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
        {Object.entries(grouped).map(([category, items]) => (
          <StaggerItem key={category}>
            <div className="panel-glow h-full rounded-xl border border-rule bg-surface p-6">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-verified">
                {category}
              </p>
              <ul className="space-y-4">
                {items.map((skill) => {
                  const name = skill.Name || skill.name;
                  const proficiency = skill.Proficiency || skill.proficiency || 3;
                  return (
                    <li key={name}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span className="font-medium text-paper">{name}</span>
                        <span className="font-mono text-xs text-muted">{proficiency}/5</span>
                      </div>
                      <SkillBar proficiency={proficiency} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
