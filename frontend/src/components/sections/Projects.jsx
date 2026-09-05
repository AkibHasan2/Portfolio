import { motion, useReducedMotion } from "framer-motion";
import EntryHeading from "../ui/EntryHeading.jsx";
import Stamp from "../ui/Stamp.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function Projects({ projects = [] }) {
  const list = projects;
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <EntryHeading
        code="03 — Work"
        title="Selected work"
        description="Systems designed and shipped to production."
      />

      <Reveal>
        <div className="overflow-hidden rounded-xl border border-rule">
          <div className="hidden grid-cols-[2fr_2.5fr_1.5fr_auto] gap-4 border-b border-rule bg-surface px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted md:grid">
            <span>Project</span>
            <span>Summary</span>
            <span>Stack</span>
            <span>Status</span>
          </div>

          {list.map((p, i) => {
            const title = p.Title || p.title;
            const summary = p.Summary || p.summary;
            const stack = (p.TechStack || p.techStack || "").split(",").filter(Boolean);
            const featured = p.Featured ?? p.featured;
            const repo = p.RepoUrl || p.repoUrl;
            const live = p.LiveUrl || p.liveUrl;

            return (
              <motion.div
                key={p.Id || p.id || title}
                className={`row-glow grid grid-cols-1 gap-4 border-b border-rule px-6 py-7 last:border-b-0 md:grid-cols-[2fr_2.5fr_1.5fr_auto] md:items-center ${
                  i % 2 === 0 ? "bg-surface/50" : "bg-surface2/40"
                }`}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <div>
                  <p className="mb-1 font-mono text-[11px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-lg font-bold tracking-tightish text-paper">
                    {title}
                  </h3>
                  <div className="mt-2 flex gap-4 text-sm font-medium">
                    {repo && (
                      <a href={repo} target="_blank" rel="noreferrer" className="link-underline text-verified">
                        Repository
                      </a>
                    )}
                    {live && (
                      <a href={live} target="_blank" rel="noreferrer" className="link-underline text-verified">
                        Live demo
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted">{summary}</p>

                <div className="flex flex-wrap gap-2">
                  {stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-rule bg-ink/40 px-2 py-1 text-xs font-medium text-muted"
                    >
                      {t.trim()}
                    </span>
                  ))}
                </div>

                <div>
                  {featured ? <Stamp tone="verified">Production</Stamp> : <Stamp tone="wire">Archive</Stamp>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
