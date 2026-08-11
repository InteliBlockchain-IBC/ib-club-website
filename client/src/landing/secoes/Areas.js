import React from 'react';
import Cabeca from '../Cabeca';
import { AREAS } from '../dados';

/* MOLDURAS 2 a 5. O preenchimento chapado existe só aqui na página inteira:
   a cor É a taxonomia, uma por departamento do enum Department da plataforma
   de gestão. O h3 é o único Montserrat 900 do site. */
export default function Areas() {
  return (
    <section className="secao sobe" id="areas">
      <Cabeca rotulo="Estrutura" titulo={<>Organizados para construir <b>comunidade</b></>}>
        Quatro áreas, e nenhuma delas entrega sozinha. Juntas cobrem os lados de
        que uma comunidade web3 precisa para se sustentar: quem ensina, quem
        constrói, quem comunica e quem cuida das pessoas.
      </Cabeca>

      <div className="areas">
        {AREAS.map((a) => (
          <div className={`mold ${a.mold} area`} key={a.nome}>
            <span className="area__ord">{a.ord}</span>
            <h3>{a.nome}</h3>
            <p>{a.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
