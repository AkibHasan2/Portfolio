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

  const sections = [
    { title: "Problem", body: study.problem },
    { title: "Context", body: study.context },
    { title: "Solution", body: study.solution },
    { title: "Architecture", body: study.architecture },
    { title: "Challenges", body: null, list: study.challenges },
    { title: "Contribution", body: study.contribution },
    { title: "Outcome", body: study.outcome },
  ];

  return (
    <div className="grain relative min-h-screen bg-ink">
      <Navbar name={staticProfile.fullName.split(" ")[0]} homeHref={homePath} />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <Link to="/" className="text-sm font-medium text-muted hover:text-verified">
            ← Back to portfolio
          </Link>
          <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.18em] text-verified">{study.category}</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tightish text-paper md:text-4xl">
            {study.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {study.tech.map((t) => (
              <span key={t} className="rounded-md border border-rule bg-surface px-2 py-1 text-xs font-medium text-muted">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-xl font-bold text-paper">{s.title}</h2>
              {s.body && <p className="mt-3 text-base leading-relaxed text-muted">{s.body}</p>}
              {s.list && (
                <ul className="mt-3 space-y-2 text-base text-muted">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-verified">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {study.flow?.length > 0 && (
            <section>
              <h2 className="font-display text-xl font-bold text-paper">Key flow</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-base text-muted">
                {study.flow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>
          )}
        </div>

        <div className="mt-14 rounded-xl border border-rule bg-surface p-5 text-sm text-muted">
          Proprietary banking source code is not published. This write-up uses sanitized public names and generalized
          architecture only.
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to={`/demo/${study.slug}`}
            className="rounded-md bg-verified px-4 py-2 text-sm font-semibold text-on-accent"
          >
            See interactive demo
          </Link>
          <Link to="/#projects" className="rounded-md border border-rule px-4 py-2 text-sm font-semibold text-paper">
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
