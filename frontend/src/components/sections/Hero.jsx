import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton.jsx";
import AmbientOrbs from "../ui/AmbientOrbs.jsx";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

const highlights = [
  { label: "Stack", value: ".NET 8 · SQL Server" },
  { label: "Domain", value: "Banking payments" },
  { label: "Focus", value: "CBS · Dual control" },
  { label: "Status", value: "Open to work", accent: true },
];

export default function Hero({ profile }) {
  const reduce = useReducedMotion();
  const name = profile?.fullName || profile?.FullName || "Akib Hasan";
  const role = profile?.roleLabel || profile?.headline || "Banking Payment Middleware Engineer";
  const subheadline =
    profile?.subheadline ||
    "I build .NET integration platforms that connect bank channels and branch operations to core banking and payment providers—with dual-control workflows, auditable transaction lifecycles, and recoverable settlement paths.";
  const location = profile?.location || profile?.Location || "Dhaka, Bangladesh";
  const githubUrl = profile?.githubUrl || profile?.GithubUrl;
  const linkedinUrl = profile?.linkedinUrl || profile?.LinkedinUrl;

  return (
    <section id="top" className="relative overflow-hidden bg-grid-fade px-6 pb-24 pt-20 md:pt-28">
      <AmbientOrbs />

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.55fr_1fr] md:items-center md:gap-16">
        <div>
          <motion.div
            className="mb-6 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="pro-badge">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Open to opportunities
            </span>
            <span className="text-sm text-muted">{location}</span>
          </motion.div>

          <motion.p
            className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.22em] text-verified"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease }}
          >
            .NET · Banking Integration
          </motion.p>

          <motion.h1
            className="text-balance font-display text-5xl font-extrabold tracking-tightish text-paper md:text-6xl lg:text-7xl"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
          >
            {name}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-balance font-display text-xl font-semibold leading-snug tracking-tightish text-paper/90 md:text-2xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease }}
          >
            {role}
          </motion.p>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease }}
          >
            <MagneticButton
              href="#projects"
              className="rounded-md bg-verified px-5 py-2.5 text-sm font-semibold text-on-accent shadow-sm transition-opacity hover:opacity-90"
            >
              View featured work
            </MagneticButton>
            <MagneticButton
              href="#engineering"
              className="rounded-md border border-rule bg-surface px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-verified hover:text-verified"
            >
              Engineering approach
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="rounded-md border border-rule px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-verified hover:text-verified"
            >
              Contact
            </MagneticButton>
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-verified"
              >
                LinkedIn
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-verified"
              >
                GitHub
              </a>
            )}
          </motion.div>
        </div>

        <motion.aside
          className="rounded-xl border border-rule bg-surface/80 p-6 shadow-sm backdrop-blur-sm md:p-7"
          initial={reduce ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">At a glance</p>
          <ul className="space-y-0">
            {highlights.map((item, i) => (
              <motion.li
                key={item.label}
                className="flex items-center justify-between gap-4 border-b border-rule py-3.5 last:border-b-0 last:pb-0 first:pt-0"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08, ease }}
              >
                <span className="text-sm text-muted">{item.label}</span>
                <span className={`text-right text-sm font-semibold ${item.accent ? "text-success" : "text-paper"}`}>
                  {item.value}
                </span>
              </motion.li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-muted">
            Open to backend / .NET roles centered on banking technology, payments, and enterprise integration.
          </p>
          <Link to="/work/utility-payments" className="mt-3 inline-block text-sm font-medium text-verified link-underline">
            Start with a case study →
          </Link>
        </motion.aside>
      </div>
    </section>
  );
}
