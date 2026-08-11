import React, { createContext, useContext, useMemo } from 'react';
import pt from './pt';
import en from './en';

export const DICTIONARIES = { pt, en };
export const FALLBACK = 'pt';

/* Cada idioma tem URL própria: `/` é português e `/en/` é inglês.

   Isso não é preferência de estilo, é o que torna os dois indexáveis. Com um
   único endereço e o idioma guardado no navegador, existe uma página só aos
   olhos de um buscador, e a versão em inglês simplesmente não é encontrada.
   Com dois caminhos, cada um é canônico de si mesmo e o `hreflang` do
   cabeçalho amarra os dois.

   Também não há redirecionamento automático por idioma do navegador. Ele
   quebra rastreamento (o robô vem de fora e é jogado para outra página) e
   tira do visitante a escolha. Quem decide é a URL; o seletor é um link de
   verdade, e é assim que o buscador descobre a outra versão. */

export const BASE = 'https://www.inteliblockchain.org';
export const PATHS = { pt: '/', en: '/en/' };

export function languageFromPath(pathname) {
  return /^\/en(\/|$)/.test(pathname) ? 'en' : FALLBACK;
}

/* Em desenvolvimento, uma chave que existe num idioma e falta no outro
   estoura aqui em vez de renderizar `undefined` no meio da página — que é o
   jeito silencioso de uma tradução quebrar. Não roda em produção: um erro de
   texto não vale uma tela branca para quem está visitando o site. */
if (process.env.NODE_ENV !== 'production') {
  const paths = (o, base = '') => Object.entries(o).flatMap(([k, v]) => {
    const c = base ? `${base}.${k}` : k;
    return v && typeof v === 'object' && !Array.isArray(v) ? paths(v, c) : [c];
  });
  const inPt = paths(pt);
  const inEn = paths(en);
  const missing = [
    ...inPt.filter((c) => !inEn.includes(c)).map((c) => `en.js não tem "${c}"`),
    ...inEn.filter((c) => !inPt.includes(c)).map((c) => `pt.js não tem "${c}"`),
  ];
  if (missing.length) throw new Error(`Traduções fora de sincronia:\n  ${missing.join('\n  ')}`);
}

const Context = createContext(null);

/* `language` vem de fora: no navegador, do caminho da URL; na pré-renderização,
   do idioma que está sendo gerado. Os dois chegam ao mesmo valor para a mesma
   URL, que é o que faz a hidratação casar sem remontar a página. */
export function LanguageProvider({ language, children }) {
  const value = useMemo(() => {
    const other = language === 'pt' ? 'en' : 'pt';
    return {
      language,
      t: DICTIONARIES[language],
      other,
      otherPath: PATHS[other],
    };
  }, [language]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useTranslation() {
  const v = useContext(Context);
  if (!v) throw new Error('useTranslation precisa estar dentro de <LanguageProvider>');
  return v;
}
