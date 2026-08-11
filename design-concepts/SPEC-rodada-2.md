# Spec — rodada 2 da landing do Inteli Blockchain

**Data:** 10 de agosto de 2026
**Base:** `SPEC-landing-hibrida.md` continua valendo inteira. Esta spec **acrescenta**;
onde as duas se falarem, a de origem manda, exceto onde eu marcar explicitamente
que uma regra dela muda.
**Arquivo alvo:** `hibrido-v1-central.html` (a direção escolhida — dobra centralizada).

---

## 0. O que muda, em uma frase cada

1. **Projetos separados por origem** — hackathon numa seção, parceria em outra, com
   destaque e um CTA de contato.
2. **A marca em 3D**, com a técnica da Inteli Júnior, mas extrudando o nó de verdade.
3. **Fotos do clube**, com o tratamento de moldura que o guia já define.

---

## 1. Frente 1 — projetos separados por origem

### 1.1 A regra de classificação

Só existem **três** origens, e cada projeto tem exatamente uma:

| Origem | Como se prova | Quantos hoje |
| --- | --- | --- |
| **Com parceiro** | Confirmado pelo Messias | **1** |
| **Hackathon / evento externo** | Nome do repositório, ou confirmação | a maioria |
| **Interno** | Programa do próprio clube | 2 (High Block, Docs³) |

**Nunca inferir parceria.** O `CLAUDE.md` do workspace proíbe supor dado do clube, e
patrocínio é exatamente o tipo de coisa que dá problema se errar.

Hackathons que o **nome do repositório prova** — usar o rótulo, não inventar:

| Projeto | Repositório | Rótulo |
| --- | --- | --- |
| 4Bridge | `m4rcusml/hackmeridian-2025` | Stellar · Meridian |
| PólenChain | `Lumx-hackathon/Ada-Lovelace-Bounties` | Lumx |
| Reevo | `JvWandermurem/Hackathon-Peerseed` | Peerseed |
| DeSoy | `vict0rcarvalh0/eth-belgrade-hackathon` | ETH Belgrade |
| AgroFinance | `kethlenmartins/hack-meridian` | Stellar · Meridian |
| DeVolt | `DeVolt-ETHSamba` | ETHSamba |

> **Pendência de dados:** o repositório do 4Bridge aponta para
> `four-brigde.vercel.app`, mas o site publicado tem título **"StellarImpact —
> Investimentos Sociais"**. Confirmar com a gestão qual nome exibir antes de fechar.

### 1.2 A seção "Projetos com parceiro"

Vem **antes** da seção de hackathon — é a de mais destaque.

**Conteúdo hoje — um projeto:**

- Nome: **Projeto Alphractal**
- Repositório: `https://github.com/InteliBlockchain-IBC/projeto-alphractal`
- Descrição (do próprio repositório, não inventar outra): *"Sistema de monitoramento
  em tempo real de custos de taxa na rede Ethereum — projeto do Inteli Blockchain
  com a Alphractal."*
- Parceiro: Alphractal — `https://alphractal.com/`

**O card é uma moldura**, e isso **muda a regra da spec original**:

> `SPEC-landing-hibrida.md` §3.5 diz "exatamente cinco elementos" recebem moldura, e
> "qualquer sexto precisa de decisão nova". **Esta é a decisão.** A moldura passa a ter
> **sete** usos permitidos: os cinco originais, mais o card de parceria, mais a
> etiqueta de nome no carrossel de parceiros (já implementada).

**Preenchimento obrigatório: `--gelo`.** A marca da Alphractal é um monograma "AP" em
gradiente `#020055 → #1946E5` — azul escuro que **some** sobre a tinta da página.
Sobre gelo ela lê perfeitamente. Não inverter, não recolorir: é marca de terceiro.

**O co-branding** dentro do card: nó do clube à esquerda, um `×` discreto no meio,
marca do parceiro à direita, alinhados pela altura óptica (não pela caixa — mesma
lição do carrossel).

```
╔══════════════════════════════════════╗╲
║  ◈◈        ×        [AP] ALPHRACTAL  ║ ║   preenchimento gelo
║ ◈◈◈◈                                 ║ ║   borda 3, canto 20
║  ◈◈                                  ║ ║   sombra magenta deslocada
║                                      ║ ║
║  PROJETO ALPHRACTAL                  ║ ║
║  Monitoramento em tempo real do      ║ ║
║  custo de taxa na rede Ethereum.     ║ ║
║                                      ║ ║
║  VER NO GITHUB →                     ║ ║
╚══════════════════════════════════════╝ ║
  ╲__________________________________╲
```

