import React, { useState } from 'react';
import Cabeca from '../Cabeca';
import { PROJETOS } from '../dados';

export default function Hackathon() {
  /* "ver mais" só aparece ≤560px (a regra está na folha). Reduz o que é
     mostrado de cara, não o conteúdo: um clique revela o resto. */
  const [tudo, setTudo] = useState(false);

  return (
    <section className="secao sobe">
      <Cabeca rotulo="Entregas" titulo={<>Feito em <b>hackathon</b></>}>
        Doze dos vinte e cinco, em seis redes diferentes. Todos com código
        aberto e link direto para o repositório.
      </Cabeca>

      <div
        className={`reticulo${tudo ? ' reticulo--tudo' : ''}`}
        id="reticuloProjetos"
      >
        {PROJETOS.map((p) => (
          <a className="proj" key={p.nome} href={p.href} target="_blank" rel="noopener">
            <p className="rotulo">{p.rotulo}</p>
            <h3>{p.nome}</h3>
            <p>{p.descricao}</p>
            <span className="proj__ir">{p.ir || 'GitHub →'}</span>
          </a>
        ))}
      </div>

      <button
        className="proj-mais"
        type="button"
        aria-expanded={tudo}
        aria-controls="reticuloProjetos"
        onClick={() => setTudo((v) => !v)}
      >
        {tudo ? 'Ver menos' : `Ver mais ${PROJETOS.length - 6} projetos`}
      </button>

      <a
        className="secundario"
        href="https://github.com/InteliBlockchain-IBC"
        target="_blank"
        rel="noopener"
      >
        Os 25 no GitHub
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </section>
  );
}
