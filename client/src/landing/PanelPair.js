import React from 'react';

/* A grade de dois painéis de canto reto (.panels). Aparece duas vezes na
   página — em "Quem constrói" e em "O panels" — com conteúdos diferentes. */
export default function PanelPair({ panels }) {
  return (
    <div className="panels">
      {panels.map((p) => (
        <div className="panel" key={p.title}>
          <p className="label">{p.label}</p>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
        </div>
      ))}
    </div>
  );
}
