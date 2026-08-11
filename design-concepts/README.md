# Modelos de landing page — Inteli Blockchain

Três propostas completas de landing page, mais a auditoria do site atual que
motivou cada decisão. Nada aqui está plugado no app React — são páginas HTML
independentes, feitas para escolher direção antes de escrever componente.

**Abra `index.html` no navegador.** Não precisa de build, servidor nem `npm install`.

```
design-concepts/
├── index.html              ← comparação das três direções
├── modelo-a-dossie.html
├── modelo-b-moldura.html
├── modelo-c-malha.html
└── assets/                 ← extraídos de design/ e recortados
    ├── logo-horizontal-claro.png
    ├── logo-horizontal-escuro.png
    ├── marca-gradiente.png   (o nó, sozinho)
    └── mascote.png
```

---

## 1. Fontes consultadas

| Fonte | O que saiu de lá |
| --- | --- |
| `design/Guia de Estilos - Blockchain 2026 (1).pdf` (12 páginas) | Paleta, tipografia, moldura, ícones, malha de fundo, mascote |
| `design/link_canva.md` | É um encurtador; resolve para `canva.com/design/DAGzjZ10pBM`, que é o ID gravado nos metadados do PDF — **mesmo documento**. O link é de edição e exige login, mas o PDF exportado tem as 12 páginas completas, então nada se perdeu. |
| `design/Guia de Estilos Inteli Blockchain 2025 (1..9).png` | Variações da logomarca e o PNG limpo do mascote com fundo transparente |
| `projetos/ib-club-website/` | Projetos, parceiros, linha do tempo e números — conteúdo real, não placeholder |
| `CLAUDE.md` do workspace | Missão, as quatro áreas, ritmo de aulas e projetos, domínio institucional |

---

## 2. O guia de estilos, destilado

**Paleta 2026**

| Hex | Papel |
| --- | --- |
| `#081119` | Fundo principal |
| `#13293d` | Superfície / painéis |
| `#247ba0` | Azul médio |
| `#006494` | Azul profundo |
| `#1b98e0` | Destaque |
| `#e8f1f2` | Texto |
| `#9f0e5d` | Acento secundário |
| `#380f2e` | Só na paleta Educacional — não usado nos modelos |

**Tipografia** — Montserrat como display, em seis espécimes no guia, e Open Sans
como apoio.
O guia manda "brincar com cores e negritos que ajudem a entender o objetivo".

**Moldura** — borda 3, arredondamento **0 ou 20** (nenhum outro valor), com sombra
sólida deslocada em ciano ou magenta. "Tente aplicar formatos parecidos."

**Ícones** — linhas grossas, formatos arredondados, preferência por preenchidos.

**Malha de fundo** — triângulos, hexágonos e losangos em contorno fino, baixa
opacidade, adensando de um lado. Aparece em toda página do guia.

**Marca** — o nó (gradiente teal→roxo, ou mono branco/preto) e o monograma IBC.

**Mascote** — ornitorrinco de terno, boina e visor ciano. O ativo mais próprio
que o clube tem.

---

## 3. Auditoria do site atual

`client/src/index.css` tem 3787 linhas e `App.js` 473. O que está errado:

**Marca**

1. **A paleta do guia não aparece em lugar nenhum.** O CSS usa `#3b82f6`,
   `#667eea → #764ba2`, `#f093fb → #f5576c` e `#4facfe → #00f2fe` — nenhum
   deles é cor do Inteli Blockchain. O roxo-azul `667eea → 764ba2` é o gradiente
   default que aparece em milhares de templates.
2. **Tipografia errada.** Inter + JetBrains Mono. O guia pede Montserrat + Open Sans.
3. **A logomarca é um JPEG de 428px com fundo chapado embutido.**
   `imgs/inteliblcok.jpg` é o nó da marca rasterizado, com um quadrado escuro por
   baixo que reaparece em qualquer superfície clara. Serve de logo na navbar, no
   rodapé de seis telas e de favicon. Os arquivos limpos da marca nunca entraram
   no repositório.
4. **O mascote não existe no site.** Zero ocorrências.
5. **Modo claro sem base na marca.** O guia é integralmente escuro; o `light-mode`
   do site foi inventado do zero e não tem paleta definida em lugar nenhum.
6. **Nenhum recurso visual do guia é usado** — nem a malha, nem a moldura com
   sombra deslocada, nem o estilo de ícone.

**Justamente o que você pediu para evitar, já está no site**

7. `hero-title` é texto com `background-clip:text` sobre gradiente roxo, centralizado,
   com um `radial-gradient` de brilho atrás. É o hero-template genérico.
8. **"Conectar carteira" é a ação principal da navbar** de uma liga estudantil.
   E a página que ele destrava está sempre vazia: `Conquistas.js` abre com
   `const mockNfts = []`, e não existe outro caminho até ela.

