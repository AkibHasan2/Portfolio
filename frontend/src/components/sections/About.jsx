import EntryHeading from "../ui/EntryHeading.jsx";
import { Stagger, StaggerItem } from "../ui/Reveal.jsx";

export default function About({ profile }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <EntryHeading code="ENTRY // 01 — ABOUT" title="Field notes" description="How I approach the work." />
      <Stagger className="grid gap-8 md:grid-cols-3" stagger={0.12}>
        <StaggerItem className="md:col-span-2">
          <p className="text-balance text-base leading-relaxed text-muted md:text-lg">
            {profile?.summary ||
              profile?.Summary ||
              "I work at the intersection of backend engineering and financial infrastructure — the kind of software that has to be correct every single time, because it's handling someone's money or their identity. That means clean API contracts, deliberate database design, and treating every generated document or approval flow like a ledger entry: traceable, reversible-in-audit, never silent about what happened."}
          </p>
        </StaggerItem>
        <StaggerItem>
          <div className="panel-glow space-y-4 rounded-sm border border-rule bg-surface p-5 font-mono text-xs text-muted">
            <div className="flex justify-between border-b border-rule/60 pb-3">
              <span>Based in</span>
              <span className="text-paper">{profile?.location || profile?.Location || "—"}</span>
            </div>
            <div className="flex justify-between border-b border-rule/60 pb-3">
              <span>Focus</span>
              <span className="text-paper">Backend / Data</span>
            </div>
            <div className="flex justify-between">
              <span>Available for</span>
              <span className="text-verified">Contract · Full-time</span>
            </div>
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
