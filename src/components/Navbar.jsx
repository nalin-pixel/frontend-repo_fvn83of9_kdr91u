import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-600 text-white">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold text-slate-900">Site Gratuit</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Fonctionnalités</a>
            <a href="#templates" className="hover:text-slate-900">Modèles</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900">
              Se connecter
            </button>
            <a href="#start" className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700">
              Commencer
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
