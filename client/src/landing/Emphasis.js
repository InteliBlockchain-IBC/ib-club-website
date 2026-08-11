import React from 'react';

/* Renderiza ['normal ', 'forte', ' normal'] como: normal <b>forte</b> normal.

   Os índices ímpares vão em negrito. A posição do realce é dado de tradução,
   não de marcação, porque ela muda de lugar entre os idiomas: em português o
   remate do título cai na última palavra, em inglês nem sempre. */
export default function Emphasis({ parts, tag: Tag = 'b' }) {
  return (
    <>
      {parts.map((p, i) => (
        i % 2 ? <Tag key={i}>{p}</Tag> : <React.Fragment key={i}>{p}</React.Fragment>
      ))}
    </>
  );
}
