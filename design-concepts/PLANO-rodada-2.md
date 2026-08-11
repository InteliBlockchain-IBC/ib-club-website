# Plano de implementação — rodada 2

**Para:** o agente que vai executar.
**Leia antes:** `SPEC-rodada-2.md` inteira, e a `SPEC-landing-hibrida.md` §3 (o sistema).
**Arquivo alvo:** `design-concepts/hibrido-v1-central.html`.

---

## Antes de começar

```bash
cd ~/Documentos/github/inteli_blockchain/projetos/ib-club-website/design-concepts
cp hibrido-v1-central.html hibrido-v1-central.bak.html   # ponto de retorno
```

**Este diretório não está commitado** (`git status` mostra `?? design-concepts/`). Não
há rede de segurança de git — o `.bak` é ela. Não commite nada sem o Messias pedir.

**Como visualizar:** o arquivo abre direto no navegador, sem build. Para publicar como
artifact, use o conversor em
`/tmp/claude-1000/.../scratchpad/converter.py` — ele arranca as tags de CDN, embute
fontes e imagens como data URI, e falha se sobrar qualquer `https://` ou caminho
relativo.

**Como verificar sem se enganar** — o headless mente de três jeitos conhecidos:

```bash
# use SEMPRE --use-angle=swiftshader; sem ele, camadas compostas somem de forma aleatória
google-chrome-stable --headless --use-angle=swiftshader --no-sandbox --hide-scrollbars \
  --window-size=1440,900 --virtual-time-budget=8000 --screenshot=/tmp/v.png "file://$PWD/hibrido-v1-central.html"
```

- A viewport **trava em 500 px** de largura. Pedir 360 devolve 500. Não confie em
  recorte para simular telas menores — recortar 360 de um render de 500 corta conteúdo
  que **não** estava estourando.
- Para achar a posição de uma seção, **meça no DOM** (injete um script que escreva
  `getBoundingClientRect()` no `document.title` e leia com `--dump-dom`). Recorte por
  tentativa desperdiça rodadas — a altura da janela muda o layout, porque a dobra usa `vh`.
- Para provar ausência de estouro horizontal, compare `scrollWidth` com `clientWidth`.
  Olhar não serve.

---

## Etapa 1 — separar os projetos por origem

**Objetivo:** duas seções no lugar de uma, a de parceria antes e com mais destaque.

### 1.1 Criar a seção "Projetos com parceiro"

Inserir **antes** da seção de projetos atual. Um card só, o Alphractal, com os dados
literais da §1.2 da spec — **descrição copiada do repositório, não reescrita**.

O card usa as classes de moldura que já existem: `mold mold--gelo`. Preenchimento gelo
é obrigatório (a marca da Alphractal é azul escuro e sumiria na tinta).

O co-branding precisa alinhar as duas marcas **pela altura óptica**, não pela caixa —
mesma lição do carrossel de parceiros, onde normalizar por caixa deixou tudo torto. O
nó do clube está em `assets/marca-gradiente.png`; a Alphractal em
`assets/parceria/alphractal.svg`.

**Verificação:**
- o card renderiza com a marca da Alphractal legível sobre o gelo
- `grep -c 'class="mold' hibrido-v1-central.html` sobe de 5 para 6
- contraste do texto do card sobre gelo ≥ 4,5:1, **calculado**

### 1.2 O CTA de contato

No fim da seção de parceria, no padrão `.secundario` (link com traço ciano) — **não**
uma segunda moldura, senão briga com o card.

`mailto:blockchain@inteli.edu.br`. Sem formulário.

**Verificação:** o CTA aparece **uma vez só na página inteira**.
`grep -c "blockchain@inteli.edu.br"` deve dar 2 — o CTA e o rodapé.

### 1.3 Renomear e reetiquetar a seção de hackathon

Título para algo como "Feito em hackathon". Aplicar os rótulos da tabela da §1.1 da
spec nos seis projetos cujo repositório prova o hackathon.

**Não classificar por conta própria o que a tabela não cobre.** Projeto sem prova fica
com o rótulo de domínio que já tem.

**Verificação:** nenhum projeto aparece nas duas seções.

---

## Etapa 2 — a marca em 3D

> **Faça a etapa 1 inteira antes.** Ela é de baixo risco e entrega valor sozinha. Esta
> é a de risco alto — se travar, a etapa 1 já está no ar.

