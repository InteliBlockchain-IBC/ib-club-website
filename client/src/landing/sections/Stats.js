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
    <section className="section rise" aria-labelledby="h-stats">
      <SectionHeader id="h-stats" label={s.label} title={s.title} />
      {/* <dl> e não <div>: cada item é um par nome/valor, que é literalmente
          o que uma lista de descrição descreve. O <dt> vem antes do <dd> por
          exigência do HTML; quem inverte para o valor aparecer em cima é o
          column-reverse na folha. */}
      <dl className="stats">
        {STATS.map((n) => (
          <div className="stat" key={n.id}>
            <dt>{s.labels[n.id]}</dt>
            <dd>{n.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
