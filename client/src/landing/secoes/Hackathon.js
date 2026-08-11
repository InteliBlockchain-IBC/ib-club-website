import React, { useState } from 'react';
import Cabeca from '../Cabeca';
import { PROJETOS, GITHUB_ORG } from '../dados';
import { useTextos } from '../textos';

export default function Hackathon() {
  const { t } = useTextos();
  const s = t.hackathon;
  /* "ver mais" só aparece ≤560px (a regra está na folha). Reduz o que é
     mostrado de cara, não o conteúdo: um clique revela o resto. */
  const [tudo, setTudo] = useState(false);

  return (
    <section className="secao sobe">
      <Cabeca rotulo={s.rotulo} titulo={s.titulo} corpo={s.corpo} />

      <div className={`reticulo${tudo ? ' reticulo--tudo' : ''}`} id="reticuloProjetos">
        {PROJETOS.map((p) => {
          const texto = t.projetos[p.id];
          return (
            <a className="proj" key={p.id} href={p.href} target="_blank" rel="noopener">
              <p className="rotulo">{texto.rotulo}</p>
              <h3>{p.nome}</h3>
              <p>{texto.descricao}</p>
              <span className="proj__ir">{texto.ir || s.ir}</span>
            </a>
          );
        })}
      </div>

      <button
        className="proj-mais"
        type="button"
        aria-expanded={tudo}
        aria-controls="reticuloProjetos"
        onClick={() => setTudo((v) => !v)}
      >
        {tudo ? s.verMenos : s.verMais(PROJETOS.length - 6)}
      </button>

      <a className="secundario" href={GITHUB_ORG} target="_blank" rel="noopener">
        {s.todos}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </section>
  );
}
