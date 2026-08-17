import { ArrowUpRight, Atom, BookOpen, BrainCircuit, FlaskConical, GraduationCap, Microscope, Waves } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-slate-950">
      {/* Image acc2.png 100% claire et nette */}
      <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
        <img
          src="/acc2.png"
          alt="Bienvenue à l'Institut Universitaire d'Abidjan"
          className="h-full w-full object-cover object-[center_30%] sm:object-center opacity-100"
        />
      </div>

      {/* Ombre portée subtile en bas pour détacher le texte sans masquer la carte */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40 pointer-events-none" />

      {/* Effets lumineux de fond */}
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-12 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto min-h-[640px] max-w-[1440px] px-5 pb-12 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="relative z-10 flex min-h-[540px] flex-col justify-between">
          
          <div className="flex justify-center sm:justify-end">
            <a href="#formation" className="group flex items-center justify-between border border-white/80 bg-slate-950/60 px-6 py-4 text-left text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition hover:border-sky-300 hover:bg-sky-500/30 sm:w-[350px] whitespace-nowrap sm:gap-4 shadow-xl">
              <span>Catalogue des formations</span> <ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-7 gap-y-8 text-sky-100/90 sm:gap-x-10 lg:mt-0 lg:justify-between lg:px-10">
            {[Waves, BookOpen, Atom, BrainCircuit, FlaskConical, Microscope, GraduationCap].map((Icon, index) => <Icon key={index} size={index === 2 ? 41 : 31} strokeWidth={1.35} className="animate-float opacity-80" style={{ animationDelay: `${index * 120}ms` }} />)}
          </div>

          {/* Slogan Officiel IUA */}
          <div className="max-w-2xl drop-shadow-md">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-sky-300">Institut Universitaire d’Abidjan</p>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl">
              Nous Formons les<br />
              <span className="text-sky-300">Leaders de Demain.</span>
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
}
