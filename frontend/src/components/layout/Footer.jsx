import { motion } from "framer-motion";

export default function Footer({ profile }) {
  const name = profile?.fullName || profile?.FullName || "Portfolio";

  return (
    <footer className="border-t border-rule px-6 py-10">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>
          © {new Date().getFullYear()} {name}. Built for professional outreach.
        </p>
        <div className="flex gap-6 font-medium">
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
        </div>
      </motion.div>
    </footer>
  );
}
