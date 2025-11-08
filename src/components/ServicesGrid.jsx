import { Home, Ruler, Trees, Bath } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Custom Home Design",
    desc: "Tailored concepts that translate your lifestyle into space and light.",
  },
  {
    icon: Ruler,
    title: "Planning & Permits",
    desc: "From site studies to approvals—we handle the details end to end.",
  },
  {
    icon: Trees,
    title: "Sustainable Strategies",
    desc: "Passive solar, high-performance envelopes, and low-impact materials.",
  },
  {
    icon: Bath,
    title: "Interior Architecture",
    desc: "Kitchen, bath, millwork, and finishes harmonized with the architecture.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Services</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Holistic design guidance from feasibility through construction.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-teal-50 p-3 text-teal-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
