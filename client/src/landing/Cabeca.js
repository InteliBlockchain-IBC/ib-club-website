import React from 'react';
import Realce from './Realce';

/* O cabeçalho de seção: rótulo de calha, título e (às vezes) o corpo.
   Sete seções usam o mesmo par, então ele mora num lugar só.

   `titulo` e `corpo` chegam como arrays de partes — o realce vem do texto,
   porque a palavra que leva o 700 muda de lugar entre português e inglês.
   Ver Realce.js e a regra tipográfica da SPEC §3.3. */
export default function Cabeca({ titulo, rotulo, corpo }) {
  return (
    <div className="cabeca">
      <p className="rotulo">{rotulo}</p>
      <h2 className="titulo"><Realce partes={titulo} /></h2>
      {corpo ? <p className="corpo"><Realce partes={corpo} tag="strong" /></p> : null}
    </div>
  );
}
