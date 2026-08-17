import { ArrowLeft, Users, Trophy, Bus, Home, Heart, Globe, GraduationCap, Star, Zap, BookOpen, Music, Wifi, Shield, Award } from 'lucide-react';

interface UniversityLifePageProps {
  onBack: () => void;
}

const stats = [
  { value: '11 000+', label: 'Etudiants actifs' },
  { value: '30+', label: 'Clubs & Associations' },
  { value: '5', label: 'Campus a Abidjan' },
  { value: '40+', label: 'Nationalites representees' },
];

const highlights = [
  { icon: Trophy, label: 'Sport & Performance', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: Music, label: 'Culture & Arts', color: 'text-purple-500', bg: 'bg-purple-50' },
  { icon: Globe, label: 'Ouverture Internationale', color: 'text-sky-500', bg: 'bg-sky-50' },
  { icon: Heart, label: 'Solidarite & Entraide', color: 'text-rose-500', bg: 'bg-rose-50' },
  { icon: Zap, label: 'Entrepreneuriat', color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { icon: Home, label: 'Restauration & Bien-etre', color: 'text-emerald-500', bg: 'bg-emerald-50' },
];

const associations = [
  { title: "Association des Etudiants de l'IUA (AE-IUA)", desc: "Organe central de representation qui defend les interets des etudiants, organise des evenements et favorise le dialogue avec l'administration.", icon: Users },
  { title: 'Club des Juristes', desc: "Plaidoires, conferences juridiques, simulations de proces et concours nationaux de droit, pour les passionnes de justice.", icon: BookOpen },
  { title: "Clubs Tech & Data Science", desc: "Hackathons, projets IA, developpement d'applications : un espace pour innover, coder et creer les solutions de demain.", icon: Zap },
  { title: "Club Entrepreneuriat & Business", desc: "Ateliers, mentoring, pitch de projets et mises en reseau avec des professionnels pour developper l'esprit d'entreprendre.", icon: Star },
  { title: "Clubs Culturels & Artistiques", desc: "Theatre, musique, photographie, mode africaine : l'expression artistique libre dans toute sa diversite culturelle.", icon: Music },
];

const sportCards = [
  { icon: Trophy, color: 'bg-amber-500', textColor: 'text-amber-500', title: 'Football', desc: "Equipe competitive qui participe aux tournois universitaires nationaux. Entrainements hebdomadaires sur terrains synthetiques." },
  { icon: Award, color: 'bg-orange-500', textColor: 'text-orange-500', title: 'Basketball', desc: "Equipes mixtes, competitions inter-campus, coaching professionnel et tournois intra-muros tout au long de l'annee." },
  { icon: Zap, color: 'bg-sky-500', textColor: 'text-sky-500', title: 'Natation', desc: "Acces aux installations aquatiques, cours pour debutants et perfectionnement pour les nageurs experimentes." },
  { icon: Star, color: 'bg-purple-500', textColor: 'text-purple-500', title: 'Athletisme', desc: "Courses, sauts et lancers. Les Jeux Universitaires Africains sont l'objectif annuel de nos athletes de haut niveau." },
  { icon: Music, color: 'bg-rose-500', textColor: 'text-rose-500', title: 'Arts & Musique', desc: "Chorales, concerts, expositions photographiques et defiles de mode africaine lors des grandes journees culturelles." },
  { icon: Heart, color: 'bg-emerald-500', textColor: 'text-emerald-500', title: 'Bien-etre & Yoga', desc: "Seances de yoga, meditation pleine conscience et activites de relaxation pour un equilibre corps-esprit optimal." },
];

const internationalItems = [
  { icon: Globe, title: 'Mobilite Internationale', desc: "Programmes d'echanges avec des universites partenaires en Europe, Amerique du Nord et Asie." },
  { icon: GraduationCap, title: 'Doubles Diplomes', desc: "Conventions de co-diplomation permettant d'obtenir deux titres reconnus a l'echelle mondiale." },
  { icon: Shield, title: 'Accompagnement Visa', desc: "Service dedie pour faciliter les demarches administratives des etudiants souhaitant partir a l'etranger." },
  { icon: Award, title: 'Insertion Pro', desc: "Reseau de 350+ entreprises partenaires, stages garantis, forums emploi et coaching carriere." },
];

const metrics = [
  { n: '350+', l: 'Entreprises Partenaires', color: 'from-[#007b8f] to-teal-600' },
  { n: '15+', l: 'Universites Partenaires Monde', color: 'from-[#1a3b5c] to-sky-700' },
  { n: '95%', l: 'Insertion dans les 6 mois', color: 'from-amber-500 to-orange-500' },
  { n: '5 pays', l: 'Etudiants Internationaux', color: 'from-violet-600 to-purple-700' },
];

export function UniversityLifePage({ onBack }: UniversityLifePageProps) {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* ─── RETOUR ─── */}
      <div className="bg-[#1a3b5c] px-6 pt-6 pb-0 sm:px-10 lg:px-16">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-sky-300 transition hover:text-white group"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sky-300/40 bg-white/10 backdrop-blur-sm transition group-hover:bg-white/20">
            <ArrowLeft size={14} />
          </span>
          Retour
        </button>
      </div>

      {/* ─── IMAGE PLEINE ─── */}
      <div className="w-full bg-[#1a3b5c]">
        <img
          src="/venue-1.jpg"
          alt="Vie etudiante a l'IUA"
          className="mx-auto block w-full object-cover"
          style={{ maxHeight: '50vh', minHeight: '50vh' }}
        />
      </div>

      {/* ─── TITRE HERO (sous l'image) ─── */}
      <div className="bg-gradient-to-r from-[#1a3b5c] to-[#007b8f] px-6 py-14 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1300px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div>
            <span className="mb-4 inline-block rounded-full bg-sky-400/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-sky-300 border border-sky-400/30">
              Vie universitaire
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Vivez l&apos;IUA<br />
              <span className="text-sky-300">a plein regime</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-sky-100">
              Bien plus qu&apos;une universite, l&apos;IUA est un ecosysteme de vie ou chaque etudiant peut s&apos;epanouir, creer, se depasser et tisser des liens durables avec des etudiants venus des quatre coins d&apos;Afrique et du monde.
            </p>
          </div>
          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/10 px-6 py-4 border border-white/20 text-center">
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-sky-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── QUICK HIGHLIGHTS BAR ─── */}
      <div className="bg-white shadow-md border-b border-slate-100">
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-0 divide-x divide-slate-100">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-1 min-w-[130px] flex-col items-center gap-2 px-6 py-5 transition hover:bg-slate-50">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${h.bg} ${h.color}`}>
                <h.icon size={20} />
              </div>
              <span className="text-center text-xs font-bold text-slate-700">{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="mx-auto max-w-[1300px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section 1: Vie Associative */}
        <div className="mb-24 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-[#007b8f]">Engagement & Communaute</span>
            <h2 className="text-4xl font-extrabold text-[#1a3b5c] leading-tight">
              Vie etudiante<br />&amp; associative
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-[#007b8f]" />
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              La vie associative est au coeur de l&apos;experience IUA. Elle forge le caractere, developpe les competences sociales et offre a chaque etudiant l&apos;opportunite de prendre des responsabilites et de laisser son empreinte dans la communaute universitaire.
            </p>
            <div className="mt-8 space-y-4">
              {associations.map((item) => (
                <div key={item.title} className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:border-[#007b8f]/30 hover:shadow-md">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#007b8f] transition group-hover:bg-[#007b8f] group-hover:text-white">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1a3b5c]">{item.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative right panel */}
          <div className="relative hidden lg:block">
            <div className="absolute -top-8 -right-8 h-64 w-64 rounded-full bg-sky-50 opacity-60" />
            <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-[#007b8f]/10" />
            <div className="relative rounded-3xl bg-gradient-to-br from-[#1a3b5c] to-[#007b8f] p-10 text-white shadow-2xl">
              <GraduationCap size={40} className="mb-6 text-sky-300" />
              <h3 className="text-2xl font-extrabold leading-snug">Un campus qui vous ressemble</h3>
              <p className="mt-4 text-sm leading-relaxed text-sky-100">
                A l&apos;IUA, la diversite est une richesse. Nos etudiants viennent de toute la Cote d&apos;Ivoire, de l&apos;Afrique de l&apos;Ouest et au-dela. Cette pluralite enrichit chaque interaction, chaque projet et chaque amitie.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { n: '40+', l: 'Nationalites' },
                  { n: '30+', l: 'Associations' },
                  { n: '2009', l: 'Club Sportif' },
                  { n: '100%', l: 'Inclusion' },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-white/10 p-4 text-center">
                    <div className="text-2xl font-extrabold text-white">{s.n}</div>
                    <div className="mt-0.5 text-xs text-sky-200">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Sport & Culture */}
        <div className="mb-24">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-amber-600">Performance & Creativite</span>
            <h2 className="text-4xl font-extrabold text-[#1a3b5c]">Sport &amp; Culture</h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-amber-400" />
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">
              Depuis 2009, le Club Sportif de l&apos;IUA rassemble les etudiants autour des valeurs du sport et de la camaraderie. La culture et l&apos;art y occupent une place tout aussi importante.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sportCards.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-3xl bg-white shadow-md border border-slate-100 transition hover:shadow-xl hover:-translate-y-1 duration-300">
                <div className={`${item.color} flex h-3 w-full`} />
                <div className="p-6">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.color} bg-opacity-10`}>
                    <item.icon size={22} className={item.textColor} />
                  </div>
                  <h4 className="text-lg font-bold text-[#1a3b5c]">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Services Campus */}
        <div className="mb-24">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-emerald-600">Confort & Mobilite</span>
            <h2 className="text-4xl font-extrabold text-[#1a3b5c]">Services aux Etudiants</h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-emerald-400" />
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">
              L&apos;IUA met tout en oeuvre pour que votre quotidien soit fluide, confortable et serein, de votre domicile jusqu&apos;aux amphitheatres.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">

            {/* Transport */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white shadow-xl">
              <Bus size={36} className="mb-5 text-emerald-200" />
              <h3 className="text-xl font-extrabold">Transport Etudiant</h3>
              <p className="mt-3 text-sm leading-relaxed text-emerald-100">
                L&apos;IUA dispose de son propre reseau de navettes securisees qui dessert <strong>toutes les communes d&apos;Abidjan</strong> matin et soir, adapte aux horaires de cours.
              </p>
              <div className="mt-6 space-y-3">
                {["Navettes IUA – toutes communes", "Bus SOTRA – cartes etudiants", "Transport lagunaire (bateaux-bus)", "VTC : Yango & Uber disponibles"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-emerald-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Logement */}
            <div className="rounded-3xl bg-gradient-to-br from-[#1a3b5c] to-[#0d2840] p-8 text-white shadow-xl">
              <Home size={36} className="mb-5 text-sky-300" />
              <h3 className="text-xl font-extrabold">Logement &amp; Installation</h3>
              <p className="mt-3 text-sm leading-relaxed text-sky-100">
                L&apos;IUA accompagne ses etudiants — notamment internationaux — dans la recherche de logements a proximite des campus dans les quartiers residentiels de Cocody et Angre.
              </p>
              <div className="mt-6 space-y-3">
                {["Studios & appartements meubles", "Colocations intercampus", "Quartiers Cocody, Angre, Riviera", "Guide d'installation complet fourni"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-sky-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Numerique */}
            <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-purple-800 p-8 text-white shadow-xl">
              <Wifi size={36} className="mb-5 text-violet-200" />
              <h3 className="text-xl font-extrabold">Numerique &amp; Bien-etre</h3>
              <p className="mt-3 text-sm leading-relaxed text-violet-100">
                Tous les campus de l&apos;IUA sont equipes de Wi-Fi haut debit, de salles numeriques de derniere generation et d&apos;espaces de detente pour favoriser l&apos;equilibre etudes-vie personnelle.
              </p>
              <div className="mt-6 space-y-3">
                {["Wi-Fi haut debit sur tous les campus", "Plateforme E-learning IUA 24/7", "Cafeterias & espaces de restauration", "Centres medicaux & accompagnement"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-violet-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: International & Insertion Pro */}
        <div className="mb-24 overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 lg:p-14">
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-[#007b8f]">Mobilite & Avenir</span>
              <h2 className="text-3xl font-extrabold text-[#1a3b5c] leading-tight">
                Ouverture Internationale<br />&amp; Insertion Professionnelle
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-[#007b8f]" />
              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                L&apos;IUA entretient des partenariats avec des universites et des institutions a travers le monde, offrant a ses etudiants de nombreuses opportunites d&apos;echanges academiques, de stages a l&apos;international et de doubles diplomes.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {internationalItems.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-100 p-4 transition hover:border-[#007b8f]/40 hover:shadow-sm">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-[#007b8f]">
                      <item.icon size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-[#1a3b5c]">{item.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block bg-gradient-to-br from-[#007b8f]/10 to-sky-50">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10">
                <div className="grid grid-cols-1 gap-4 w-full">
                  {metrics.map((m) => (
                    <div key={m.l} className={`flex items-center gap-5 rounded-2xl bg-gradient-to-r ${m.color} p-5 text-white shadow-lg`}>
                      <div className="text-3xl font-extrabold">{m.n}</div>
                      <div className="text-sm font-semibold opacity-90">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA bottom */}
        <div className="rounded-3xl bg-gradient-to-r from-[#1a3b5c] via-[#007b8f] to-teal-600 p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Pret a rejoindre la communaute IUA ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-sky-100">
            Integrez un environnement universitaire ou l&apos;excellence academique et l&apos;epanouissement personnel se rejoignent pour faconner les leaders de demain.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://www.iuaci.org/admissions-et-couts/" target="_blank" rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3 text-sm font-bold text-[#1a3b5c] shadow-lg transition hover:bg-sky-50">
              Candidater a l&apos;IUA
            </a>
            <a href="https://www.iuaci.org/livret/" target="_blank" rel="noopener noreferrer"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20">
              Guide de l&apos;Etudiant
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
