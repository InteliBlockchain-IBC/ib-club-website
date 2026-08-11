import React from 'react';
import Emphasis from './Emphasis';

/* O cabeçalho de seção: rótulo de calha, título e (às vezes) o corpo.
   Sete seções usam o mesmo par, então ele mora num lugar só.

   `title` e `prose` chegam como arrays de partes — o realce vem do texto,
   porque a palavra que leva o 700 muda de lugar entre português e inglês.
   Ver Emphasis.js e a regra tipográfica da SPEC §3.3. */
export default function SectionHeader({ id, title, label, prose }) {
  return (
    <div className="heading">
      <p className="label">{label}</p>
      {/* o id existe para o <section> apontar aria-labelledby para cá: é o
          que dá nome à região na navegação por landmarks e no sumário que
          um leitor de tela monta da página */}
      <h2 className="title" id={id}><Emphasis parts={title} /></h2>
      {prose ? <p className="prose"><Emphasis parts={prose} tag="strong" /></p> : null}
    </div>
  );
}
