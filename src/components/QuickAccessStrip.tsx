import { FlaskConical, GraduationCap } from 'lucide-react';

const links = [
  { label: 'La recherche', icon: FlaskConical, href: '#laboratoires' },
  { label: "L'offre de formation", icon: GraduationCap, href: '#formation' },
];

/**
 * Bande d'accès rapides à icônes, positionnée sous les cartes de présentation,
 * inspirée des boutons "La recherche" / "L'offre de formation" de uphf.fr.
 */
export function QuickAccessStrip() {
  return (
    <section className="px-5 pt-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-wrap justify-center gap-4 sm:justify-end">
        {links.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            className="group flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500 hover:bg-sky-600 hover:text-white hover:shadow-lg"
          >
            <Icon size={17} className="text-sky-600 transition group-hover:text-white" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