**Arquivo já disponível:** `assets/parceria/alphractal.svg` (2.259 bytes, vetor real,
tirado do `favicon.svg` do site deles).

### 1.3 O CTA de contato

**Onde:** só no fim da seção de parceria. **Não** na dobra, **não** flutuante, **não**
repetido.

**Por quê:** a §2 da spec original define a página como *expor, não captar* — sem
formulário, sem pedido. Um CTA no fim da seção de parceria não viola isso porque ele é
**consequência do que acabou de ser mostrado**, não uma interrupção. Um CTA na dobra
violaria.

**Forma:** link em texto com o traço ciano, no padrão `.secundario` que já existe —
**não** uma segunda moldura. A moldura da seção já é o card do projeto; duas molduras
lado a lado brigam.

**Texto:** algo como "Quer construir com o clube? **blockchain@inteli.edu.br**"
— `mailto:` direto, sem formulário.

### 1.4 A seção "Feito em hackathon"

Sem mudança estrutural: continua o retículo de 1px que já existe. Só passa a conter
**apenas** projetos de hackathon/evento externo, e o rótulo de cada card passa a nomear
o hackathon quando o repositório prova (tabela da §1.1).

---

## 2. Frente 2 — a marca em 3D

### 2.1 O que a Inteli Júnior faz (verificado no código)

Repositório: `github.com/InteliJR/InteliJuniorLP`, branch **`develop`** (a `main` está
vazia). Arquivo: `frontend/components/ImageStructure3D.jsx`.

**Achado que muda a receita:** eles **não extrudam a logo**. O 3D é uma estrutura
bola-e-vareta com 8 vértices e 14 arestas escritos à mão — forma abstrata que *evoca* a
marca. O SVG da logo existe no repositório e é usado só como imagem 2D.

A identidade visual vem da **luz**, não da forma: `DirectionalLight(0xff3311, 8.0)`.
Sem environment map, sem HDRI, sem pós-processamento — o brilho da hero é `blur` em CSS
atrás de um canvas transparente.

Three.js imperativo dentro de `useEffect`. **Não** é React Three Fiber: `@react-three/fiber`
e `drei` estão no `package.json` e nenhum arquivo os importa.

### 2.2 O que copiar — os quatro comportamentos

São eles que fazem o efeito parecer vivo. Constantes deles, testadas em produção:

| Comportamento | Constante |
| --- | --- |
| Auto-rotação em Y | `0.005` rad/quadro |
| Segue o ponteiro | limite `0.15` X / `0.1` Y, lerp `0.04` |
| Arraste livre em Y | sensibilidade `0.018`, clamp `0.8`, lerp `0.15` |
| Volta ao repouso | após `1500` ms, **sincronizando o ângulo** para não dar salto |

Mais `IntersectionObserver` (threshold 0.1) pausando fora da tela, `ACESFilmicToneMapping`
com exposure `1.1`, e `clearcoat` alto para o brilho varrer a peça enquanto ela gira.

**O retorno sincronizado é metade da elegância.** É o detalhe que ninguém nota até faltar.

### 2.3 O que mudar — forma chapada some de perfil

A peça deles tem volume de qualquer ângulo. Um logo extrudado é uma placa.

**A medida que decide tudo: a fita do nó tem ~27 px numa caixa de 374** — proporção 1:14.

| Parâmetro | Valor | Por quê |
| --- | --- | --- |
| Profundidade | **≈ 1× a largura da fita** | menos que isso lê como adesivo |
| Bisel | **≈ 10% da fita** | é o bisel que captura a luz de contorno |
| Pose de repouso | **inclinada**, nunca de frente | de frente não mostra profundidade |
| Rotação automática | **oscila**, não dá volta completa | a 90° a placa desaparece |

### 2.4 A geometria — já pronta e verificada

`no-geometria.json` na raiz de `design-concepts/`. Contém 2 polígonos, 40 vértices,
extraídos do PNG oficial e **verificados**: a divergência contra o original é uma franja
de subpixel na borda, não erro de forma.

**Os quatro requisitos do `THREE.Shape` já foram checados e passam:**

- contorno externo simples, sem auto-interseção ✓
- buraco simples ✓
- buraco 100% dentro do externo ✓
- sentidos opostos, exigido para furar ✓