### 2.1 Decidir a base — leia isto antes de escolher

Duas opções, e a escolha muda o resto:

**(a) Three.js** — `SVGLoader` não é necessário: monte o `THREE.Shape` direto dos
polígonos de `no-geometria.json` e passe para `ExtrudeGeometry` com bisel. Caminho
mais curto para um resultado bom, custo de ~139 KB gzip embutidos (a CSP bloqueia CDN,
então a biblioteca vai inteira no arquivo).

**(b) WebGL próprio** — existe um começo em `no3d-webgl-inacabado.js`, com três bugs
reais já corrigidos. **Nunca foi verificado ponta a ponta.** Trate como referência de
armadilhas, não como base pronta. Mais leve, muito mais trabalho, e sem bisel fácil.

**Recomendação: (a).** O objetivo é ficar tão dinâmico quanto o da Inteli Júnior, e
`MeshPhysicalMaterial` com clearcoat é o que produz o brilho que varre a peça. Refazer
isso à mão é semanas de shader para empatar.

### 2.2 Geometria

`no-geometria.json`: 2 polígonos, 40 vértices. Externo → `THREE.Shape`; o segundo →
`shape.holes.push(new THREE.Path(...))`. **Os quatro requisitos já foram checados e
passam** (§2.4 da spec) — se o `ExtrudeGeometry` sair vazio, o problema é outro, não a
geometria.

Parâmetros que decidem se lê como objeto ou como adesivo — a fita tem ~27 px numa caixa
de 374:

- `depth` ≈ **1× a largura da fita**
- `bevelEnabled: true`, `bevelSize` ≈ **10% da fita**, `bevelThickness` proporcional
- `bevelSegments`: 2 ou 3 chega; mais que isso não aparece e custa

Centralizar a geometria antes de rotacionar (`geometry.center()`), senão a peça orbita
em vez de girar.

### 2.3 Luz e material

Traduzir a receita da §2.5 da spec. **A luz de contorno ciano em intensidade 8 é o que
pinta a peça** — é ela que faz a identidade, não a cor do material. Sem environment
map, sem HDRI, sem pós-processamento.

### 2.4 Comportamento

Os quatro da §2.2 da spec, com as constantes de lá. **O retorno sincronizado após 1,5 s
é o detalhe que faz parecer caro** — não pule.

Duas mudanças obrigatórias em relação a eles:

- rotação automática **oscila**, não dá volta completa (placa some de perfil)
- pose de repouso **inclinada**, nunca de frente

### 2.5 Degradação — não copiar os defeitos deles

- **`prefers-reduced-motion`**: não inicializar o 3D. Fica o PNG.
- **Sem ponteiro** (toque): não inicializar. Fica o PNG.
- **Sem WebGL**: `try/catch` na criação do contexto, cai para o PNG.
- **Carregamento tardio**: a biblioteca não deve ser baixada por quem não vai renderizar.
- **`IntersectionObserver`** pausando fora da tela.

O fallback já existe e está verificado: a extrusão por empilhamento em CSS que está no
slot hoje. **Não remova antes de o 3D estar provado.**

### 2.6 Verificação — leia com atenção, aqui é fácil se enganar

Eu já **perdi horas** achando que o WebGL estava quebrado quando o problema era o
harness. Antes de debugar o seu código, prove que o ambiente funciona:

```bash
# canvas WebGL mínimo, só limpando com uma cor. Se ISTO não pintar, o problema é o harness.
```

Depois, na página real, confirme **nesta ordem**:

1. o canvas tem tamanho — `getBoundingClientRect()` diferente de zero
2. o desenho aconteceu — contador incrementado dentro da função de render
3. `gl.getError()` retorna 0

**Duas armadilhas que já custaram caro:**

- `requestAnimationFrame` **não dispara em documento oculto**, e headless conta como
  oculto. Desenhe **um quadro síncrono** antes de entrar no laço.
- Sem `preserveDrawingBuffer`, o buffer é descartado na composição e um único desenho
  some da captura.

**Aceite:** capturar a peça em três ângulos diferentes e ver que **muda entre eles**.
Se as três imagens forem idênticas, você está fotografando o PNG de fallback, não o 3D.

---

## Etapa 3 — as fotos ✅ JÁ FEITA

**Não refaça.** Quatro fotos já estão em `hibrido-v1-central.html`, com as derivadas
geradas em `assets/fotos/`. Ver SPEC §3 para o quê e o porquê de cada posição.

