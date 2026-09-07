import EntryHeading from "../ui/EntryHeading.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function Timeline({ steps = [] }) {
  if (!steps.length) return null;

  return (
    <section id="path" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <EntryHeading
        code="04 — Path"
        title="Capability progression"
        description="How the work deepened—from APIs to payments, dual control, platform libraries, and ops automation."
      />
      <Reveal>
        <ol className="relative space-y-0 border-l border-rule pl-6 md:pl-8">
          {steps.map((step, i) => (
            <li key={step.title} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[1.65rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-rule bg-ink font-mono text-[10px] font-semibold text-verified md:-left-[2.15rem]">
                {i + 1}
              </span>
              <h3 className="font-display text-base font-bold text-paper md:text-lg">{step.title}</h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
