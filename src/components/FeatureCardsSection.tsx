import { ArrowRight } from 'lucide-react';

const features = [
  {
    tag: 'Institut',
    title: 'Un établissement d’excellence',
    text: 'L’IUA est aujourd’hui l’un des instituts privés les plus reconnus de Côte d’Ivoire, agréé par le MESRS et homologué CAMES depuis sa création en 2004.',
    image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: '#universite',
  },
  {
    tag: 'International',
    title: 'Une université ouverte sur le monde',
    text: 'L’IUA multiplie les partenariats académiques avec des universités au Canada, en France, au Japon et en Russie pour la mobilité de ses étudiants.',
    image: 'https://images.pexels.com/photos/8197551/pexels-photo-8197551.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: '#partenaires',
  },
  {
    tag: 'Reconnaissance',
    title: 'Une reconnaissance qui progresse',
    text: 'Mention "Bien" lors de l’évaluation officielle du MESRS et diplômes reconnus dans plus de 18 pays africains francophones grâce au CAMES.',
    image: 'https://images.pexels.com/photos/5940844/pexels-photo-5940844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: '#actualites',
  },
];

/**
 * Bloc de 3 cartes juste sous le Hero (image + tag + titre + texte + lien),
 * inspiré de la section d'introduction de uphf.fr.
 */
export function FeatureCardsSection() {
  return (
    <section className="relative z-10 -mt-16 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map(({ tag, title, text, image, href }) => (
            <a
              key={title}
              href={href}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(15,23,42,0.14)] transition hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(14,165,233,0.22)]"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-[0.14em] text-sky-200">
                  {tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-sky-700">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700">
                  En savoir + <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
