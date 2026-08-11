import React from 'react';
import Emphasis from './Emphasis';

/* O cabeçalho de seção: rótulo de calha, título e (às vezes) o corpo.
   Sete seções usam o mesmo par, então ele mora num lugar só.

   `titulo` e `corpo` chegam como arrays de partes — o realce vem do texto,
   porque a palavra que leva o 700 muda de lugar entre português e inglês.
   Ver Realce.js e a regra tipográfica da SPEC §3.3. */
export default function SectionHeader({ title, label, prose }) {
  return (
    <div className="heading">
      <p className="label">{label}</p>
      <h2 className="title"><Emphasis parts={title} /></h2>
      {prose ? <p className="prose"><Emphasis parts={prose} tag="strong" /></p> : null}
    </div>
  );
}
