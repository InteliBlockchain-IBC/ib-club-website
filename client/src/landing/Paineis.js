import React from 'react';

/* A grade de dois painéis de canto reto (.ritmo). Aparece duas vezes na
   página — em "Quem constrói" e em "O ritmo" — com conteúdos diferentes. */
export default function Paineis({ paineis }) {
  return (
    <div className="ritmo">
      {paineis.map((p) => (
        <div className="painel" key={p.titulo}>
          <p className="rotulo">{p.rotulo}</p>
          <h3>{p.titulo}</h3>
          <p>{p.texto}</p>
        </div>
      ))}
    </div>
  );
}
