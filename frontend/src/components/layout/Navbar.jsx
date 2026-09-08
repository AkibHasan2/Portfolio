import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle.jsx";
import SocialIcons from "../ui/SocialIcons.jsx";

const LINKS = [
  { href: "#top", label: "Home", id: "top" },
  { href: "#about", label: "About Me", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const PAGE_LINKS = [{ to: "/resume", label: "Resume" }];

export default function Navbar({
  name = "Portfolio",
  fullName = "Akib Hasan",
  githubUrl,
  linkedinUrl,
  email,
  homeHref = "#top",
}) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  useEffect(() => {
    const ids = LINKS.map((l) => l.id);
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-40 border-b transition-[background,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-rule bg-ink/90 shadow-[0_8px_30px_-18px_rgb(0_0_0/0.45)] backdrop-blur-md"
          : "border-transparent bg-ink/60 backdrop-blur-sm"
      }`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <a href={homeHref} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-verified text-xs font-bold text-on-accent">
            {(fullName || name).split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase()}
          </span>
          <span className="hidden font-display text-sm font-bold tracking-wide text-paper sm:inline">
            {(fullName || name).toUpperCase()}
          </span>
        </a>

        <ul className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex">
          {LINKS.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href.startsWith("#") && homeHref !== "#top" ? `${homeHref}${link.href}` : link.href}
                className={`transition-colors ${active === link.id ? "text-paper" : "hover:text-paper"}`}
              >
                {link.label}
              </a>
              {active === link.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-verified"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
          {PAGE_LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="transition-colors hover:text-paper">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <SocialIcons email={email} githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
          <ThemeToggle />

          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md border border-rule text-paper lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`block h-px w-4 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-4 bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="border-t border-rule bg-ink/95 px-6 py-4 backdrop-blur-md lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-3 text-sm font-medium text-muted">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href.startsWith("#") && homeHref !== "#top" ? `${homeHref}${link.href}` : link.href}
                    className={active === link.id ? "text-paper" : "hover:text-paper"}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {PAGE_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-paper" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
