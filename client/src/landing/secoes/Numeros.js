import React from 'react';
import Cabeca from '../Cabeca';
import { NUMEROS } from '../dados';

/* Os quatro números moram em dados.js e em nenhum outro lugar — são o dado
   com maior chance de envelhecer (SPEC §5). */
export default function Numeros() {
  return (
    <section className="secao sobe">
      <Cabeca rotulo="Números" titulo={<>Onde o clube <b>chegou</b></>} />
      <div className="numeros">
        {NUMEROS.map((n) => (
          <div className="numero" key={n.rotulo}>
            <b>{n.valor}</b>
            <span>{n.rotulo}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
