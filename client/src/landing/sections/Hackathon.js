import React, { useState } from 'react';
import SectionHeader from '../SectionHeader';
import { PROJECTS, GITHUB_ORG } from '../data';
import { useTranslation } from '../i18n';

export default function Hackathon() {
  const { t } = useTranslation();
  const s = t.hackathon;
  /* "ver mais" só aparece ≤560px (a regra está na folha). Reduz o que é
     mostrado de cara, não o conteúdo: um clique revela o resto. */
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section rise">
      <SectionHeader label={s.label} title={s.title} prose={s.prose} />

      <div className={`grid${expanded ? ' grid--all' : ''}`} id="projectGrid">
        {PROJECTS.map((p) => {
          const text = t.projects[p.id];
          return (
            <a className="project" key={p.id} href={p.href} target="_blank" rel="noopener">
              <p className="label">{text.label}</p>
              <h3>{p.name}</h3>
              <p>{text.description}</p>
              <span className="project__cta">{text.cta || s.cta}</span>
            </a>
          );
        })}
      </div>

      <button
        className="project-more"
        type="button"
        aria-expanded={expanded}
        aria-controls="projectGrid"
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? s.seeLess : s.seeMore(PROJECTS.length - 6)}
      </button>

      <a className="secondary" href={GITHUB_ORG} target="_blank" rel="noopener">
        {s.all}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </section>
  );
}
