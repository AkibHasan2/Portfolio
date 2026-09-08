import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import { caseStudies, staticProfile } from "../data/static.js";

export default function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies[slug];
  const homePath = import.meta.env.BASE_URL || "/";

  if (!study) {
    return (
      <div className="grain min-h-screen bg-ink px-6 py-24 text-center">
        <h1 className="font-display text-2xl font-bold text-paper">Case study not found</h1>
        <Link to="/" className="mt-4 inline-block text-verified link-underline">
          Back to home
        </Link>
      </div>
    );
  }

  const narrative = [
    { title: "Problem", body: study.problem },
    { title: "Context", body: study.context },
    { title: "Solution", body: study.solution },
    { title: "Architecture", body: study.architecture },
  ];

  return (
    <div className="grain relative min-h-screen bg-ink">
      <Navbar name={staticProfile.fullName.split(" ")[0]} homeHref={homePath} />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <Link to="/#projects" className="text-sm font-medium text-muted hover:text-verified">
            ← Featured work
          </Link>
          <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.18em] text-verified">{study.category}</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.04em] text-paper md:text-5xl">
            {study.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {study.tech.map((t) => (
              <span key={t} className="rounded-md border border-rule bg-surface px-2.5 py-1 text-xs font-medium text-muted">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {study.decisions?.length > 0 && (
          <section className="mt-12 rounded-xl border border-rule bg-surface p-5 md:p-6">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-verified">
              Design decisions
            </h2>
            <ul className="mt-4 space-y-4">
              {study.decisions.map((d) => (
                <li key={d.title} className="border-t border-rule pt-4 first:border-t-0 first:pt-0">
                  <p className="font-display text-base font-bold text-paper">{d.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{d.detail}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-12 space-y-11">
          {narrative.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-xl font-bold text-paper">{s.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted">{s.body}</p>
            </section>
          ))}

          {study.flow?.length > 0 && (
            <section>
              <h2 className="font-display text-xl font-bold text-paper">Key flow</h2>
              <ol className="mt-4 space-y-0 border-l border-rule pl-5">
                {study.flow.map((step, i) => (
                  <li key={step} className="relative pb-4 text-base text-muted last:pb-0">
                    <span className="absolute -left-[1.4rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-rule bg-ink font-mono text-[9px] text-verified">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>
          )}

          {study.challenges?.length > 0 && (
            <section>
              <h2 className="font-display text-xl font-bold text-paper">Challenges</h2>
              <ul className="mt-3 space-y-2.5 text-base text-muted">
                {study.challenges.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-verified" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="font-display text-xl font-bold text-paper">Contribution</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">{study.contribution}</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-paper">Outcome</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">{study.outcome}</p>
          </section>
        </div>

        <div className="mt-14 border-t border-rule pt-6 text-sm text-muted">
          Proprietary banking source is not published. Names and architecture are sanitized for public use.
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/#projects" className="rounded-md bg-verified px-4 py-2 text-sm font-semibold text-on-accent">
            More featured work
          </Link>
          <Link to="/#contact" className="rounded-md border border-rule px-4 py-2 text-sm font-semibold text-paper">
            Contact
          </Link>
        </div>
      </main>
      <Footer profile={staticProfile} />
    </div>
  );
}
