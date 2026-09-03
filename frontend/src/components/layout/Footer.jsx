import { motion } from "framer-motion";

export default function Footer({ profile }) {
  return (
    <footer className="border-t border-rule px-6 py-10">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted md:flex-row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>
          © {new Date().getFullYear()} {profile?.fullName || profile?.FullName || "Portfolio"} — End of statement
        </p>
        <div className="flex gap-6">
          {(profile?.githubUrl || profile?.GithubUrl) && (
            <a
              href={profile.githubUrl || profile.GithubUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline hover:text-verified"
            >
              GitHub
            </a>
          )}
          {(profile?.linkedinUrl || profile?.LinkedinUrl) && (
            <a
              href={profile.linkedinUrl || profile.LinkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline hover:text-verified"
            >
              LinkedIn
            </a>
          )}
          <a href={`${import.meta.env.BASE_URL}admin`} className="link-underline hover:text-verified">
            Admin
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
