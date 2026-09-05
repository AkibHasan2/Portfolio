import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle.jsx";

const LINKS = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Work", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar({ name = "Portfolio" }) {
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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tightish text-paper">
          {name}
          <span className="text-verified">.</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          {LINKS.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={`transition-colors ${
                  active === link.id ? "text-paper" : "hover:text-paper"
                }`}
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
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <motion.a
            href="#contact"
            className="hidden rounded-md bg-verified px-3.5 py-2 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90 sm:inline-flex"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Hire me
          </motion.a>

          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md border border-rule text-paper md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`block h-px w-4 bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-current transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="border-t border-rule bg-ink/95 px-6 py-4 backdrop-blur-md md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-3 text-sm font-medium text-muted">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={active === link.id ? "text-paper" : "hover:text-paper"}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-verified" onClick={() => setMenuOpen(false)}>
                  Hire me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
