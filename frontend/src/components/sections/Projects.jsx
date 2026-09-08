import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectDemo from "./ProjectDemo.jsx";

export default function Projects({ projects = [] }) {
  const list = projects.filter((p) => p.Featured ?? p.featured);
  const [active, setActive] = useState(0);
  const selected = list[active] || list[0];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <p className="text-sm font-medium text-verified">Projects</p>
      <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-paper md:text-4xl">
        Selected work and real systems I built.
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        Select a project to open the demo on the right. Fictional data only — no bank systems.
      </p>

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_0.95fr]">
        <ol className="divide-y divide-rule border-y border-rule">
          {list.map((p, i) => {
            const title = p.Title || p.title;
            const summary = p.Summary || p.summary;
            const slug = p.Slug || p.slug;
            const category = p.Category || p.category;
            const num = String(i + 1).padStart(2, "0");
            const on = i === active;

            return (
              <li key={p.Id || title}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`block w-full py-6 text-left md:py-7 ${on ? "bg-verified/5" : ""}`}
                >
                  <div className="flex gap-4 md:gap-6">
                    <span className="font-mono text-sm font-semibold text-verified">{num}</span>
                    <div>
                      <h3 className={`font-display text-lg font-bold md:text-xl ${on ? "text-verified" : "text-paper"}`}>
                        {title}
                      </h3>
                      <p className="mt-1 text-xs text-muted">{category}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>
                      <div className="mt-3 flex gap-4 text-sm font-semibold">
                        <span className="text-verified">{on ? "Demo open" : "See demo"}</span>
                        {slug && (
                          <Link to={`/work/${slug}`} className="text-muted hover:text-paper" onClick={(e) => e.stopPropagation()}>
                            Case study
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="lg:sticky lg:top-24">
          {selected && <ProjectDemo key={selected.Id || selected.Slug} project={selected} />}
        </div>
      </div>
    </section>
  );
}
