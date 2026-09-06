import { motion } from "framer-motion";

export default function Footer({ profile }) {
  const name = profile?.fullName || profile?.FullName || "Portfolio";
  const github = profile?.githubUrl || profile?.GithubUrl;
  const linkedin = profile?.linkedinUrl || profile?.LinkedinUrl;

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
          © {new Date().getFullYear()} {name}. Banking payment middleware — sanitized public portfolio.
        </p>
        <div className="flex gap-6 font-medium">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="link-underline hover:text-verified">
              GitHub
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer" className="link-underline hover:text-verified">
              LinkedIn
            </a>
          )}
        </div>
      </motion.div>
    </footer>
  );
}
