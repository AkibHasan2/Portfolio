import { useState } from "react";
import { Link } from "react-router-dom";
import { projectGalleries } from "../../data/galleries.js";

export default function Projects({ projects = [] }) {
  const list = projects.filter((p) => p.Featured ?? p.featured);
  const galleryProjects = list.filter((p) => {
    const slug = p.Slug || p.slug;
    return slug === "bond-platform" || slug === "utility-payments";
  });
  const [active, setActive] = useState(0);
  const selected = galleryProjects[active] || galleryProjects[0];
  const slug = selected?.Slug || selected?.slug;
  const photos = projectGalleries[slug] || [];
  const [open, setOpen] = useState(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <p className="text-sm font-medium text-verified">Projects</p>
      <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-paper md:text-4xl">
        Selected work and real systems I built.
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        Photo gallery for Bond and Utility. Click a thumbnail to enlarge.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {galleryProjects.map((p, i) => (
          <button
            key={p.Id || p.Slug}
            type="button"
            onClick={() => {
              setActive(i);
              setOpen(null);
            }}
            className={`rounded-md px-3 py-1.5 text-sm font-semibold ${
              i === active ? "bg-verified text-on-accent" : "border border-rule text-paper"
            }`}
          >
            {(p.Slug || p.slug) === "bond-platform" ? "Bond" : "Utility"}
          </button>
        ))}
      </div>

      {selected && (
        <div className="mt-6">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-bold text-paper">{selected.Title || selected.title}</h3>
              <p className="mt-1 text-sm text-muted">{selected.Summary || selected.summary}</p>
            </div>
            {slug && (
              <Link to={`/work/${slug}`} className="text-sm font-semibold text-verified">
                Case study →
              </Link>
            )}
          </div>

          {photos.length === 0 ? (
            <div className="rounded-xl border border-dashed border-rule px-6 py-16 text-center text-sm text-muted">
              Utility screenshots are not in the gallery yet. Add images under{" "}
              <span className="font-mono text-paper">frontend/public/gallery/utility</span>.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {photos.map((photo) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setOpen(photo)}
                  className="overflow-hidden rounded-xl border border-rule bg-surface text-left"
                >
                  <img src={photo.src} alt={photo.caption} className="aspect-[16/10] w-full object-cover object-top" />
                  <p className="px-3 py-2 text-xs text-muted">{photo.caption}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <ol className="mt-12 divide-y divide-rule border-y border-rule">
        {list.map((p, i) => {
          const title = p.Title || p.title;
          const summary = p.Summary || p.summary;
          const itemSlug = p.Slug || p.slug;
          const num = String(i + 1).padStart(2, "0");
          return (
            <li key={p.Id || title} className="py-6">
              <div className="flex gap-4">
                <span className="font-mono text-sm font-semibold text-verified">{num}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-paper">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>
                  {itemSlug && (
                    <Link to={`/work/${itemSlug}`} className="mt-2 inline-block text-sm font-semibold text-verified">
                      Case study
                    </Link>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(null)}
          role="dialog"
        >
          <figure className="max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={open.src} alt={open.caption} className="max-h-[80vh] w-full rounded-lg object-contain" />
            <figcaption className="mt-2 text-center text-sm text-white">{open.caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