**Não precisamos do SVG do Canva para isso.** Se ele aparecer, a silhueta fica exata em
qualquer escala e a navbar deixa de usar raster — mas não bloqueia.

### 2.5 Luz — a tradução da receita deles

| Papel | Inteli Júnior | Inteli Blockchain |
| --- | --- | --- |
| Contorno (a que pinta a peça) | `0xff3311`, intensidade 8 | `#1b98e0` ciano, mesma intensidade |
| Acento pontual | `0xff2200` | `#9f0e5d` magenta |
| Ambiente | `0xffffff` 0.6 | igual |
| Principal | `0xffffff` 1.2 em (5,8,6) | igual |

Material: `MeshPhysicalMaterial`, metalness `0.05`, roughness `0.15`, clearcoat `0.95`
— os valores deles, com a cor da marca.

### 2.6 Três defeitos deles que NÃO copiar

1. **O bundle de 139 KB gzip é carregado sempre**, inclusive no celular, onde o
   componente nem monta. Usar carregamento tardio.
2. **`prefers-reduced-motion` não é respeitado** — o hook existe em
   `frontend/hooks/useIsMobile.ts` e nenhum arquivo o importa. Respeitar.
3. **`@react-three/fiber` e `drei` no `package.json` sem uso.** Não instalar o que não
   for importado.

### 2.7 O slot já existe

A dobra atual já tem o nó dentro de um contêiner com geometria própria
(`.no-slot` → `.no-slot__palco`), preparado desde a rodada anterior justamente para
isso. **Trocar o conteúdo do slot não deve exigir refazer a dobra.**

Hoje o slot tem uma extrusão por empilhamento em CSS — 14 cópias do PNG com `translateZ`.
Ela **funciona e está verificada**; serve de fallback se o WebGL falhar.

> Existe um `no3d-webgl-inacabado.js` no diretório, com WebGL próprio (sem Three.js) e
> três bugs reais já corrigidos: textura NPOT quebrando o `discard`, sentido de vértice
> invertido no culling, e falta de um quadro síncrono antes do laço. **Nunca foi
> verificado ponta a ponta.** Serve de referência, não de base confiável.

---

## 3. Frente 3 — as fotos do clube ✅ IMPLEMENTADA

> **Status:** feita em 11 de agosto de 2026, direto em `hibrido-v1-central.html`.
> O que sobrou é confirmação de conteúdo, não implementação — ver §3.5.
>
> O inventário anterior (miniaturas de 200 px do Canva) **está obsoleto**. Messias
> entregou seis originais melhores, e a pasta `ai/referencia/` foi removida por ter
> virado ruído: os originais em `ai/foto_original/` são a única fonte agora.

### 3.1 O acervo real

Seis originais em `ai/foto_original/`. Cinco entraram na página:

| Arquivo | O que é | Destino |
| --- | --- | --- |
| `grupo_posando.jpg` (4032×3024) | ~35 membros posados em auditório do Inteli, telões com a marca do clube atrás | **DESTAQUE** — faixa larga abrindo "Quem constrói" |
| `grupo_campeao.jpg` (1280×960) | os **ganhadores do Meridian 2025** no palco, com a bandeira e os troféus, diante do painel de patrocinadores | carrossel, 3º |
| `close_codigo.jpg` (4000×2252, **EXIF 6**) | sala do **workshop com Solange Gueiros**, com código na tela | carrossel, 1º |
| `hackmeridian.jpg` (1600×1200) | a **delegação** que foi ao Meridian 2025, à beira-mar com a bandeira | carrossel, 4º |
| `IMG_4960.HEIC` (4032×3024) | **bootcamp com Solange Gueiros** — participantes na escadaria central do Inteli | carrossel, 2º |

Fora, e por quê:

| Arquivo | Motivo |
| --- | --- |
| `grupo_junto.jpg` | boa, mas diz a mesma coisa que `grupo_posando` — grupo grande com bandeira. Duas fotos para um argumento só é redundância. **Reserva.** |
| `visitia_vitalik.jpg` | multidão no átrio, forte, mas **sem legenda não prova nada**: uma foto de aglomeração sem dizer que evento é vira enfeite. Entra quando o evento estiver confirmado. |

### 3.2 A regra de corte, aplicada

**Foto que não prova nada, sai.** Isso descartou duas das sete e é o motivo de a página
ter cinco fotos e não sete. Os ganhadores do Meridian provam hackathon melhor do que qualquer
frase da seção; `visitia_vitalik` não prova nada até ter legenda.

