import EntryHeading from "../ui/EntryHeading.jsx";
import Stamp from "../ui/Stamp.jsx";
import { Stagger, StaggerItem } from "../ui/Reveal.jsx";

export default function OtherProjects({ projects = [] }) {
  if (!projects.length) return null;

  return (
    <section id="other" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <EntryHeading
        code="07 — Other"
        title="Other projects"
        description="Supporting operations work that reinforces reliability mindset."
      />
      <Stagger className="grid gap-5 md:grid-cols-2" stagger={0.08}>
        {projects.map((p) => (
          <StaggerItem key={p.Id || p.Title}>
            <article className="panel-glow h-full rounded-xl border border-rule bg-surface p-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Stamp tone="amber" animate={false}>
                  {p.Badge || "Ops"}
                </Stamp>
                {p.Category && <span className="text-xs font-medium text-muted">{p.Category}</span>}
              </div>
              <h3 className="font-display text-lg font-bold tracking-tightish text-paper">{p.Title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.Summary}</p>
              {p.Highlights?.length > 0 && (
                <ul className="mt-4 space-y-1.5 text-sm text-muted">
                  {p.Highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-verified">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {(p.TechStack || "")
                  .split(",")
                  .filter(Boolean)
                  .map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-rule bg-ink/40 px-2 py-1 text-xs font-medium text-muted"
                    >
                      {t.trim()}
                    </span>
                  ))}
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
