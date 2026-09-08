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
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[70vh]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-verified/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="flex flex-wrap items-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          <span className="pro-badge">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Open to opportunities
          </span>
          <span className="text-sm text-muted">{location}</span>
        </motion.div>

        <motion.p
          className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-verified"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06, ease }}
        >
          {role}
        </motion.p>

        <motion.h1
          className="text-shine mt-4 max-w-4xl font-display text-6xl font-extrabold leading-[0.92] tracking-[-0.045em] md:text-8xl"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
        >
          {name}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-lg font-medium text-paper/90 md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease }}
        >
          {roleDetail}
        </motion.p>

        <motion.p
          className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24, ease }}
        >
          {subheadline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.32, ease }}
        >
          <a
            href="#projects"
            className="rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_0_0_1px_rgb(255_255_255/0.08)]"
          >
            View work
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Akib-Hasan-Resume.pdf`}
            download="Akib-Hasan-Resume.pdf"
            className="rounded-full border border-rule bg-surface/60 px-5 py-2.5 text-sm font-semibold text-paper backdrop-blur hover:border-verified/50"
          >
            Download PDF
          </a>
          {linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="px-2 text-sm text-muted hover:text-paper">
              LinkedIn
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="px-2 text-sm text-muted hover:text-paper">
              GitHub
            </a>
          )}
        </motion.div>

        <motion.div
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
        >
          {highlights.map((item) => (
            <div key={item.label} className="glass rounded-2xl px-4 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{item.label}</p>
              <p className="mt-2 text-sm font-semibold text-paper">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {openTo.length > 0 && (
          <p className="mt-6 text-sm text-muted">
            Open to {openTo.join(" · ")}
            <Link to="/work/utility-payments" className="ml-3 text-paper link-underline">
              Start with a case study
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
