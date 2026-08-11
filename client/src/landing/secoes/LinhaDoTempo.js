import React from 'react';
import Cabeca from '../Cabeca';
import { MARCOS } from '../dados';
import { useTextos } from '../textos';

export default function LinhaDoTempo() {
  const { t } = useTextos();
  const s = t.historia;
  return (
    <section className="secao sobe" id="historia">
      <Cabeca rotulo={s.rotulo} titulo={s.titulo} />
      <div>
        {MARCOS.map((m) => (
          <div className={`marco${m.atual ? ' marco--atual' : ''}`} key={m.ano}>
            <b>{m.ano}</b>
            <ul>
              {s.marcos[m.ano].map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
