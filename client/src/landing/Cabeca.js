import React from 'react';

/* O cabeçalho de seção: rótulo de calha, título e (às vezes) o corpo.
   Sete seções usam o mesmo par, então ele mora num lugar só.

   A última palavra do título vai em <b> — é a regra tipográfica da SPEC §3.3
   (Montserrat 300 com o remate em 700), não enfeite. Por isso `titulo` recebe
   JSX e não string: quem escreve a seção decide onde o 700 cai. */
export default function Cabeca({ rotulo, titulo, children }) {
  return (
    <div className="cabeca">
      <p className="rotulo">{rotulo}</p>
      <h2 className="titulo">{titulo}</h2>
      {children ? <p className="corpo">{children}</p> : null}
    </div>
  );
}
