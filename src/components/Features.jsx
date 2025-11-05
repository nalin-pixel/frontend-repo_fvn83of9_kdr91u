import { Globe, Shield, Wand2, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Hébergement gratuit',
    desc: "Votre site est en ligne instantanément avec un domaine personnalisé.",
  },
  {
    icon: Wand2,
    title: 'Éditeur simple',
    desc: 'Modifiez textes, images et couleurs sans écrire une ligne de code.',
  },
  {
    icon: Smartphone,
    title: '100% responsive',
    desc: 'Un rendu parfait sur mobile, tablette et ordinateur.',
  },
  {
    icon: Shield,
    title: 'Sécurisé & rapide',
    desc: 'Certificat SSL et performances optimisées par défaut.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Tout ce qu’il faut pour démarrer</h2>
          <p className="mt-3 text-slate-600">Des outils modernes pour créer un site professionnel sans effort.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
