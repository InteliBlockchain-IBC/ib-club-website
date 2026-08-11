import React from 'react';
import Cabeca from '../Cabeca';
import { MARCOS } from '../dados';

export default function LinhaDoTempo() {
  return (
    <section className="secao sobe" id="historia">
      <Cabeca rotulo="Histórico" titulo={<>De 2022 até <b>agora</b></>} />
      <div>
        {MARCOS.map((m) => (
          <div className={`marco${m.atual ? ' marco--atual' : ''}`} key={m.ano}>
            <b>{m.ano}</b>
            <ul>
              {m.itens.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