### 3.3 Toda foto usa moldura — e o orçamento de moldura acabou

Eu tentei o contrário primeiro: fotos sem borda, faixa sangrando até a margem, para não
gastar moldura. **Messias reprovou, nestes termos: "foto com a ponta sem borda é
horrível".** Decisão dele, e ele tem razão pelo argumento mais simples — a página MOLDURAS
do guia mostra literalmente uma foto emoldurada. Era eu inventando uma exceção contra o
próprio guia.

**A regra agora é: toda foto usa moldura.** Borda 3, canto 20, sombra sólida deslocada.
Nenhuma foto sangra, nenhuma foto tem canto reto sem borda.

**Consequência que precisa ser dita:** o orçamento de "cinco usos de moldura e mais
nenhum" da spec original **deixa de existir como contagem**. A moldura passou de
componente pontual a tratamento de duas famílias: componente com ação (botão, card de
área, card de parceria, etiqueta de parceiro) e foto. Continua não valendo para texto
corrido, painel de malha ou card de projeto — o retículo de 1px segue sendo o tratamento
daqueles.

**Exceção única:** o destaque não recebe o encaixe do hover. Ele não é clicável, e mover
uma foto de 1200px sob o ponteiro anuncia uma ação que não existe. As quatro do carrossel
recebem, porque foi exatamente o efeito que Messias pediu.

### 3.4 Duas peças, e só duas

**1 · O destaque, abrindo "Quem constrói".** `grupo-posando` numa moldura, com o título
**TIME 2026** dentro da própria foto, no alto: Montserrat 700 em caixa alta, sobre um
degradê de `--noite` que desce de .96 até transparente. O brilho do texto é o **mesmo**
`text-shadow` do logotipo na dobra — as duas peças precisam ler como uma família, e
inventar um segundo brilho seria inventar um segundo sistema.

O degradê desce bem além do texto de propósito. Cortar rente cria uma borda dura
atravessando a foto, que é o defeito que se está evitando.

Vem **antes** do título da seção. A dobra afirma que o clube é grande; a foto do time é a
evidência. Evidência antes de argumento.

**2 · O carrossel, depois da linha do tempo.** A linha do tempo diz o que aconteceu; o
carrossel mostra. Quatro cards de moldura, rolagem horizontal com encaixe, setas que
andam exatamente um card e desligam nas pontas. Ordem definida por Messias:

| # | Foto | Legenda |
| --- | --- | --- |
| 1 | `workshop-codigo` | Workshop com Solange Gueiros |
| 2 | `bootcamp-escada` | Bootcamp com Solange Gueiros |
| 3 | `meridian-ganhadores` | Ganhadores do Meridian 2025 |
| 4 | `meridian-delegacao` | A delegação no Meridian 2025 |

As quatro são recortadas em **3:2** para os cards ficarem uniformes. `object-fit:cover` no
CSS é cinto de segurança, não o mecanismo — o recorte real é feito na imagem.

**Não entra, e continua não entrando:** foto na dobra (é da marca, e competiria com o 3D),
foto como fundo com texto por cima (mata contraste e mata a malha), galeria solta sem
legenda.

### 3.5 O que sobrou — confirmação, não código

1. ~~A legenda "premiação"~~ — **resolvido.** Messias confirmou que são os ganhadores
   do Meridian, e identificou também o workshop e o bootcamp como sendo com Solange
   Gueiros. As legendas são as palavras dele.
2. **"Meridian da Stellar" foi acrescentado ao marco de 2025** na linha do tempo. A foto
   é a prova, mas o resto daquela lista foi confirmado por Messias e este item não —
   confirmar junto.
3. **Autorização de uso de imagem.** As quatro têm pessoas identificáveis. Não bloqueia
   montar, bloqueia publicar.

### 3.6 Derivadas web — já geradas

Em `design-concepts/assets/fotos/`, JPEG progressivo 4:2:0, dimensionadas pela largura
real de exibição, **345 KB no total** (≈460 KB como data URI no artifact). As quatro do carrossel são 3:2 e ficam em cards uniformes:

| Arquivo | Dimensão | Peso |
| --- | --- | --- |
| `grupo-posando.jpg` | 1440×679 | 151 KB |
| `bootcamp-escada.jpg` | 700×467 | 59 KB |
| `meridian-delegacao.jpg` | 700×467 | 53 KB |
| `meridian-ganhadores.jpg` | 700×466 | 40 KB |
| `workshop-codigo.jpg` | 700×466 | 42 KB |

