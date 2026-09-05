import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EntryHeading from "../ui/EntryHeading.jsx";
import Button from "../ui/Button.jsx";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal.jsx";
import { api } from "../../services/api.js";
import { USE_DB } from "../../config.js";

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [focused, setFocused] = useState("");

  const email = profile?.email || profile?.Email || "you@example.com";
  const location = profile?.location || profile?.Location || "—";
  const githubUrl = profile?.githubUrl || profile?.GithubUrl;
  const linkedinUrl = profile?.linkedinUrl || profile?.LinkedinUrl;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    if (!USE_DB) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      return;
    }

    try {
      await api.sendMessage(form);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  const fieldClass = (id) =>
    `w-full rounded-md border bg-surface2 px-3.5 py-2.5 text-sm text-paper outline-none transition-all duration-250 ${
      focused === id
        ? "border-verified shadow-[0_0_0_3px_rgb(var(--verified)/0.18)]"
        : "border-rule"
    }`;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <EntryHeading
        code="05 — Contact"
        title="Let's connect"
        description={
          USE_DB
            ? "Send a message — I typically reply within one business day."
            : "Prefer email? The form opens your mail client."
        }
      />

      <Stagger className="grid gap-10 md:grid-cols-2" stagger={0.12}>
        <StaggerItem>
          <form onSubmit={handleSubmit} className="panel-glow space-y-4 rounded-xl border border-rule bg-surface p-6 md:p-7">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused("")}
                className={fieldClass("name")}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
                className={fieldClass("email")}
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused("")}
                className={`${fieldClass("message")} resize-none`}
                placeholder="Tell me about the role or project…"
              />
            </div>

            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : USE_DB ? "Send message" : "Send email"}
            </Button>

            <AnimatePresence mode="wait">
              {status === "sent" && (
                <motion.p
                  key="sent"
                  className="text-sm font-medium text-success"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {USE_DB ? "Thanks — I'll get back to you soon." : "Opening your email client…"}
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  key="error"
                  className="text-sm text-[#E8646C]"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Couldn't send: {errorMsg}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </StaggerItem>

        <StaggerItem>
          <Reveal direction="left" className="space-y-1 text-sm text-muted">
            <p className="mb-5 text-sm leading-relaxed text-muted">
              Also find me on LinkedIn and GitHub — happy to connect with recruiters, hiring managers, and engineering teams.
            </p>
            {[
              {
                label: "Email",
                node: (
                  <a href={`mailto:${email}`} className="link-underline font-medium text-paper hover:text-verified">
                    {email}
                  </a>
                ),
              },
              {
                label: "Location",
                node: <span className="font-medium text-paper">{location}</span>,
              },
              githubUrl && {
                label: "GitHub",
                node: (
                  <a href={githubUrl} target="_blank" rel="noreferrer" className="link-underline font-medium text-paper hover:text-verified">
                    Profile →
                  </a>
                ),
              },
              linkedinUrl && {
                label: "LinkedIn",
                node: (
                  <a href={linkedinUrl} target="_blank" rel="noreferrer" className="link-underline font-medium text-paper hover:text-verified">
                    Profile →
                  </a>
                ),
              },
            ]
              .filter(Boolean)
              .map((row) => (
                <motion.div
                  key={row.label}
                  className="flex justify-between border-b border-rule py-3.5 transition-colors hover:border-verified/40"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <span>{row.label}</span>
                  {row.node}
                </motion.div>
              ))}
          </Reveal>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
