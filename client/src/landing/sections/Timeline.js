import React from 'react';
import SectionHeader from '../SectionHeader';
import { MILESTONES } from '../data';
import { useTranslation } from '../i18n';

export default function Timeline() {
  const { t } = useTranslation();
  const s = t.history;
  return (
    <section className="section rise" id="history" aria-labelledby="h-history">
      <SectionHeader id="h-history" label={s.label} title={s.title} />
      <ol className="timeline">
        {MILESTONES.map((m) => (
          <li className={`milestone${m.current ? ' milestone--current' : ''}`} key={m.year}>
            <time dateTime={m.year}>{m.year}</time>
            <ul>
              {s.milestones[m.year].map((i) => <li key={i}>{i}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
