import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EntryHeading from "../ui/EntryHeading.jsx";
import Button from "../ui/Button.jsx";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal.jsx";
import { api } from "../../services/api.js";
import { USE_DB } from "../../config.js";

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
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

    // Static mode: open the user's mail client instead of posting to the API
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
    `w-full rounded-sm border bg-surface2 px-3 py-2 text-sm text-paper outline-none transition-all duration-300 ${
      focused === id
        ? "border-verified shadow-[0_0_0_3px_rgba(62,180,137,0.15)]"
        : "border-rule"
    }`;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <EntryHeading
        code="ENTRY // 05 — CONTACT"
        title="Open a channel"
        description={
          USE_DB
            ? "Every message here is written straight to the record."
            : "Static mode — messages open your email client."
        }
      />

      <Stagger className="grid gap-10 md:grid-cols-2" stagger={0.12}>
        <StaggerItem>
          <form onSubmit={handleSubmit} className="panel-glow space-y-4 rounded-sm border border-rule bg-surface p-6">
            <div>
              <label className="mb-1 block font-mono text-xs uppercase tracking-widest text-muted" htmlFor="name">
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
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="mb-1 block font-mono text-xs uppercase tracking-widest text-muted" htmlFor="email">
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
                placeholder="jane@company.com"
              />
            </div>
            <div>
              <label className="mb-1 block font-mono text-xs uppercase tracking-widest text-muted" htmlFor="message">
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
                placeholder="What are you looking to build?"
              />
            </div>

            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Filing…" : USE_DB ? "File message" : "Send via email"}
            </Button>

            <AnimatePresence mode="wait">
              {status === "sent" && (
                <motion.p
                  key="sent"
                  className="font-mono text-xs text-verified"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {USE_DB ? "Received. I'll reply by email." : "Opening your email client…"}
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  key="error"
                  className="font-mono text-xs text-[#E8646C]"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Couldn't send it: {errorMsg}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </StaggerItem>

        <StaggerItem>
          <Reveal direction="left" className="space-y-4 font-mono text-sm text-muted">
            {[
              {
                label: "Email",
                node: (
                  <a href={`mailto:${email}`} className="link-underline text-paper hover:text-verified">
                    {email}
                  </a>
                ),
              },
              {
                label: "Location",
                node: <span className="text-paper">{location}</span>,
              },
              githubUrl && {
                label: "GitHub",
                node: (
                  <a href={githubUrl} target="_blank" rel="noreferrer" className="link-underline text-paper hover:text-verified">
                    View →
                  </a>
                ),
              },
              linkedinUrl && {
                label: "LinkedIn",
                node: (
                  <a href={linkedinUrl} target="_blank" rel="noreferrer" className="link-underline text-paper hover:text-verified">
                    View →
                  </a>
                ),
              },
            ]
              .filter(Boolean)
              .map((row) => (
                <motion.div
                  key={row.label}
                  className="flex justify-between border-b border-rule pb-3 transition-colors hover:border-verified/40"
                  whileHover={{ x: 4 }}
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
