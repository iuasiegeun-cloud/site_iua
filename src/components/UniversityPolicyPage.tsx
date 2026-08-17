import { ArrowLeft, Target, ShieldCheck, Award, Users, BookOpen } from 'lucide-react';

interface UniversityPolicyPageProps {
  onBack: () => void;
}

export function UniversityPolicyPage({ onBack }: UniversityPolicyPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
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

      {/* ─── HEADER ─── */}
      <div className="bg-gradient-to-r from-[#1a3b5c] to-[#007b8f] px-6 py-20 text-white sm:px-10 lg:px-16 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-sky-400/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-sky-300 border border-sky-400/30">
            Vision & Orientations Strategiques
          </span>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl mt-4">
            Politique de l&apos;Institut Universitaire d&apos;Abidjan
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-sky-100">
            Decouvrez la vision, les engagements institutionnels et la mission qui guident chaque action de notre universite depuis sa creation.
          </p>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="mx-auto max-w-[1000px] px-5 py-16 sm:px-8 lg:px-12">
        
        {/* Mot du President */}
        <div className="mb-16 rounded-3xl bg-white p-8 md:p-12 shadow-lg border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <BookOpen size={120} />
          </div>
          <h2 className="text-3xl font-extrabold text-[#1a3b5c] mb-6 relative z-10">La Vision de l&apos;IUA</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed relative z-10 text-justify">
            <p>
              <strong>Mot du Président :</strong><br/><br/>
              Bienvenue a l&apos;Institut Universitaire d&apos;Abidjan, ou chaque ambition trouve son chemin. Depuis 2004, notre engagement est de vous accompagner dans la construction d&apos;un avenir solide et epanouissant. L&apos;IUA, c&apos;est plus qu&apos;une institution academique ; c&apos;est un espace ou vos idees prennent vie, ou vos talents s&apos;affinent, et ou votre potentiel s&apos;epanouit.
            </p>
            <p>
              Notre institution s&apos;engage a vous offrir une formation d&apos;excellence, ancree dans les realites du monde contemporain et tournee vers l&apos;avenir. Nous croyons en une education qui allie rigueur academique et developpement personnel. Nos programmes sont concus pour vous doter des competences necessaires pour relever les defis du monde professionnel. 
            </p>
            <p>
              Au-dela des cours, la vie etudiante a l&apos;IUA est riche en experiences : clubs, associations, evenements culturels et sportifs, tout est mis en oeuvre pour favoriser votre epanouissement. En choisissant l&apos;IUA, vous faites le choix d&apos;une communaute dynamique, d&apos;un reseau de partenaires solides et d&apos;une formation reconnue.
            </p>
            <p className="pt-4 font-bold text-[#1a3b5c]">
              — Dr Aka KOUAME, Fondateur et President de l&apos;IUA
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-3xl bg-[#f8fafc] p-8 border border-slate-200">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-[#007b8f] mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[#1a3b5c] mb-4">Notre Mission</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              Depuis sa creation en 2004, l&apos;IUA s&apos;engage a former des leaders capables de transformer leur environnement. Notre mission est d&apos;offrir une education de qualite, alliant excellence academique et developpement personnel, pour preparer nos etudiants a relever les defis du monde contemporain.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f8fafc] p-8 border border-slate-200">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 mb-6">
              <Award size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[#1a3b5c] mb-4">Votre Reussite</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              Grace a des programmes accredites et des partenariats solides avec diverses institutions (nationales et internationales), nous visons a garantir l&apos;insertion professionnelle et le succes de chaque apprenant.
            </p>
          </div>
        </div>

        {/* Accreditations & Partenariats */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1a3b5c] to-[#0d2840] p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0">
            <ShieldCheck size={80} className="text-sky-300 opacity-80" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold mb-4">Reconnaissances et Cadre Institutionnel</h3>
            <p className="text-sky-100 leading-relaxed text-justify mb-4">
              L&apos;IUA applique une politique de gestion et d&apos;evaluation rigoureuse. Derriere chaque grande institution se trouve une equipe devouee et passionnee. Notre equipe administrative joue un role central pour assurer le bon fonctionnement de l&apos;universite, veiller a l&apos;application des reglements, et accompagner chaque etudiant dans son parcours, garantissant ainsi un cadre d&apos;etude sain et propice a la reussite.
            </p>
            <div className="flex gap-4 mt-6">
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                <Users size={16} /> Equipe Devouee
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                <Award size={16} /> Programmes Accredites
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
