export default function Skills({ skills = [] }) {
  const grouped = skills.reduce((acc, s) => {
    const key = s.Category || s.category || "Other";
    acc[key] = acc[key] || [];
    acc[key].push(s.Name || s.name);
    return acc;
  }, {});

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <p className="text-sm font-medium text-verified">Skills</p>
      <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-paper md:text-4xl">
        Technologies I use to build robust products.
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        Backend engineering is my core strength, with selected full-stack work when operations need a UI.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {Object.entries(grouped).map(([category, names]) => (
          <article key={category} className="rounded-xl border border-rule bg-surface p-5">
            <p className="text-xs text-muted">Category</p>
            <div className="mt-1 flex items-center justify-between gap-3">
              <h3 className="font-display text-xl font-bold text-paper">{category}</h3>
              <span className="rounded-md bg-verified/15 px-2 py-0.5 text-xs font-semibold text-verified">
                {names.length}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {names.map((name) => (
                <span key={name} className="rounded-md border border-rule px-2.5 py-1 text-xs text-paper">
                  {name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
