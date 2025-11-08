export default function PortfolioShowcase() {
  const projects = [
    {
      title: "Courtyard House",
      img:
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1470&auto=format&fit=crop",
      tag: "Passive cooling",
    },
    {
      title: "Forest Retreat",
      img:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1470&auto=format&fit=crop",
      tag: "Timber & light",
    },
    {
      title: "Cliffside Villa",
      img:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1470&auto=format&fit=crop",
      tag: "Ocean views",
    },
  ];

  return (
    <section id="portfolio" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Selected work</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            A glimpse into homes shaped by light, proportion, and material honesty.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-4">
                <div>
                  <h3 className="text-base font-medium text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600">{p.tag}</p>
                </div>
                <span className="text-xs text-slate-500">View →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
