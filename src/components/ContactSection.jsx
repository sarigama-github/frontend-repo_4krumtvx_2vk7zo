import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Start your project</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Tell us about your site, goals, and timeline. We’ll follow up within one business day.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
                  placeholder="jane@email.com"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">Project details</label>
              <textarea
                rows="4"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
                placeholder="Site location, scope, budget range, timeline..."
              />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-md bg-teal-500 px-5 py-3 font-medium text-white transition hover:bg-teal-400">
              Send request
            </button>
          </form>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="space-y-4 text-slate-700">
              <p>
                We partner with clients across the globe to create homes grounded in place and purpose.
              </p>
              <div className="flex items-center gap-3 text-slate-800">
                <Mail className="h-5 w-5 text-teal-600" /> contact@studiohome.design
              </div>
              <div className="flex items-center gap-3 text-slate-800">
                <Phone className="h-5 w-5 text-teal-600" /> +1 (555) 123-4567
              </div>
              <p className="text-sm text-slate-500">
                By submitting, you agree to our terms and consent to be contacted about your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
