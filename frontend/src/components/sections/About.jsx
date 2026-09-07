import EntryHeading from "../ui/EntryHeading.jsx";
import { Stagger, StaggerItem } from "../ui/Reveal.jsx";

export default function About({ profile }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <EntryHeading
        code="01 — About"
        title="About"
        description="Enterprise .NET craft—proven in banking payments, built for integration reliability."
      />
      <Stagger className="grid gap-8 md:grid-cols-3" stagger={0.12}>
        <StaggerItem className="md:col-span-2 space-y-4">
          <p className="text-balance text-base leading-relaxed text-muted md:text-lg md:leading-8">
            {profile?.summary || profile?.Summary}
          </p>
          {profile?.positioning && (
            <p className="text-balance border-l-2 border-verified pl-4 text-sm font-medium leading-relaxed text-paper md:text-base">
              {profile.positioning}
            </p>
          )}
        </StaggerItem>
        <StaggerItem>
          <div className="panel-glow space-y-4 rounded-xl border border-rule bg-surface p-6 text-sm text-muted">
            <div className="flex justify-between border-b border-rule pb-3">
              <span>Location</span>
              <span className="font-medium text-paper">{profile?.location || profile?.Location || "—"}</span>
            </div>
            <div className="flex justify-between border-b border-rule pb-3">
              <span>Focus</span>
              <span className="font-medium text-paper">APIs · Integration</span>
            </div>
            <div className="flex justify-between border-b border-rule pb-3">
              <span>Proof domain</span>
              <span className="font-medium text-paper">Banking payments</span>
            </div>
            <div className="flex justify-between">
              <span>Availability</span>
              <span className="font-semibold text-success">Open to roles</span>
            </div>
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
