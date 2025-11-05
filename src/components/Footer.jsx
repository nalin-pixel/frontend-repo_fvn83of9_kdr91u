export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Site Gratuit. Tous droits réservés.</p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Confidentialité</a>
            <a href="#" className="hover:text-slate-900">Conditions</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
