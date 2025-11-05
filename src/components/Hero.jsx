import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-medium text-blue-700 shadow-sm">
              <Star className="h-4 w-4 fill-blue-600 text-white" />
              Créez votre site en quelques minutes
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Créez un site web gratuit, beau et rapide
            </h1>
            <p className="mt-5 text-slate-600 text-lg leading-8">
              Lancez votre présence en ligne sans code. Choisissez un modèle, personnalisez et publiez. C'est simple, rapide et 100% gratuit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#start" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700">
                Commencer maintenant
              </a>
              <a href="#features" className="inline-flex justify-center items-center px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50">
                Voir les fonctionnalités
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">Aucune carte requise • Hébergement inclus • SEO friendly</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 via-white to-purple-100 p-3 shadow-inner">
              <div className="h-full w-full rounded-xl bg-white shadow-lg border border-slate-200 p-4">
                <div className="h-8 w-24 rounded-md bg-slate-200" />
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="h-24 rounded-lg bg-blue-100" />
                  <div className="h-24 rounded-lg bg-purple-100" />
                  <div className="h-24 rounded-lg bg-pink-100" />
                  <div className="col-span-3 h-32 rounded-lg bg-slate-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
