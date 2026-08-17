import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/acc2.png',
    kicker: 'Institut Universitaire d’Abidjan',
    title: 'Nous Formons les',
    highlight: 'Leaders de Demain.',
  },
  {
    image: 'https://images.pexels.com/photos/8197551/pexels-photo-8197551.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    kicker: 'Excellence académique',
    title: 'Un campus tourné vers',
    highlight: 'l’international.',
  },
  {
    image: 'https://images.pexels.com/photos/5940844/pexels-photo-5940844.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    kicker: 'Vie étudiante',
    title: 'L’entrepreneuriat au',
    highlight: 'cœur de la formation.',
  },
];

/**
 * Bandeau d'accueil en "image défilante" (carrousel automatique),
 * conformément à la maquette manuscrite.
 */
export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => setActive((i + slides.length) % slides.length);

  return (
    <section id="accueil" className="relative overflow-hidden bg-slate-950">
      {/* Image défilante */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover object-[center_30%] sm:object-center"
          />
        </div>
      ))}

      {/* Ombre portée subtile pour détacher le texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40 pointer-events-none" />
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-12 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto flex min-h-[560px] max-w-[1440px] flex-col justify-between px-5 pb-12 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="flex justify-center sm:justify-end">
          <a href="#formation" className="group flex items-center justify-between border border-white/80 bg-slate-950/60 px-6 py-4 text-left text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition hover:border-sky-300 hover:bg-sky-500/30 sm:w-[350px] whitespace-nowrap sm:gap-4 shadow-xl">
            <span>Catalogue des formations</span> <ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Slogan (change avec le slide actif) */}
        <div className="max-w-2xl drop-shadow-md">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-sky-300">{slides[active].kicker}</p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl">
            {slides[active].title}<br />
            <span className="text-sky-300">{slides[active].highlight}</span>
          </h1>
        </div>

        {/* Contrôles du carrousel */}
        <div className="mt-10 flex items-center justify-center gap-6 sm:justify-start">
          <button
            aria-label="Image précédente"
            onClick={() => goTo(active - 1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/40 text-white transition hover:border-sky-300 hover:text-sky-300"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Aller à l'image ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${i === active ? 'w-7 bg-sky-400' : 'w-2 bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>
          <button
            aria-label="Image suivante"
            onClick={() => goTo(active + 1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/40 text-white transition hover:border-sky-300 hover:text-sky-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
