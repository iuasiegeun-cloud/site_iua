const stats = [
  { value: '11 000+', label: 'étudiants' },
  { value: '5', label: 'campus' },
  { value: '25+', label: 'formations' },
  { value: '100+', label: 'enseignants-chercheurs' },
  { value: '350+', label: 'entreprises partenaires' },
  { value: '10', label: 'partenaires académiques' },
  { value: '4', label: 'accréditations' },
  { value: '20', label: 'ans d’excellence' },
];

/**
 * Bandeau de chiffres-clés pleine largeur, positionné juste avant le footer
 * (même emplacement que la section "55 000 étudiantes et étudiants..." sur sorbonne-universite.fr).
 */
export function StatsBand() {
  return (
    <section className="border-t border-slate-200 bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-black text-white sm:text-4xl">{value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
