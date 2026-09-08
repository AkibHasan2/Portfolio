export default function About({ profile }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <p className="text-sm font-medium text-verified">About Me</p>
      <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-paper md:text-4xl">
        Who I am and what I build
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
        {profile?.summary || profile?.Summary}
      </p>
      {profile?.positioning && (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-paper">{profile.positioning}</p>
      )}
    </section>
  );
}