**WebP não é opção nesta máquina:** o `cwebp` não está instalado, e o ImageMagick ignora
`-quality` no WebP — sai sempre o mesmo arquivo, independente do valor. Verificado com
quatro qualidades diferentes, todas byte a byte idênticas. Quem for regerar, use JPEG ou
instale `webp` antes.

Os recortes cortam teto e chão mortos; `close_codigo` precisa de `-auto-orient` **antes**
de qualquer coisa, porque tem EXIF de orientação 6 e sem isso sai deitada.

### 3.7 Estas derivadas servem o protótipo, não a produção

**Não copie `assets/fotos/` direto para o site.** Elas estão dimensionadas para 1x, que é
o certo para o artifact e errado para produção. Três lacunas, em ordem de impacto:

1. **1x só.** Medido: `grupo-posando` renderiza em exatamente 1440 px de CSS e o arquivo
   tem 1440 px — em tela 2x (todo celular, todo MacBook) sai **borrada**.
   `meridian-premiacao` está igual (982 exibidos / 1000 no arquivo). `close-codigo`
   (1,5x) e `meridian-viagem` (1,32x) têm alguma folga.
2. **Sem `srcset`.** Um celular de 400 px baixa os 151 KB da foto de 1440 px para
   preencher um espaço que pediria ~25 KB.
3. **Sem formato moderno.** WebP/AVIF cortam 30–50%. Bloqueado nesta máquina por falta
   do `cwebp` (§3.6) — quem for gerar, instale o pacote `webp` primeiro.

**Por que não corrigir agora:** no artifact tudo vira data URI dentro de um arquivo só,
então declarar 1x e 2x **embutiria as duas** e dobraria o peso sem economizar nada. O
`srcset` só paga quando os arquivos são servidos separados — ou seja, na porta para o
React.

**O build não resolve sozinho.** O site é React com `parcel-bundler` (Parcel 1) — sem
pipeline de imagem, sem geração automática de variante. As derivadas de produção têm de
ser geradas explicitamente e a marcação `<picture>`/`srcset` escrita à mão no JSX.

Os originais em `ai/foto_original/` têm 4032 px de largura, então gerar 2x depois é
folgado. Nada se perdeu por adiar.

---

## 4. Requisitos que valem para tudo

Herdados da spec original, repetidos porque são condição de aceite:

- Contraste ≥ **4,5:1** para texto normal, **3:1** para texto grande — **calculado**, não
  estimado.
- `:focus-visible` em tudo que é focável.
- `prefers-reduced-motion` desliga todo movimento, incluindo o 3D.
- Hierarquia de títulos sem pular nível.
- Imagem decorativa com `aria-hidden`; imagem informativa com descrição.
- **Sem estouro horizontal de 320 px a 1600 px**, verificado por `scrollWidth`, não no olho.
- Nenhum host externo — a CSP do artifact bloqueia CDN. Fontes e imagens embutidas.

### Armadilhas já conhecidas, para não repetir

1. **Ordem na folha de estilo.** Regras de mesma especificidade são decididas por ordem.
   Os blocos responsivos ficam **no fim da folha** de propósito — já quebrou duas vezes.
2. **`<span>` inline ignora `width`/`height`.** Já causou dois bugs: o palco 3D com
   tamanho zero e o canvas 0×0. Elemento com dimensão precisa de `display:block` ou ser
   item de flex.
3. **O headless mente.** Ele descarta camadas compostas de forma não determinística e
   **trava a viewport em 500 px de largura**. Verificação abaixo de 500 px não é
   confiável aqui.
4. **Peso do artifact.** Referenciar cada asset **uma vez** e reaproveitar por
   `background-image`; um `<img>` repetido inflou o arquivo de 466 KB para 1,3 MB.

---

## 5. Pendências que bloqueiam a implementação

| # | O quê | Bloqueia |
| --- | --- | --- |
| 1 | **Fotos em resolução original**, baixadas do Canva à mão | toda a frente 3 |
| 2 | **Autorização de uso de imagem** dos membros | toda a frente 3 |
| 3 | Confirmar o nome do 4Bridge (repo diz uma coisa, site publicado diz "StellarImpact") | rótulo de um card |
| 4 | SVG oficial da marca | nada — melhora a frente 2 e a navbar |

Nenhuma bloqueia as frentes 1 e 2.
