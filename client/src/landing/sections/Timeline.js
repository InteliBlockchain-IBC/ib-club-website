import React from 'react';
import SectionHeader from '../SectionHeader';
import { MILESTONES } from '../data';
import { useTranslation } from '../i18n';

export default function Timeline() {
  const { t } = useTranslation();
  const s = t.history;
  return (
    <section className="section rise" id="history">
      <SectionHeader label={s.label} title={s.title} />
      <div>
        {MILESTONES.map((m) => (
          <div className={`milestone${m.current ? ' milestone--current' : ''}`} key={m.year}>
            <b>{m.year}</b>
            <ul>
              {s.milestones[m.year].map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
