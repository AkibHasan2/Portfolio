export default function Hero({ profile }) {
  const name = profile?.fullName || profile?.FullName || "Akib Hasan";
  const role = profile?.roleLabel || ".NET Backend & Integration Engineer";
  const location = profile?.location || profile?.Location || "Dhaka, Bangladesh";

  return (
    <section id="top" className="mx-auto grid max-w-6xl items-start gap-10 px-6 pb-16 pt-16 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
      <div>
        <p className="text-sm font-medium text-verified">{role}</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-paper md:text-5xl lg:text-6xl">
          Building reliable systems and payment middleware.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          .NET engineer focused on ASP.NET Core Web APIs, SQL Server, core banking integration, and
          maker/checker workflows. I build maintainable middleware with audit trails, failure recovery,
          and controlled money movement.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-verified px-5 py-2.5 text-sm font-semibold text-on-accent">
            View Projects
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Akib-Hasan-Resume.pdf`}
            download="Akib-Hasan-Resume.pdf"
            className="rounded-md border border-rule bg-surface px-5 py-2.5 text-sm font-semibold text-paper"
          >
            Download Resume
          </a>
        </div>
      </div>

      <aside className="lg:pt-2">
        <div className="overflow-hidden rounded-2xl border border-rule bg-[#0b1220] shadow-xl">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-xs font-medium text-slate-300">Portfolio</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-xs leading-6 text-slate-300 md:text-sm">{`const developer = {
  name: "${name}",
  stack: "ASP.NET Core, SQL Server, Dapper",
  architecture: "Middleware + dual-control",
  status: "Available for opportunities"
};`}</pre>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            ["Name", name],
            ["Focus", "ASP.NET Core · SQL Server"],
            ["Location", location],
            ["Status", "Open to opportunities"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-rule bg-surface px-4 py-3">
              <p className="text-xs text-muted">{label}</p>
              <p className="mt-1 text-sm font-semibold text-paper">{value}</p>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
