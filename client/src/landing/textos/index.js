import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import pt from './pt';
import en from './en';

const TEXTOS = { pt, en };
const PADRAO = 'pt';

/* Em desenvolvimento, uma chave que existe num idioma e falta no outro
   estoura aqui em vez de renderizar `undefined` no meio da página — que é o
   jeito silencioso de uma tradução quebrar. Não roda em produção: um erro de
   texto não vale uma tela branca para quem está visitando o site. */
if (process.env.NODE_ENV !== 'production') {
  const caminhos = (o, base = '') => Object.entries(o).flatMap(([k, v]) => {
    const c = base ? `${base}.${k}` : k;
    return v && typeof v === 'object' && !Array.isArray(v) ? caminhos(v, c) : [c];
  });
  const doPt = caminhos(pt);
  const doEn = caminhos(en);
  const faltando = [
    ...doPt.filter((c) => !doEn.includes(c)).map((c) => `en.js não tem "${c}"`),
    ...doEn.filter((c) => !doPt.includes(c)).map((c) => `pt.js não tem "${c}"`),
  ];
  if (faltando.length) throw new Error(`Traduções fora de sincronia:\n  ${faltando.join('\n  ')}`);
}

/* Ordem de decisão: ?lang na URL (é o que torna a página compartilhável em
   inglês), depois a escolha salva, depois o idioma do navegador. */
function detectar() {
  const daUrl = new URLSearchParams(window.location.search).get('lang');
  if (TEXTOS[daUrl]) return daUrl;
  const salvo = window.localStorage.getItem('idioma');
  if (TEXTOS[salvo]) return salvo;
  return window.navigator.language.startsWith('pt') ? 'pt' : 'en';
}

const Contexto = createContext(null);

export function ProvedorDeIdioma({ children }) {
  const [idioma, definir] = useState(detectar);

  useEffect(() => {
    document.documentElement.lang = TEXTOS[idioma].idioma;
    window.localStorage.setItem('idioma', idioma);
    // mantém a URL compartilhável sem empilhar histórico a cada clique
    const url = new URL(window.location.href);
    if (idioma === PADRAO) url.searchParams.delete('lang');
    else url.searchParams.set('lang', idioma);
    window.history.replaceState(null, '', url);
  }, [idioma]);

  const valor = useMemo(() => ({
    idioma,
    t: TEXTOS[idioma],
    outro: idioma === 'pt' ? 'en' : 'pt',
    alternar: () => definir((a) => (a === 'pt' ? 'en' : 'pt')),
  }), [idioma]);

  return <Contexto.Provider value={valor}>{children}</Contexto.Provider>;
}

export function useTextos() {
  const v = useContext(Contexto);
  if (!v) throw new Error('useTextos precisa estar dentro de <ProvedorDeIdioma>');
  return v;
}
