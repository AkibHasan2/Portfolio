import { useMemo } from "react";
import EntryHeading from "../ui/EntryHeading.jsx";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal.jsx";

/** Lightweight mermaid-like flowchart rendered as structured text blocks (no extra dependency). */
function FlowDiagram({ title, purpose, mermaid }) {
  const nodes = useMemo(() => {
    const lines = (mermaid || "")
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith("flowchart") && !l.startsWith("graph"));
    const edges = [];
    lines.forEach((line) => {
      const m = line.match(/^(\w+)\[([^\]]+)\]\s*-->\s*(\w+)(?:\[([^\]]+)\])?/);
      if (m) {
        edges.push({ from: m[2].replace(/_/g, " "), to: (m[4] || m[3]).replace(/_/g, " ") });
      }
    });
    return edges;
  }, [mermaid]);

  return (
    <div className="panel-glow rounded-xl border border-rule bg-surface p-5 md:p-6">
      <h3 className="font-display text-lg font-bold tracking-tightish text-paper">{title}</h3>
      <p className="mt-1 text-sm text-muted">{purpose}</p>
      <ol className="mt-4 space-y-2 font-mono text-xs text-muted md:text-sm">
        {nodes.length
          ? nodes.map((e, i) => (
              <li key={`${e.from}-${e.to}-${i}`} className="flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-rule bg-ink/50 px-2 py-1 text-paper">{e.from}</span>
                <span className="text-verified">→</span>
                <span className="rounded-md border border-rule bg-ink/50 px-2 py-1 text-paper">{e.to}</span>
              </li>
            ))
          : null}
      </ol>
    </div>
  );
}

export default function Architecture({ diagrams = [] }) {
  return (
    <section id="engineering" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <EntryHeading
        code="05 — Engineering"
        title="Architecture approach"
        description="Sanitized component flows—no hosts, credentials, or internal network details."
      />
      <Reveal className="mb-6 rounded-xl border border-rule/80 bg-surface2/40 p-4 text-sm text-muted">
        Diagrams use generalized names only (Channel UI, Core Banking, Middleware). Proprietary bank source and
        production endpoints are never published.
      </Reveal>
      <Stagger className="grid gap-5 md:grid-cols-2" stagger={0.1}>
        {diagrams.map((d) => (
          <StaggerItem key={d.id}>
            <FlowDiagram title={d.title} purpose={d.purpose} mermaid={d.mermaid} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
