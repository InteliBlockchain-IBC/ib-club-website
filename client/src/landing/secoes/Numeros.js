import React from 'react';
import Cabeca from '../Cabeca';
import { NUMEROS } from '../dados';
import { useTextos } from '../textos';

/* Os quatro números moram em dados.js e em nenhum outro lugar — são o dado
   com maior chance de envelhecer (SPEC §5). */
export default function Numeros() {
  const { t } = useTextos();
  const s = t.numeros;
  return (
    <section className="secao sobe">
      <Cabeca rotulo={s.rotulo} titulo={s.titulo} />
      <div className="numeros">
        {NUMEROS.map((n) => (
          <div className="numero" key={n.id}>
            <b>{n.valor}</b>
            <span>{s.rotulos[n.id]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
