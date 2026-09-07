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

const resumePdfHref = `${import.meta.env.BASE_URL}Akib-Hasan-Resume.pdf`;

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
          <div className="flex flex-wrap items-start justify-between gap-4 print:hidden">
            <div>
              <Link to="/" className="text-sm font-medium text-muted hover:text-verified">
                ← Portfolio
              </Link>
              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tightish text-paper md:text-4xl">
                Resume
              </h1>
              <p className="mt-2 max-w-md text-sm text-muted">
                Standard one–two page CV for recruiters. Download the PDF for applications and ATS uploads.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={resumePdfHref}
                download="Akib-Hasan-Resume.pdf"
                className="rounded-md bg-verified px-4 py-2.5 text-sm font-semibold text-on-accent shadow-sm hover:opacity-90"
              >
                Download PDF
              </a>
              <a
                href={resumePdfHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-rule px-4 py-2.5 text-sm font-semibold text-paper hover:border-verified"
              >
                Open PDF
              </a>
            </div>
          </div>
        </motion.div>

        {/* On-page preview mirrors the PDF content */}
        <article className="mt-10 rounded-xl border border-rule bg-surface p-6 md:p-8">
          <header className="border-b border-rule pb-5 text-center">
            <h2 className="font-display text-2xl font-extrabold text-paper">{profile.fullName}</h2>
            <p className="mt-1 font-display text-base font-semibold text-verified">{profile.roleLabel}</p>
            <p className="mt-1 text-sm text-muted">{profile.roleDetail}</p>
            <p className="mt-3 text-xs text-muted">
              {profile.location} ·{" "}
              <a href={`mailto:${profile.email}`} className="hover:text-verified">
                {profile.email}
              </a>{" "}
              ·{" "}
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-verified">
                LinkedIn
              </a>{" "}
              ·{" "}
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-verified">
                GitHub
              </a>
            </p>
          </header>

          <section className="mt-6">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-verified">
              Professional summary
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{profile.summary}</p>
          </section>

          <section className="mt-7">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-verified">Experience</h3>
            {staticExperience.map((exp) => (
              <div key={exp.Company} className="mt-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-display text-sm font-bold text-paper">
                    {exp.Role} | {exp.Company}
                  </p>
                  <p className="text-xs text-muted">
                    {exp.StartDate
                      ? `${new Date(exp.StartDate).toLocaleString("en", { month: "short", year: "numeric" })} – Present`
                      : "Present"}
                  </p>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{exp.Summary}</p>
                <ul className="mt-3 space-y-2">
                  {resumeBullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="text-verified">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mt-7">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-verified">Key projects</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {staticProjects.map((p) => (
                <li key={p.Id} className="flex gap-2">
                  <span className="text-verified">•</span>
                  <span>
                    <Link to={`/work/${p.Slug}`} className="font-medium text-paper hover:text-verified">
                      {p.Title}
                    </Link>
                    {" — "}
                    {(p.Highlights || []).slice(0, 2).join("; ")}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-7">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-verified">
              Technical skills
            </h3>
            <div className="mt-3 space-y-2">
              {Object.entries(skillsByCat).map(([cat, names]) => (
                <p key={cat} className="text-sm text-muted">
                  <span className="font-semibold text-paper">{cat}: </span>
                  {names.join(" · ")}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-verified">Target roles</h3>
            <p className="mt-2 text-sm text-muted">{(profile.openTo || []).join(" · ")}</p>
          </section>
        </article>

        <div className="mt-8 flex flex-wrap gap-3 print:hidden">
          <a
            href={resumePdfHref}
            download="Akib-Hasan-Resume.pdf"
            className="rounded-md bg-verified px-4 py-2.5 text-sm font-semibold text-on-accent"
          >
            Download PDF resume
          </a>
          <Link to="/#contact" className="rounded-md border border-rule px-4 py-2.5 text-sm font-semibold text-paper">
            Contact
          </Link>
        </div>
      </main>
      <Footer profile={profile} />
    </div>
  );
}
