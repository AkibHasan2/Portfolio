import { motion, useReducedMotion } from "framer-motion";
import EntryHeading from "../ui/EntryHeading.jsx";
import { Stagger, StaggerItem } from "../ui/Reveal.jsx";

function SkillBar({ proficiency }) {
  const reduce = useReducedMotion();
  const pct = (proficiency / 5) * 100;

  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-rule">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-verified to-wire"
        initial={reduce ? { width: `${pct}%` } : { width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
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
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <EntryHeading
        code="ENTRY // 02 — SKILLS"
        title="Line items"
        description="Tools carried at production-level proficiency."
      />
      <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
        {Object.entries(grouped).map(([category, items]) => (
          <StaggerItem key={category}>
            <div className="panel-glow h-full rounded-sm border border-rule bg-surface p-5">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-verified">{category}</p>
              <ul className="space-y-3">
                {items.map((skill) => {
                  const name = skill.Name || skill.name;
                  const proficiency = skill.Proficiency || skill.proficiency || 3;
                  return (
                    <li key={name}>
                      <div className="mb-1 flex justify-between text-sm text-paper">
                        <span>{name}</span>
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