**Técnico**

9. Sem tokens de design: cor escrita à mão ao longo de 3787 linhas de um único CSS.
10. `parcel-bundler@1.12` — sem manutenção desde 2021.
11. `@thirdweb-dev/react` e `@thirdweb-dev/sdk` instalados e nunca importados
    (o código usa `ethers` direto).
12. As fotos dos membros são 41 hotlinks para `media.licdn.com`. Quarenta
    expiraram em 4 de setembro de 2025 e o outro em 12 de agosto do mesmo ano.
    **Já quebraram todas.**

---

## 4. As três direções

Todas partilham paleta, tipografia, conteúdo e regras de acessibilidade. O que
muda é a tese.

### A — Dossiê

O mascote é um operador de terno; a página se lê como um dossiê sobre um clube
que entrega. Assimétrica, com calha de rótulos à esquerda, fio de cabelo como
divisor e Montserrat 900 apertado.

- **Assinatura:** a *linha de visada* — um fio ciano de 2px na altura do visor do
  mascote, que reaparece como divisor de cabeçalho em toda seção.
- **Manchete:** "Aula toda semana. Projeto todo mês." — descreve o ritmo real do
  clube (aulas semanais, ciclos mensais), não uma promessa.
- **Projetos como lista editorial**, não como cards.
- **Numeração** só na linha do tempo e na lista de projetos, onde a ordem
  significa alguma coisa.

### B — Moldura

A moldura do guia vira o sistema inteiro: tudo na página é um quadro com borda 3,
canto 0 ou 20 e sombra sólida deslocada em ciano ou magenta. Cor chapada, zero
gradiente, zero brilho. Lê como um conjunto de cartazes impressos.

- **Assinatura:** ao passar o mouse, a moldura desliza para dentro da própria
  sombra — a sombra colapsa e o quadro ocupa o lugar dela.
- **Manchete:** "Quatro áreas. Um clube." — e o bento logo abaixo mostra
  literalmente as quatro.
- É a direção mais colorida das três, sem sair da paleta.

### C — Malha

A logo é um nó: quatro laços que só ficam de pé porque se cruzam. A página é
construída nessa geometria — malha triangular desenhada em SVG, eixos a 45°,
cantos chanfrados no lugar de arredondados.

- **Assinatura:** a malha se desenha linha a linha ao carregar, adensando da
  esquerda para a direita como no fundo do guia.
- **Tipografia oposta às outras duas:** Montserrat **300** em corpo grande com
  tracking largo. Arquitetônico, não cartaz.
- **Cor com avareza:** o ciano aparece em seis regras — uma delas é o anel de
  foco, e outra só no hover — e o magenta em uma, na nota sobre processo seletivo.
- Tem a seção que explica o mascote e a marca — as outras duas só os usam.

---

## 5. Decisões de conteúdo

- **Nenhum dado foi inventado.** Números (30+ membros, 25 projetos, 20+ eventos,
  10+ parceiros), projetos, parceiros e a linha do tempo saíram do site atual.
  Missão, áreas e ritmo saíram do `CLAUDE.md` do workspace.
- **Nenhum modelo tem CTA de "inscreva-se".** O `CLAUDE.md` registra que não há
  processo seletivo neste segundo semestre; anunciar inscrição seria mentira. A
  ação principal de cada página leva para os projetos ou para as áreas, e o
  modelo C traz uma nota explicando quando o processo abre.
- **"Conectar carteira" saiu de todos os três.** Se o sistema de NFT de conquista
  voltar, ele cabe numa página própria, não na navbar da landing.
- **Parceiros aparecem como texto**, não como grid de logos. Os arquivos no repo
  são JPEGs de qualidades e formatos diferentes e ficam sujos lado a lado.

## 6. Acessibilidade e responsividade

Os três modelos: contraste do texto acima de 4.5:1 sobre `#081119`, foco visível
com `:focus-visible`, `prefers-reduced-motion` respeitado (o C desliga o desenho
da malha), imagens com `alt` descritivo e layout íntegro até 360px de largura.

O que **não** tem, porque é mockup: menu hambúrguer no mobile — abaixo de 860px
os links de âncora somem e a navegação é só por rolagem. Numa página única isso
não bloqueia nada, mas precisa entrar antes de virar site de verdade.

## 7. Próximo passo

Escolher uma direção. A partir dela vale extrair um `tokens.css` com a paleta e a
escala tipográfica do guia, e só então portar para componentes. Das 3787 linhas de
CSS atuais nenhum valor se aproveita; a única ideia que sobrevive é a arquitetura
de tokens claro/escuro — e mesmo ela não cobre `:focus-visible`,
`prefers-reduced-motion` nem `prefers-color-scheme`, que aparecem zero vezes.

Também existe uma versão em página única dessas três direções, com as maquetes
lado a lado e esta auditoria junto, publicada como artifact.
