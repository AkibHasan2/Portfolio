import EntryHeading from "../ui/EntryHeading.jsx";
import { Stagger, StaggerItem } from "../ui/Reveal.jsx";

export default function Expertise({ areas = [] }) {
  return (
    <section id="expertise" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <EntryHeading
        code="02 — Expertise"
        title="Core expertise"
        description="Technical areas that deserve attention for banking integration roles."
      />
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {areas.map((area) => (
          <StaggerItem key={area.title}>
            <div className="panel-glow h-full rounded-xl border border-rule bg-surface p-5">
              <h3 className="font-display text-base font-bold tracking-tightish text-paper">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
