# Prompt para o agente de implementação

Copie o bloco abaixo inteiro.

---

Você vai continuar a landing page do Inteli Blockchain. O trabalho de design já foi
feito e documentado — **seu papel é executar, não redesenhar**.

**Diretório:** `~/Documentos/github/inteli_blockchain/projetos/ib-club-website/design-concepts`
**Arquivo alvo:** `hibrido-v1-central.html` (HTML+CSS+JS num arquivo só, abre direto no
navegador, sem build)

## Leia antes de escrever qualquer linha

1. `SPEC-rodada-2.md` — inteira
2. `PLANO-rodada-2.md` — inteira, é o passo a passo com os critérios de verificação
3. `SPEC-landing-hibrida.md` §3 — o sistema de design (regra de canto, orçamento de cor,
   orçamento de moldura)

Essas três já contêm as decisões, as medidas e as armadilhas. **Não redecida o que elas
já decidiram.** Se discordar de algo, diga — não mude por conta própria.

## O que fazer

**Etapa 1 do plano — separar os projetos por origem.** Baixo risco, entrega valor
sozinha. Uma seção "Projetos com parceiro" (só o Alphractal hoje, com co-branding e um
CTA `mailto:`) antes da seção de hackathon, que passa a se chamar "Feito em hackathon" e
recebe os rótulos de evento que o repositório prova.

**Etapa 2 do plano — a marca em 3D no hero.** Alto risco. Three.js extrudando o nó a
partir de `no-geometria.json`, com os quatro comportamentos da Inteli Júnior e as
constantes já levantadas. **Só comece depois da etapa 1 fechada**, e mantenha o fallback
CSS que já está lá até o 3D estar provado por captura.

**Etapa 3 já está feita** — as fotos entraram em 11/08/2026. Não refaça. Se mexer em
alguma grade que contenha imagem, releia as três armadilhas listadas na Etapa 3 do plano.
Se em algum momento você portar isto para o app React, **não copie `assets/fotos/` direto**:
elas são 1x, próprias para o artifact e insuficientes para produção — SPEC §3.7 explica o
que gerar.

## Regras que não são negociáveis

- **Não invente dado do clube.** Número de membros, datas, nomes de parceiro e resultado
  de hackathon não estão neste repositório. Se precisar de um e ele não estiver na spec,
  **pergunte** — o `CLAUDE.md` do workspace proíbe supor.
- **Descrição de projeto se copia do repositório**, não se reescreve.
- **Orçamento de moldura: sete usos.** Já estão contados na SPEC §1.2. Um oitavo exige
  decisão nova, não é escolha sua.
- **Regra de canto: 0 ou 20, nada entre.**
- **Não commite nada** sem pedir. Este diretório não está versionado; faça
  `cp hibrido-v1-central.html hibrido-v1-central.bak.html` antes de começar — é a única
  rede de segurança que existe.

## Como verificar — o headless mente, e já custou horas aqui

- Sempre `--use-angle=swiftshader`. Sem ele, camadas compostas somem de forma aleatória
  e o mesmo arquivo dá resultados diferentes entre execuções.
- A viewport **trava em 500 px** de largura. Pedir 360 devolve 500, e recortar 360 de um
  render de 500 corta conteúdo que não estava estourando.
- **Sonda sempre na mesma pasta do arquivo.** Cópia em `/tmp` quebra os caminhos
  relativos das imagens e você mede o texto alternativo achando que é o layout.
- Estouro horizontal se prova comparando `scrollWidth` com `clientWidth`. Olhar não
  serve.
- Posição de seção se mede no DOM com `getBoundingClientRect()`. Recorte por tentativa
  desperdiça rodadas, porque a altura da janela muda o layout (a dobra usa `vh`).
- Para o 3D: antes de debugar seu código, **prove que o ambiente funciona** com um canvas
  mínimo. `requestAnimationFrame` não dispara em documento oculto (headless conta como
  oculto) — desenhe um quadro síncrono antes do laço, e use `preserveDrawingBuffer`.
  Aceite do 3D: três ângulos diferentes que **mudam entre si**. Se as três capturas
  saírem idênticas, você está fotografando o PNG de fallback.

## Checklist de fechamento

Está no fim do `PLANO-rodada-2.md`. Rode inteiro.

## Como relatar

Diga o que ficou pronto, o que ficou pela metade e por quê. **Se a etapa 2 não fechar,
entregue a 1 e diga que a 2 não fechou.** Entregar 3D não verificado é pior que não
entregar — isso já aconteceu nesta página e a coisa certa foi voltar atrás.
