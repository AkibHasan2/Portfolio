import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const highlights = [
  { label: "Stack", value: ".NET 8 · SQL Server" },
  { label: "Craft", value: "APIs · Integration" },
  { label: "Proof", value: "Banking payments" },
  { label: "Status", value: "Open to work" },
];

export default function Hero({ profile }) {
  const reduce = useReducedMotion();
  const name = profile?.fullName || profile?.FullName || "Akib Hasan";
  const role = profile?.roleLabel || profile?.headline || ".NET Backend & Integration Engineer";
  const roleDetail = profile?.roleDetail || "Payments middleware · Core banking APIs · Dual-control workflows";
  const subheadline =
    profile?.subheadline ||
    "I design ASP.NET Core middleware for controlled integrations—dual-control workflows, auditable lifecycles, and recoverable settlement paths.";
  const location = profile?.location || profile?.Location || "Dhaka, Bangladesh";
  const githubUrl = profile?.githubUrl || profile?.GithubUrl;
  const linkedinUrl = profile?.linkedinUrl || profile?.LinkedinUrl;
  const openTo = profile?.openTo || [];

  return (
    <section id="top" className="relative px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-5"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {location} · {role}
          </p>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-verified">Open to opportunities</span>
        </motion.div>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div>
            <motion.h1
              className="font-display text-6xl font-medium leading-[0.95] tracking-tight text-paper md:text-7xl lg:text-[5.4rem]"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
            >
              {name}
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl font-mono text-xs uppercase tracking-[0.16em] text-verified"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15, ease }}
            >
              {roleDetail}
            </motion.p>
            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease }}
            >
              {subheadline}
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.32, ease }}
            >
              <a href="#projects" className="bg-verified px-5 py-2.5 text-sm font-semibold text-on-accent">
                Read the work
              </a>
              <a href={`${import.meta.env.BASE_URL}Akib-Hasan-Resume.pdf`} download="Akib-Hasan-Resume.pdf" className="text-sm font-semibold text-paper link-underline">
                Download résumé
              </a>
              {linkedinUrl && (
                <a href={linkedinUrl} target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-paper">
                  LinkedIn
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-paper">
                  GitHub
                </a>
              )}
            </motion.div>
          </div>

          <motion.aside
            className="border-t border-rule pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Dossier</p>
            <ul className="mt-5">
              {highlights.map((item) => (
                <li key={item.label} className="flex items-baseline justify-between gap-4 border-b border-rule py-3.5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{item.label}</span>
                  <span className="text-right text-sm text-paper">{item.value}</span>
                </li>
              ))}
            </ul>
            {openTo.length > 0 && (
              <p className="mt-5 text-sm leading-relaxed text-muted">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper">Open to · </span>
                {openTo.join(" · ")}
              </p>
            )}
            <Link to="/work/utility-payments" className="mt-5 inline-block text-sm font-medium text-paper link-underline">
              Start with utility payments
            </Link>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
