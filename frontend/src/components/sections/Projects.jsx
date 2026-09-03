import { motion, useReducedMotion } from "framer-motion";
import EntryHeading from "../ui/EntryHeading.jsx";
import Stamp from "../ui/Stamp.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function Projects({ projects = [] }) {
  const list = projects;
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <EntryHeading
        code="ENTRY // 03 — PROJECTS"
        title="Statement of work"
        description="Selected systems shipped to production."
      />

      <Reveal>
        <div className="overflow-hidden rounded-sm border border-rule">
          <div className="hidden grid-cols-[2fr_2.5fr_1.5fr_auto] gap-4 border-b border-rule bg-surface px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-muted md:grid">
            <span>Project</span>
            <span>Description</span>
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
                className={`row-glow grid grid-cols-1 gap-4 border-b border-rule/60 px-5 py-6 last:border-b-0 md:grid-cols-[2fr_2.5fr_1.5fr_auto] md:items-center ${
                  i % 2 === 0 ? "bg-surface/40" : "bg-surface2/40"
                }`}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div>
                  <p className="font-mono text-xs text-muted">#{String(i + 1).padStart(3, "0")}</p>
                  <h3 className="font-display text-lg font-semibold text-paper transition-colors group-hover:text-verified">
                    {title}
                  </h3>
                  <div className="mt-2 flex gap-4 font-mono text-xs">
                    {repo && (
                      <a href={repo} target="_blank" rel="noreferrer" className="link-underline text-wire hover:text-verified">
                        Repo →
                      </a>
                    )}
                    {live && (
                      <a href={live} target="_blank" rel="noreferrer" className="link-underline text-wire hover:text-verified">
                        Live →
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted">{summary}</p>

                <div className="flex flex-wrap gap-2">
                  {stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-rule px-2 py-1 font-mono text-[11px] text-muted transition-colors hover:border-verified/50 hover:text-paper"
                    >
                      {t.trim()}
                    </span>
                  ))}
                </div>

                <div>{featured ? <Stamp tone="verified">In production</Stamp> : <Stamp tone="wire">Archived</Stamp>}</div>
              </motion.div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
