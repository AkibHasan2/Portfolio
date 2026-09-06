import EntryHeading from "../ui/EntryHeading.jsx";
import { Stagger, StaggerItem } from "../ui/Reveal.jsx";

export default function Capabilities({ items = [] }) {
  return (
    <section id="capabilities" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <EntryHeading
        code="04 — Capabilities"
        title="Engineering capabilities"
        description="Evidence-backed strengths—not buzzword lists."
      />
      <Stagger className="grid gap-5 md:grid-cols-2" stagger={0.08}>
        {items.map((cap) => (
          <StaggerItem key={cap.title}>
            <div className="rounded-xl border border-rule bg-surface/60 p-5">
              <h3 className="font-display text-lg font-bold tracking-tightish text-paper">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{cap.evidence}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
