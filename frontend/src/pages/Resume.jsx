import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import {
  staticProfile,
  staticSkills,
  staticExperience,
  resumeBullets,
  staticProjects,
} from "../data/static.js";

export default function Resume() {
  const homePath = import.meta.env.BASE_URL || "/";
  const profile = staticProfile;
  const skillsByCat = staticSkills.reduce((acc, s) => {
    const cat = s.Category || "Other";
    (acc[cat] ||= []).push(s.Name);
    return acc;
  }, {});

  return (
    <div className="grain relative min-h-screen bg-ink">
      <Navbar name={profile.fullName.split(" ")[0]} homeHref={homePath} />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <Link to="/" className="text-sm font-medium text-muted hover:text-verified">
                ← Portfolio
              </Link>
              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tightish text-paper md:text-4xl">
                {profile.fullName}
              </h1>
              <p className="mt-2 font-display text-lg font-semibold text-paper/90">{profile.roleLabel}</p>
              <p className="mt-1 text-sm text-muted">{profile.roleDetail}</p>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-md border border-rule px-3 py-2 text-xs font-semibold text-paper hover:border-verified print:hidden"
            >
              Print / Save PDF
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`} className="hover:text-verified">
              {profile.email}
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-verified">
              LinkedIn
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-verified">
              GitHub
            </a>
            <a href="https://AkibHasan2.github.io/Portfolio/" className="hover:text-verified">
              Portfolio
            </a>
          </div>
        </motion.div>

        <section className="mt-10">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-verified">Summary</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{profile.summary}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-verified">Open to</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {(profile.openTo || []).map((r) => (
              <li key={r} className="rounded-md border border-rule bg-surface px-2.5 py-1 text-xs font-medium text-paper">
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-verified">Experience</h2>
          {staticExperience.map((exp) => (
            <div key={exp.Company} className="mt-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-display text-base font-bold text-paper">
                  {exp.Role} · {exp.Company}
                </p>
                <p className="text-xs text-muted">2023 — Present</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{exp.Summary}</p>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-verified">Selected work</h2>
          <ul className="mt-4 space-y-3">
            {resumeBullets.map((b) => (
              <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-verified" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-verified">Featured systems</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {staticProjects.map((p) => (
              <li key={p.Id}>
                <Link to={`/work/${p.Slug}`} className="font-medium text-paper hover:text-verified">
                  {p.Title}
                </Link>
                <span className="text-muted"> — {p.Category}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-verified">Skills</h2>
          <div className="mt-4 space-y-3">
            {Object.entries(skillsByCat).map(([cat, names]) => (
              <div key={cat}>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">{cat}</p>
                <p className="mt-1 text-sm text-paper">{names.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-12 border-t border-rule pt-6 text-xs text-muted">
          Proprietary banking source is not published. Case studies use sanitized public names.
        </p>
      </main>
      <Footer profile={profile} />
    </div>
  );
}
