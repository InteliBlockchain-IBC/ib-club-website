import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import pt from './pt';
import en from './en';

const DICTIONARIES = { pt, en };
const FALLBACK = 'pt';

/* Em desenvolvimento, uma chave que existe num idioma e falta no outro
   estoura aqui em vez de renderizar `undefined` no meio da página — que é o
   jeito silencioso de uma tradução quebrar. Não roda em produção: um erro de
   texto não vale uma tela branca para quem está visitando o site. */
if (process.env.NODE_ENV !== 'production') {
  const paths = (o, base = '') => Object.entries(o).flatMap(([k, v]) => {
    const c = base ? `${base}.${k}` : k;
    return v && typeof v === 'object' && !Array.isArray(v) ? paths(v, c) : [c];
  });
  const doPt = paths(pt);
  const doEn = paths(en);
  const missing = [
    ...doPt.filter((c) => !doEn.includes(c)).map((c) => `en.js não tem "${c}"`),
    ...doEn.filter((c) => !doPt.includes(c)).map((c) => `pt.js não tem "${c}"`),
  ];
  if (missing.length) throw new Error(`Traduções fora de sincronia:\n  ${missing.join('\n  ')}`);
}

/* Ordem de decisão: ?lang na URL (é o que torna a página compartilhável em
   inglês), depois a escolha salva, depois o idioma do navegador. */
function detect() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (DICTIONARIES[fromUrl]) return fromUrl;
  const saved = window.localStorage.getItem('language');
  if (DICTIONARIES[saved]) return saved;
  return window.navigator.language.startsWith('pt') ? 'pt' : 'en';
}

const Context = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(detect);

  useEffect(() => {
    document.documentElement.lang = DICTIONARIES[language].language;
    window.localStorage.setItem('language', language);
    // mantém a URL compartilhável sem empilhar histórico a cada clique
    const url = new URL(window.location.href);
    if (language === FALLBACK) url.searchParams.delete('lang');
    else url.searchParams.set('lang', language);
    window.history.replaceState(null, '', url);
  }, [language]);

  const value = useMemo(() => ({
    language,
    t: DICTIONARIES[language],
    other: language === 'pt' ? 'en' : 'pt',
    toggle: () => setLanguage((a) => (a === 'pt' ? 'en' : 'pt')),
  }), [language]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useTranslation() {
  const v = useContext(Context);
  if (!v) throw new Error('useTranslation precisa estar dentro de <LanguageProvider>');
  return v;
}
