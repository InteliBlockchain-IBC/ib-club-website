/* Gera o HTML das duas versões da página depois que o Parcel empacota.
 *
 * Por que isto existe: a página é montada por React no navegador. O Googlebot
 * até executa JavaScript, mas numa segunda passada que é atrasada e limitada
 * — e os rastreadores de rede social, de mensageiro e de buscador de IA
 * simplesmente não executam. Para todos eles, uma SPA sem pré-renderização é
 * uma página em branco com um <script> dentro. Renderizando aqui, o HTML sai
 * do build já com o conteúdo, e o React apenas hidrata o que já está lá.
 *
 * Saída:
 *   dist/index.html      português, canônico em /
 *   dist/en/index.html   inglês, canônico em /en/
 *   dist/robots.txt
 *   dist/sitemap.xml
 *
 * As URLs de asset que o Parcel gera são absolutas (`/src.abc123.js`), então
 * o mesmo HTML funciona servido de uma subpasta.
 */

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const DIST = path.join(RAIZ, 'client', 'dist');
const BASE = 'https://www.inteliblockchain.org';

// ── 1 · mapa de asset original → arquivo com hash que o Parcel emitiu ──
const emitidos = fs.readdirSync(DIST);
function assetPublico(arquivo) {
  const base = path.basename(arquivo);
  const nome = base.slice(0, base.indexOf('.'));
  const ext = path.extname(base);
  const achado = emitidos.find((f) => f.startsWith(nome + '.') && f.endsWith(ext));
  if (!achado) throw new Error(`asset não encontrado no build: ${base}`);
  return '/' + achado;
}

// ── 2 · fazer o Node entender JSX e imports de asset ──
require('@babel/register')({
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'classic' }],
  ],
  extensions: ['.js'],
  only: [path.join(RAIZ, 'client', 'src')],
  cache: false,
});
['.css'].forEach((ext) => { require.extensions[ext] = () => {}; });
['.jpg', '.jpeg', '.png', '.svg', '.webp'].forEach((ext) => {
  require.extensions[ext] = (mod, arquivo) => {
    mod.exports = assetPublico(arquivo);
  };
});

const React = require('react');
const { renderToString } = require('react-dom/server');
const Landing = require(path.join(RAIZ, 'client/src/landing/Landing.js')).default;
const { DICTIONARIES } = require(path.join(RAIZ, 'client/src/landing/i18n/index.js'));

const IDIOMAS = [
  { code: 'pt', hreflang: 'pt-BR', htmlLang: 'pt-BR', rota: '/', arquivo: 'index.html', ogLocale: 'pt_BR' },
  { code: 'en', hreflang: 'en', htmlLang: 'en', rota: '/en/', arquivo: path.join('en', 'index.html'), ogLocale: 'en_US' },
];

const OG_IMAGE = BASE + assetPublico('team-posing.jpg');
const LOGO = BASE + assetPublico('logo-horizontal.png');

function escapar(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── 3 · dados estruturados: quem é o clube, em linguagem de máquina ──
// Só afirma o que o repositório e o CLAUDE.md do workspace sustentam.
function jsonLd(idioma, seo) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': BASE + '/#organizacao',
        name: 'Inteli Blockchain',
        alternateName: 'IBC',
        url: BASE + '/',
        logo: LOGO,
        image: OG_IMAGE,
        email: 'blockchain@inteli.edu.br',
        description: seo.description,
        foundingDate: '2022',
        parentOrganization: {
          '@type': 'CollegeOrUniversity',
          name: 'Inteli — Instituto de Tecnologia e Liderança',
          url: 'https://www.inteli.edu.br/',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'São Paulo',
          addressRegion: 'SP',
          addressCountry: 'BR',
        },
        sameAs: [
          'https://github.com/InteliBlockchain-IBC',
          'https://www.linkedin.com/company/inteli-blockchain',
          'https://www.instagram.com/inteli_blockchain',
        ],
        knowsAbout: [
          'Blockchain', 'Web3', 'Smart contracts', 'DeFi', 'Tokenization',
          'Hackathons', 'Ethereum', 'Solana', 'Stellar', 'Bitcoin',
          'Zero-knowledge proofs', 'Decentralized applications',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': BASE + '/#site',
        url: BASE + idioma.rota,
        name: 'Inteli Blockchain',
        inLanguage: idioma.hreflang,
        description: seo.description,
        publisher: { '@id': BASE + '/#organizacao' },
      },
    ],
  };
}

// ── 4 · o cabeçalho ──
function cabecalho(idioma, seo) {
  const canonical = BASE + idioma.rota;
  const alternates = IDIOMAS
    .map((l) => `<link rel="alternate" hreflang="${l.hreflang}" href="${BASE}${l.rota}">`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${BASE}/">`)
    .join('\n');

  return `
<!-- Marca o JS antes da primeira pintura. Como o HTML já vem renderizado, sem
     isto a página apareceria inteira por um instante e só depois as seções
     seriam escondidas para entrar animadas — um piscar em toda visita. -->
<script>document.documentElement.classList.add('js')</script>
<meta name="description" content="${escapar(seo.description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
${alternates}
<meta property="og:type" content="website">
<meta property="og:site_name" content="Inteli Blockchain">
<meta property="og:locale" content="${idioma.ogLocale}">
${IDIOMAS.filter((l) => l.code !== idioma.code).map((l) => `<meta property="og:locale:alternate" content="${l.ogLocale}">`).join('\n')}
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${escapar(seo.title)}">
<meta property="og:description" content="${escapar(seo.description)}">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:image:width" content="1440">
<meta property="og:image:height" content="679">
<meta property="og:image:alt" content="${escapar(seo.imageAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapar(seo.title)}">
<meta name="twitter:description" content="${escapar(seo.description)}">
<meta name="twitter:image" content="${OG_IMAGE}">
<meta name="twitter:image:alt" content="${escapar(seo.imageAlt)}">
<meta name="theme-color" content="#081119">
<script type="application/ld+json">${JSON.stringify(jsonLd(idioma, seo))}</script>`;
}

// ── 5 · gerar ──
const molde = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

IDIOMAS.forEach((idioma) => {
  const seo = DICTIONARIES[idioma.code].seo;
  const corpo = renderToString(React.createElement(Landing, { language: idioma.code }));

  let html = molde
    .replace(/<html[^>]*>/, `<html lang="${idioma.htmlLang}">`)
    .replace(/<title>.*?<\/title>/, `<title>${escapar(seo.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, '')
    .replace('</head>', cabecalho(idioma, seo) + '\n</head>')
    .replace('<div id="root"></div>', `<div id="root">${corpo}</div>`);

  if (!html.includes('id="root">' ) || html.includes('<div id="root"></div>')) {
    throw new Error('o conteúdo não foi injetado em #root — o molde mudou?');
  }

  const destino = path.join(DIST, idioma.arquivo);
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, html);
  console.log(`  ${idioma.arquivo.padEnd(16)} ${(html.length / 1024).toFixed(0)} KB  lang=${idioma.htmlLang}`);
});

// ── 6 · robots e sitemap ──
fs.writeFileSync(path.join(DIST, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`);

const urls = IDIOMAS.map((idioma) => `  <url>
    <loc>${BASE}${idioma.rota}</loc>
${IDIOMAS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${BASE}${l.rota}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/"/>
    <changefreq>monthly</changefreq>
    <priority>${idioma.code === 'pt' ? '1.0' : '0.9'}</priority>
  </url>`).join('\n');

fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>\n`);

console.log('  robots.txt e sitemap.xml gerados');
