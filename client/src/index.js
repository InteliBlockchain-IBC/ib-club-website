import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import Landing from './landing/Landing';
import { languageFromPath } from './landing/i18n';

/* Marca que o JavaScript assumiu. A folha de estilo usa isto para decidir se
   as seções entram animadas (a partir de opacity:0) ou já aparecem prontas —
   sem script, o HTML pré-renderizado precisa ser visível. */
document.documentElement.classList.add('js');

const container = document.getElementById('root');
const language = languageFromPath(window.location.pathname);

/* O HTML já vem pronto do build (scripts/prerender.js). Quando ele está lá,
   hidratar aproveita a árvore existente em vez de jogar fora e remontar; o
   idioma vem do mesmo caminho de URL nos dois lados, então não há divergência
   entre o que foi pré-renderizado e o que o React espera.

   O createRoot continua como saída para o caso de a página ser servida sem a
   pré-renderização — em desenvolvimento, por exemplo. */
if (container.hasChildNodes()) {
  hydrateRoot(container, <Landing language={language} />);
} else {
  createRoot(container).render(<Landing language={language} />);
}
