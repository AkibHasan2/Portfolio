import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * App-chrome wrapper for sanitized interactive demos.
 * Looks like a product UI; data is fictional.
 */
export default function DemoShell({
  title,
  subtitle,
  pages,
  activePage,
  onNavigate,
  caseStudySlug,
  role,
  roles,
  onRoleChange,
  children,
}) {
  const homePath = import.meta.env.BASE_URL || "/";

  return (
    <div className="grain flex min-h-screen flex-col bg-ink text-paper">
      <div className="border-b border-amber/40 bg-amber/10 px-4 py-2 text-center text-xs font-medium text-amber md:text-sm">
        Interactive demo · fictional accounts &amp; amounts · not connected to any bank
      </div>

      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-rule bg-surface px-4 py-3">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-verified">Product demo</p>
          <h1 className="truncate font-display text-lg font-bold tracking-tightish md:text-xl">{title}</h1>
          {subtitle && <p className="truncate text-xs text-muted">{subtitle}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {roles?.length > 0 && (
            <label className="flex items-center gap-2 text-xs text-muted">
              Role
              <select
                value={role}
                onChange={(e) => onRoleChange?.(e.target.value)}
                className="rounded-md border border-rule bg-ink px-2 py-1.5 text-xs font-medium text-paper"
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>
          )}
          <Link
            to={`/work/${caseStudySlug}`}
            className="rounded-md border border-rule px-3 py-1.5 text-xs font-semibold text-paper hover:border-verified"
          >
            Case study
          </Link>
          <Link
            to={homePath}
            className="rounded-md bg-verified px-3 py-1.5 text-xs font-semibold text-on-accent"
          >
            Exit demo
          </Link>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col md:flex-row">
        <nav className="flex shrink-0 gap-1 overflow-x-auto border-b border-rule bg-surface p-2 md:w-52 md:flex-col md:overflow-visible md:border-b-0 md:border-r">
          {pages.map((p) => {
            const active = p.id === activePage;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => onNavigate(p.id)}
                className={`whitespace-nowrap rounded-md px-3 py-2 text-left text-xs font-semibold transition ${
                  active ? "bg-verified/15 text-verified" : "text-muted hover:bg-surface2 hover:text-paper"
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </nav>

        <main className="min-w-0 flex-1 p-4 md:p-6">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export function StatusPill({ status }) {
  const tone =
    {
      PENDING: "bg-amber/15 text-amber border-amber/30",
      PROCESSING: "bg-wire/15 text-wire border-wire/30",
      COMPLETED: "bg-success/15 text-success border-success/30",
      APPROVED: "bg-success/15 text-success border-success/30",
      FAILED: "bg-red-500/15 text-red-400 border-red-500/30",
      CBSERROR: "bg-red-500/15 text-red-400 border-red-500/30",
      REJECTED: "bg-muted/20 text-muted border-rule",
      SUCCESS: "bg-success/15 text-success border-success/30",
    }[status] || "bg-surface2 text-muted border-rule";

  return (
    <span className={`inline-flex rounded-md border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide ${tone}`}>
      {status}
    </span>
  );
}

export function Panel({ title, children, actions }) {
  return (
    <section className="rounded-xl border border-rule bg-surface">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule px-4 py-3">
        <h2 className="font-display text-sm font-bold text-paper">{title}</h2>
        {actions}
      </div>
      <div className="p-4">{children}</div>
    </section>
  );
}

export function Field({ label, children }) {
  return (
    <label className="block text-xs">
      <span className="mb-1 block font-medium text-muted">{label}</span>
      {children}
    </label>
  );
}

export function inputClass() {
  return "w-full rounded-md border border-rule bg-ink px-3 py-2 text-sm text-paper placeholder:text-muted/60";
}

export function Btn({ children, onClick, variant = "primary", disabled, type = "button" }) {
  const styles =
    variant === "primary"
      ? "bg-verified text-on-accent hover:opacity-90"
      : variant === "danger"
        ? "border border-red-500/40 text-red-400 hover:bg-red-500/10"
        : "border border-rule text-paper hover:border-verified";
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-md px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-40 ${styles}`}
    >
      {children}
    </button>
  );
}