**O que você precisa saber para não quebrar:**

- Duas peças: `.destaque` (o time do ano, com o título dentro da foto) e `.galeria`
  (o carrossel de quatro, depois da linha do tempo).
- **Toda foto usa moldura.** Não é opcional e não é orçamento — SPEC §3.3. Eu tentei o
  contrário e foi reprovado nestes termos: *"foto com a ponta sem borda é horrível"*.
- **O destaque não recebe o hover**, de propósito: não é clicável. A regra que desliga
  usa classe dupla (`.destaque.mold:hover`) para ganhar de `.mold:is(:hover,…)` sem
  depender de ordem no arquivo. Se rebaixar para classe simples, o encaixe volta.
- O brilho do "TIME 2026" é o **mesmo `text-shadow`** do logotipo na dobra. Se precisar
  ajustar, ajuste os dois — são uma família, não dois efeitos parecidos.
- As setas do carrossel leem a largura do card em tempo de clique (`min(26rem,80vw)`
  muda com a tela). Não substitua por um valor fixo.

**Três armadilhas que já custaram tempo aqui — todas verificadas, não teorize de novo:**

1. **`1fr` tem mínimo `auto`.** O mínimo de uma coluna com imagem é a largura intrínseca
   dela, então a grade se recusa a encolher e a página estoura na horizontal. Use
   `minmax(0,…)` em **toda** faixa de grade que contenha imagem — inclusive dentro das
   media queries, que foi onde o bug reapareceu depois de eu já ter corrigido a regra
   base.
2. **`width:100%` sem `height:auto` estica a foto.** Os atributos `width`/`height` do
   HTML (que existem para reservar espaço) valem como altura fixa. O sintoma é a altura
   ficar **idêntica em todas as larguras de tela** — se você medir isso, é este bug.
3. **Não meça numa cópia em `/tmp`.** Os caminhos relativos das imagens quebram, o
   navegador renderiza o texto alternativo e você acaba medindo o layout errado. Ponha a
   sonda **na mesma pasta** do arquivo.
4. **Não confie em captura de janela gigante para conferir foto.** Com
   `--window-size=…,11000` o pixel sai composto fora de ordem: eu vi o rodapé desenhado
   por cima do carrossel enquanto o DOM media tudo certo, e perdi rodadas caçando um bug
   de layout que não existia. Para conferir uma seção, **isole**: esconda o resto com
   `display:none`, deixe a seção cair no topo de uma viewport normal, e desligue
   `loading="lazy"` e o `.sobe` na sonda. Aí o pixel e o DOM concordam.

**O que sobrou é confirmação com o Messias, não código** — SPEC §3.5: a legenda
"premiação", o item "Meridian da Stellar" na linha do tempo, e a autorização de uso de
imagem. Nenhuma das três bloqueia mexer na página; a terceira bloqueia publicar.

**Se precisar de mais foto:** `grupo_junto.jpg` e `visitia_vitalik.jpg` estão em
`ai/foto_original/` como reserva. Regere com JPEG progressivo — WebP nesta máquina sai
sem controle de qualidade (SPEC §3.6).

---

## Fechamento

Rodar sobre o arquivo final:

- [ ] `scrollWidth == clientWidth` em 500, 768, 1024, 1280, 1440 e 1920 px
      — passou com as fotos em 11/08; qualquer grade nova com imagem refaz o teste
- [ ] nenhuma foto com altura constante entre larguras (o sintoma do `height` fixo)
- [ ] contraste calculado de cada par novo de texto/fundo
- [ ] `prefers-reduced-motion` desliga o 3D e o glitch
- [ ] navegação por teclado alcança o card de parceria e o CTA, com foco visível
- [ ] hierarquia de títulos sem pular nível
- [ ] o conversor passa sem erro (nenhum host externo, nenhum placeholder sobrando)
- [ ] peso do artifact não passou de ~900 KB — o teto subiu de 600 porque as quatro
      fotos custam ~415 KB em base64, e o corte foi feito na dimensão de cada uma

**Relatar honestamente:** o que ficou pronto, o que ficou pela metade e por quê. Se a
etapa 2 não fechar, entregue a 1 e diga que a 2 não fechou — é melhor que entregar 3D
não verificado. Já tentei isso nesta sessão e a coisa certa foi voltar atrás.
