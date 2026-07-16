/*
  Temporary design-token preview. Replaced by the real home page in a later step.
  Kept only so the token system and typography can be reviewed on screen.
*/

const swatches = [
  { name: "background", cls: "bg-background text-foreground border" },
  { name: "primary", cls: "bg-primary text-primary-foreground" },
  { name: "secondary", cls: "bg-secondary text-secondary-foreground" },
  { name: "muted", cls: "bg-muted text-muted-foreground" },
  { name: "gold", cls: "bg-gold text-white" },
  { name: "gold-strong", cls: "bg-gold-strong text-white" },
  { name: "card", cls: "bg-card text-card-foreground border" },
];

export default function TokenPreview() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-gold-strong text-sm font-medium tracking-widest uppercase">
        Val Brandemburg Inc.
      </p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
        Beautiful Kitchens. Elegant Bathrooms. Crafted to Last.
      </h1>
      <p className="text-muted-foreground mt-6 max-w-2xl text-lg">
        This is body copy set in Inter. The heading above is Playfair Display. Over twenty years of
        craftsmanship, rendered here only to verify the type scale and color system.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium">
          Get Free Consultation
        </button>
        <button className="bg-gold-strong rounded-lg px-6 py-3 font-medium text-white">
          Gold CTA
        </button>
        <a href="#" className="text-gold-strong font-medium underline underline-offset-4">
          A text link in accent gold
        </a>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {swatches.map((s) => (
          <div
            key={s.name}
            className={`flex h-24 items-end rounded-lg p-3 text-sm font-medium ${s.cls}`}
          >
            {s.name}
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-2">
        <h2 className="text-3xl font-semibold">Heading level two</h2>
        <h3 className="text-2xl font-semibold">Heading level three</h3>
        <p className="max-w-2xl">
          A paragraph of Inter body text to check rhythm against the serif headings. Details and
          craftsmanship matter, especially when it comes to home remodeling and design.
        </p>
      </div>
    </main>
  );
}
