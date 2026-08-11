import React from 'react';
import SectionHeader from '../SectionHeader';
import { DEPARTMENTS } from '../data';
import { useTranslation } from '../i18n';

/* MOLDURAS 2 a 5. O preenchimento chapado existe só aqui na página inteira:
   a cor É a taxonomia, uma por departamento do enum Department da plataforma
   de gestão. O h3 é o único Montserrat 900 do site. */
export default function Departments() {
  const { t } = useTranslation();
  const s = t.departments;
  return (
    <section className="section rise" id="departments">
      <SectionHeader label={s.label} title={s.title} prose={s.prose} />
      <div className="departments">
        {DEPARTMENTS.map((a) => (
          <div className={`frame ${a.frame} department`} key={a.id}>
            <span className="department__num">{a.num}</span>
            <h3>{s.items[a.id].name}</h3>
            <p>{s.items[a.id].description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
