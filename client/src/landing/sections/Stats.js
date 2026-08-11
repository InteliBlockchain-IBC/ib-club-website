import React from 'react';
import SectionHeader from '../SectionHeader';
import { STATS } from '../data';
import { useTranslation } from '../i18n';

/* Os quatro números moram em data.js e em nenhum outro lugar — são o dado
   com maior chance de envelhecer (SPEC §5). */
export default function Stats() {
  const { t } = useTranslation();
  const s = t.stats;
  return (
    <section className="section rise">
      <SectionHeader label={s.label} title={s.title} />
      <div className="stats">
        {STATS.map((n) => (
          <div className="stat" key={n.id}>
            <b>{n.value}</b>
            <span>{s.labels[n.id]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
