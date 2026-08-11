import React from 'react';
import Cabeca from '../Cabeca';
import { AREAS } from '../dados';
import { useTextos } from '../textos';

/* MOLDURAS 2 a 5. O preenchimento chapado existe só aqui na página inteira:
   a cor É a taxonomia, uma por departamento do enum Department da plataforma
   de gestão. O h3 é o único Montserrat 900 do site. */
export default function Areas() {
  const { t } = useTextos();
  const s = t.areas;
  return (
    <section className="secao sobe" id="areas">
      <Cabeca rotulo={s.rotulo} titulo={s.titulo} corpo={s.corpo} />
      <div className="areas">
        {AREAS.map((a) => (
          <div className={`mold ${a.mold} area`} key={a.id}>
            <span className="area__ord">{a.ord}</span>
            <h3>{s.lista[a.id].nome}</h3>
            <p>{s.lista[a.id].descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
