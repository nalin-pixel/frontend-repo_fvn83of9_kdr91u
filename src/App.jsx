import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <section id="start" className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold">Prêt à créer votre site ?</h3>
            <p className="mt-3 text-slate-600">Commencez gratuitement aujourd’hui et publiez en quelques minutes.</p>
            <div className="mt-6 inline-flex rounded-lg overflow-hidden shadow">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-3 w-64 border border-slate-300 focus:outline-none"
                aria-label="email"
              />
              <button className="px-5 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700">
                Créer mon site
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-500">En cliquant, vous acceptez nos conditions d’utilisation.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
