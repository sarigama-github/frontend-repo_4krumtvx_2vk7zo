import HeroSection from './components/HeroSection'
import ServicesGrid from './components/ServicesGrid'
import PortfolioShowcase from './components/PortfolioShowcase'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
          <a href="#" className="font-semibold tracking-tight">Studio Home</a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#portfolio">Work</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <HeroSection />
        <ServicesGrid />
        <PortfolioShowcase />
        <ContactSection />
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600">
          © {new Date().getFullYear()} Studio Home. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
