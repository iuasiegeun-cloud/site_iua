import { useState } from 'react';
import { ChevronDown, Menu, Search, X, UserCircle2 } from 'lucide-react';

interface PortalHeaderProps {
  onNavigate?: (view: 'home' | 'actualites' | 'library' | 'laboratoires' | 'ufr' | 'campus' | 'university-life' | 'university-policy', ufrId?: string) => void;
  activeView?: 'home' | 'actualites' | 'library' | 'laboratoires' | 'ufr' | 'campus' | 'university-life' | 'university-policy';
  onProfileSelect?: (profile: string) => void;
}

/**
 * Header reconstruit d'après la maquette manuscrite :
 * Logo | Formation | International | Vie de Campus ▾ | Partenaire ▾ | (icône Vous êtes ▾)
 */
export function PortalHeader({ onNavigate, activeView = 'home', onProfileSelect }: PortalHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [campusDropdownOpen, setCampusDropdownOpen] = useState(false);
  const [partnerDropdownOpen, setPartnerDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const handleNavClick = (view: 'home' | 'actualites' | 'library' | 'laboratoires' | 'ufr' | 'campus' | 'university-life' | 'university-policy') => {
    setCampusDropdownOpen(false);
    setPartnerDropdownOpen(false);
    setMenuOpen(false);
    if (onNavigate) onNavigate(view);
  };

  const handleProfileClick = (profile: string) => {
    setProfileDropdownOpen(false);
    if (onProfileSelect) onProfileSelect(profile);
  };

  return (
    <header className="relative z-50 bg-white">
      {/* Barre utilitaire : FR/EN, Accessibilité, Annuaire, Recherche */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-600 sm:px-8 lg:px-12">
          <span className="hidden md:inline">Institut Universitaire d'Abidjan</span>
          <div className="ml-auto flex items-center gap-4 sm:gap-6">
            <button className="transition-colors hover:text-sky-600">FR <span className="mx-1 text-slate-300">|</span> EN</button>
            <button className="hidden transition-colors hover:text-sky-600 sm:inline">Accessibilité</button>
            <button className="hidden transition-colors hover:text-sky-600 sm:inline">Annuaire</button>
            <button aria-label="Rechercher" className="flex items-center gap-2 transition-colors hover:text-sky-600">
              <Search size={14} /> <span className="hidden lg:inline">Rechercher</span>
            </button>
          </div>
        </div>
      </div>

      {/* Logo + navigation principale + icône "Vous êtes" */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        <a
          href="#accueil"
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          className="flex items-center gap-4"
          aria-label="Accueil Institut Universitaire d'Abidjan"
        >
          <img
            src="/WhatsApp-Image-2025-04-12-at-19.56.21.jpeg"
            alt="Logo de l'Institut Universitaire d'Abidjan"
            className="animate-logo h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
          />
          <div className="hidden border-l border-slate-300 pl-3 text-[10px] font-bold uppercase leading-[1.3] tracking-[0.18em] text-slate-700 sm:block">
            Institut<br />Universitaire<br />d'Abidjan
          </div>
        </a>

        {/* Nav desktop, dans l'ordre exact de la maquette */}
        <nav className="hidden items-center gap-7 text-[13px] font-bold uppercase tracking-[0.05em] text-[#1a3b5c] lg:flex">
          <button
            onClick={() => handleNavClick('ufr')}
            className={`transition-colors hover:text-[#007b8f] ${activeView === 'ufr' ? 'border-b-2 border-[#007b8f] pb-1 text-[#007b8f]' : ''}`}
          >
            Formation
          </button>

          <button
            onClick={() => handleNavClick('home')}
            className="transition-colors hover:text-[#007b8f]"
          >
            International
          </button>

          {/* Vie de Campus ▾ : Campus, Vie universitaire, Bibliothèque, Actualité, Agenda */}
          <div
            className="relative"
            onMouseEnter={() => setCampusDropdownOpen(true)}
            onMouseLeave={() => setCampusDropdownOpen(false)}
          >
            <button
              onClick={() => setCampusDropdownOpen(!campusDropdownOpen)}
              className={`flex items-center gap-1 py-2 transition-colors hover:text-[#007b8f] ${
                ['campus', 'university-life', 'library', 'actualites'].includes(activeView) || campusDropdownOpen ? 'border-b-2 border-[#007b8f] text-[#007b8f]' : ''
              }`}
            >
              <span>Vie de Campus</span>
              <ChevronDown size={13} className={`transition-transform ${campusDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {campusDropdownOpen && (
              <div className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-2xl animate-fadeIn">
                <button onClick={() => handleNavClick('campus')} className="block w-full px-5 py-2.5 text-left text-xs font-bold normal-case tracking-normal text-slate-700 hover:bg-sky-50 hover:text-sky-700">Campus</button>
                <button onClick={() => handleNavClick('university-life')} className="block w-full px-5 py-2.5 text-left text-xs font-bold normal-case tracking-normal text-slate-700 hover:bg-sky-50 hover:text-sky-700">Vie universitaire</button>
                <button onClick={() => handleNavClick('library')} className="block w-full px-5 py-2.5 text-left text-xs font-bold normal-case tracking-normal text-slate-700 hover:bg-sky-50 hover:text-sky-700">Bibliothèque</button>
                <button onClick={() => handleNavClick('actualites')} className="block w-full px-5 py-2.5 text-left text-xs font-bold normal-case tracking-normal text-slate-700 hover:bg-sky-50 hover:text-sky-700">Actualité</button>
                <button onClick={() => handleNavClick('actualites')} className="block w-full px-5 py-2.5 text-left text-xs font-bold normal-case tracking-normal text-slate-700 hover:bg-sky-50 hover:text-sky-700">Agenda</button>
              </div>
            )}
          </div>

          {/* Partenaire ▾ : Université, Entreprise */}
          <div
            className="relative"
            onMouseEnter={() => setPartnerDropdownOpen(true)}
            onMouseLeave={() => setPartnerDropdownOpen(false)}
          >
            <button
              onClick={() => setPartnerDropdownOpen(!partnerDropdownOpen)}
              className={`flex items-center gap-1 py-2 transition-colors hover:text-[#007b8f] ${
                activeView === 'university-policy' || partnerDropdownOpen ? 'border-b-2 border-[#007b8f] text-[#007b8f]' : ''
              }`}
            >
              <span>Partenaire</span>
              <ChevronDown size={13} className={`transition-transform ${partnerDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {partnerDropdownOpen && (
              <div className="absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-2xl animate-fadeIn">
                <button onClick={() => handleNavClick('university-policy')} className="block w-full px-5 py-2.5 text-left text-xs font-bold normal-case tracking-normal text-slate-700 hover:bg-sky-50 hover:text-sky-700">Université</button>
                <button onClick={() => handleNavClick('home')} className="block w-full px-5 py-2.5 text-left text-xs font-bold normal-case tracking-normal text-slate-700 hover:bg-sky-50 hover:text-sky-700">Entreprise</button>
              </div>
            )}
          </div>
        </nav>

        {/* Icône "Vous êtes" ▾ : Étudiant, Prof, Administratif */}
        <div
          className="relative ml-auto hidden lg:block"
          onMouseEnter={() => setProfileDropdownOpen(true)}
          onMouseLeave={() => setProfileDropdownOpen(false)}
        >
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            aria-label="Vous êtes"
            className={`flex items-center gap-1.5 rounded-full border border-slate-300 px-3 py-2 text-[#1a3b5c] transition hover:border-[#007b8f] hover:text-[#007b8f] ${profileDropdownOpen ? 'border-[#007b8f] text-[#007b8f]' : ''}`}
          >
            <UserCircle2 size={20} strokeWidth={1.6} />
            <ChevronDown size={12} className={`transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {profileDropdownOpen && (
            <div className="absolute right-0 top-full z-50 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-2xl animate-fadeIn">
              <p className="px-5 pb-1.5 pt-1 text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">Vous êtes</p>
              <button onClick={() => handleProfileClick('Étudiant')} className="block w-full px-5 py-2.5 text-left text-xs font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-700">Étudiant</button>
              <button onClick={() => handleProfileClick('Professeur')} className="block w-full px-5 py-2.5 text-left text-xs font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-700">Prof</button>
              <button onClick={() => handleProfileClick('Administratif')} className="block w-full px-5 py-2.5 text-left text-xs font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-700">Administratif</button>
            </div>
          )}
        </div>

        {/* Bouton menu mobile */}
        <button
          className="ml-auto inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition hover:border-sky-500 hover:text-sky-600 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? <X size={17} /> : <Menu size={17} />} <span className="hidden sm:inline">Menu</span>
        </button>
      </div>

      {/* Nav mobile (accordéon simple, mêmes rubriques) */}
      {menuOpen && (
        <nav className="relative z-30 border-t border-slate-200 lg:hidden">
          <div className="flex flex-col bg-white">
            <button onClick={() => handleNavClick('ufr')} className="border-b border-slate-100 px-6 py-4 text-left text-[13px] font-bold uppercase tracking-[0.05em] text-[#1a3b5c] hover:text-[#007b8f]">Formation</button>
            <button onClick={() => handleNavClick('home')} className="border-b border-slate-100 px-6 py-4 text-left text-[13px] font-bold uppercase tracking-[0.05em] text-[#1a3b5c] hover:text-[#007b8f]">International</button>
            <button onClick={() => handleNavClick('campus')} className="border-b border-slate-100 px-6 py-4 text-left text-[13px] font-bold uppercase tracking-[0.05em] text-[#1a3b5c] hover:text-[#007b8f]">Vie de Campus</button>
            <button onClick={() => handleNavClick('university-policy')} className="border-b border-slate-100 px-6 py-4 text-left text-[13px] font-bold uppercase tracking-[0.05em] text-[#1a3b5c] hover:text-[#007b8f]">Partenaire</button>
            <div className="border-b border-slate-100 px-6 py-4">
              <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">Vous êtes</p>
              <div className="flex gap-4 text-xs font-bold text-slate-700">
                <button onClick={() => handleProfileClick('Étudiant')} className="hover:text-sky-700">Étudiant</button>
                <button onClick={() => handleProfileClick('Professeur')} className="hover:text-sky-700">Prof</button>
                <button onClick={() => handleProfileClick('Administratif')} className="hover:text-sky-700">Administratif</button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
