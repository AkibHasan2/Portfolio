import { Link } from "react-router-dom";

export default function Hero({ profile }) {
  const name = profile?.fullName || profile?.FullName || "Akib Hasan";
  const role = profile?.roleLabel || ".NET Backend & Integration Engineer";
  const location = profile?.location || profile?.Location || "Dhaka, Bangladesh";
  const githubUrl = profile?.githubUrl || profile?.GithubUrl;
  const linkedinUrl = profile?.linkedinUrl || profile?.LinkedinUrl;

  const snippet = `const developer = {
  name: "${name}",
  stack: "ASP.NET Core, SQL Server, Dapper, Conductor",
  architecture: "Middleware + dual-control workflows",
  status: "Available for opportunities"
}`;

  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-24">
      <p className="text-sm font-medium text-verified">{role}</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-paper md:text-6xl">
        Building reliable systems and payment middleware.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        {location}-based .NET engineer focused on ASP.NET Core Web APIs, SQL Server, core banking
        integration, and maker/checker workflows. I build maintainable middleware with attention to
        audit trails, failure recovery, and controlled money movement.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="rounded-md bg-verified px-5 py-2.5 text-sm font-semibold text-on-accent">
          View Projects
        </a>
        <a
          href={`${import.meta.env.BASE_URL}Akib-Hasan-Resume.pdf`}
          download="Akib-Hasan-Resume.pdf"
          className="rounded-md border border-rule px-5 py-2.5 text-sm font-semibold text-paper"
        >
          Download Resume
        </a>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <pre className="overflow-x-auto rounded-xl border border-rule bg-surface p-5 font-mono text-xs leading-6 text-muted md:text-sm">
          <span className="text-verified">Portfolio</span>
          {"\n"}
          {snippet}
        </pre>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {[
            ["Name", name],
            ["Focus", "ASP.NET Core, SQL Server, CBS integration"],
            ["Location", location],
            ["Status", "Open to opportunities"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-rule bg-surface px-4 py-3">
              <p className="text-xs text-muted">{label}</p>
              <p className="mt-1 text-sm font-semibold text-paper">{value}</p>
            </div>
          ))}
          <div className="flex gap-4 px-1 text-sm font-medium">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="text-verified hover:underline">
                GitHub
              </a>
            )}
            {linkedinUrl && (
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="text-verified hover:underline">
                LinkedIn
              </a>
            )}
            <Link to="/resume" className="text-verified hover:underline">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
