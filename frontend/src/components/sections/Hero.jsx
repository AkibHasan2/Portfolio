import { motion, useReducedMotion } from "framer-motion";
import Stamp from "../ui/Stamp.jsx";
import MagneticButton from "../ui/MagneticButton.jsx";
import AmbientOrbs from "../ui/AmbientOrbs.jsx";

const ease = [0.22, 1, 0.36, 1];

const auditItems = [
  { label: "schema", value: ".NET · SQL Server", accent: false },
  { label: "domain", value: "card issuance & docs", accent: false },
  { label: "uptime", value: "production-grade", accent: false },
  { label: "signed off", value: "✓ approved", accent: true },
];

export default function Hero({ profile }) {
  const reduce = useReducedMotion();
  const name = profile?.fullName || profile?.FullName || "Your Name";
  const headline =
    profile?.headline || profile?.Headline || "Backend Engineer — Banking & Payments Systems";
  const summary =
    profile?.summary ||
    profile?.Summary ||
    "I build backend APIs and document-generation systems for card management platforms in production banking environments.";

  return (
    <section id="top" className="relative overflow-hidden bg-grid-fade px-6 pb-20 pt-16 md:pt-24">
      <AmbientOrbs />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-10 flex items-center justify-between rounded-t-md border border-rule bg-surface/90 px-4 py-3 font-mono text-[11px] uppercase tracking-widest text-muted backdrop-blur-sm"
          initial={reduce ? false : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8646C]" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber" />
            <span className="h-2.5 w-2.5 animate-pulse-dot rounded-full bg-verified" />
          </div>
          <span>record // portfolio-statement.sql</span>
          <span className="hidden md:inline">{profile?.location || profile?.Location || "—"}</span>
        </motion.div>

        <div className="grid gap-10 rounded-b-md border border-t-0 border-rule bg-surface/60 p-8 backdrop-blur-sm md:grid-cols-[1.6fr_1fr] md:p-12">
          <div>
            <motion.div
              className="mb-5 flex flex-wrap items-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
            >
              <Stamp tone="verified">Verified Engineer</Stamp>
              <span className="font-mono text-xs text-muted">
                status:{" "}
                <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-verified align-bottom animate-typeline">
                  online, accepting work
                </span>
              </span>
            </motion.div>

            <motion.h1
              className="text-balance font-display text-4xl font-bold leading-tight text-paper md:text-6xl"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
            >
              {name.split(" ").map((word, i) => (
                <span key={`${word}-${i}`} className="inline-block">
                  {i > 0 && "\u00A0"}
                  <motion.span
                    className="inline-block"
                    initial={reduce ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.22 + i * 0.08, ease }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="mt-4 max-w-xl text-balance font-display text-xl font-medium text-verified md:text-2xl"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
            >
              {headline}
            </motion.p>

            <motion.p
              className="mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5, ease }}
            >
              {summary}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.58, ease }}
            >
              <MagneticButton
                href="#projects"
                className="rounded-sm bg-verified px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-on-accent shadow-[0_0_24px_-6px_rgba(62,180,137,0.55)] transition-shadow hover:shadow-[0_0_32px_-4px_rgba(62,180,137,0.75)]"
              >
                View ledger of work
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="rounded-sm border border-rule px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-verified hover:text-verified"
              >
                Open a channel
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            className="rounded-sm border border-rule bg-surface2/90 p-5 font-mono text-xs text-muted shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
            initial={reduce ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease }}
            whileHover={reduce ? undefined : { borderColor: "rgba(62,180,137,0.4)" }}
          >
            <p className="mb-4 flex items-center gap-2 uppercase tracking-widest text-verified">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-verified opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-verified" />
              </span>
              Audit trail
            </p>
            <ul className="space-y-3">
              {auditItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  className={`flex justify-between border-b border-rule/60 pb-2 last:border-b-0 last:pb-0 ${
                    i === auditItems.length - 1 ? "" : ""
                  }`}
                  initial={reduce ? false : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.1, ease }}
                >
                  <span>{item.label}</span>
                  <span className={item.accent ? "text-verified" : "text-paper"}>{item.value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
