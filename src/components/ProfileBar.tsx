import { GraduationCap, BookOpenCheck, Landmark, Building2, UsersRound, HeartHandshake } from 'lucide-react';

const profiles = [
  { title: 'Étudiant·e', icon: GraduationCap },
  { title: 'Lycéen·ne', icon: BookOpenCheck },
  { title: 'Chercheur·e', icon: Landmark },
  { title: 'Partenaire', icon: Building2 },
  { title: 'Personnel', icon: UsersRound },
  { title: 'Mécène', icon: HeartHandshake },
];

interface ProfileBarProps {
  onProfileSelect: (profile: string) => void;
}

/**
 * Barre "Vous êtes" positionnée juste sous le header, au-dessus du bandeau hero
 * (même emplacement que sur sorbonne-universite.fr).
 */
export function ProfileBar({ onProfileSelect }: ProfileBarProps) {
  return (
    <div className="relative z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-1 overflow-x-auto py-2 text-[12px] font-semibold text-slate-600 scrollbar-none">
          <span className="mr-3 hidden shrink-0 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:inline">
            Vous êtes
          </span>
          {profiles.map(({ title, icon: Icon }) => (
            <button
              key={title}
              onClick={() => onProfileSelect(title)}
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 transition hover:bg-sky-50 hover:text-sky-700"
            >
              <Icon size={14} strokeWidth={1.8} />
              {title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
