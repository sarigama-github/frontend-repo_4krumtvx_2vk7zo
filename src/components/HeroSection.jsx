import { Building2, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal-400/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Building2 className="h-4 w-4" />
            Award-winning residential architecture
          </div>

          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Timeless Home Architecture,
            <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent"> thoughtfully crafted</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
            From first sketch to final build, we design modern, sustainable homes that
            balance beauty, function, and the way you live every day.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-md bg-teal-400 px-5 py-3 font-medium text-slate-900 transition hover:bg-teal-300"
            >
              View portfolio
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Get consultation
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {["Passive design", "Material focus", "Light-driven", "Site-specific", "Human scale", "Low-impact"].map((item) => (
            <div
              key={item}
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-white/70"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
