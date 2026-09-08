import SocialIcons from "../ui/SocialIcons.jsx";

export default function Footer({ profile }) {
  const name = profile?.fullName || profile?.FullName || "Portfolio";
  const github = profile?.githubUrl || profile?.GithubUrl;
  const linkedin = profile?.linkedinUrl || profile?.LinkedinUrl;

  return (
    <footer className="border-t border-rule px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-paper">{name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Building reliable payment middleware with clean engineering and strong systems thinking.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm text-paper">
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Connect</p>
          <SocialIcons email={profile?.email || profile?.Email} githubUrl={github} linkedinUrl={linkedin} />
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted">
        © {new Date().getFullYear()} {name.toUpperCase()}. All rights reserved.
      </p>
    </footer>
  );
}
