# Spec — landing page do Inteli Blockchain

**Data:** 8 de agosto de 2026
**Status:** design aprovado, aguardando plano de implementação
**Origem:** três direções exploradas em `modelo-a-dossie.html`, `modelo-b-moldura.html`
e `modelo-c-malha.html`. A decisão foi um híbrido das duas últimas.

---

## 1. A decisão

**A malha governa a página. A moldura entra como componente, em cinco lugares.**

O modelo C (malha) e o modelo B (moldura) têm gramáticas opostas de propósito:
Montserrat 300 contra 900, hairline contra borda de 3px, cinza-azul contra cor
chapada. Misturar meio a meio produz uma página que não é nem contida nem forte.
Uma das duas manda, e a outra aparece pouco o bastante para virar assinatura em
vez de papel de parede.

O chão é a malha: Montserrat 300, retículo de 1px, hairline, a malha triangular
viva ao fundo, cor com avareza. A moldura do guia — borda 3, canto 20,
preenchimento chapado, sombra sólida deslocada — é um tratamento de card que
cinco elementos recebem, e mais nenhum.

## 2. O trabalho da página

**Expor, não captar.** A página demonstra a qualidade do clube e deixa a
conclusão para quem lê. O público que mais importa é o parceiro em potencial,
mas a página não pede nada a ele.

Consequências, todas obrigatórias:

- Nenhum formulário, nenhuma captura de e-mail, nenhum "entre em contato" na dobra.
- A ação principal leva **para dentro da prova**, não para uma conversa:
  "Ver os 25 projetos", nunca "Falar com o clube".
- A seção de parceiros **afirma**: "Quem anda junto", com os nomes. Nada de
  "seja nosso parceiro".
- O contato existe no rodapé, como fato, não como pedido.
- **Nenhum CTA de inscrição.** O `CLAUDE.md` do workspace registra que não haverá
  processo seletivo neste segundo semestre. Anunciar inscrição seria mentira.
- A ordem das seções é a ordem da evidência: o que o clube produz, em que ritmo,
  com que resultado.

## 3. O sistema

### 3.1 A regra do canto

É o que costura as duas gramáticas. Os dois valores são os únicos que o guia
permite, e cada um passa a significar uma coisa.

| | Canto | Borda | Onde |
| --- | --- | --- | --- |
| Painel da malha | `0` | hairline `1px` | seções, retículo, linha do tempo, rodapé |
| Card de moldura | `20px` | `3px` sólida | só nos cinco lugares da §3.5 |

**Nenhum valor intermediário existe na folha de estilo.** Sem `8px`, sem `12px`,
sem `border-radius` herdado de componente.

O modelo C usava chanfro de 45° nos painéis. Ele sai: o guia diz "arredondamento
0 ou 20 e nenhum outro valor", e canto reto preserva o ar arquitetônico sem
inventar um terceiro valor.

### 3.2 Tokens de cor

As oito do Guia de Estilos 2026, sem exceção e sem invenção.

| Hex | Nome | Papel |
| --- | --- | --- |
| `#081119` | tinta | fundo da página |
| `#13293d` | noite | superfície de painel |
| `#247ba0` | aço | preenchimento chapado — Educacional |
| `#006494` | profundo | **não usado na v1** — declarado para constar a paleta inteira |
| `#1b98e0` | sinal | acento, contado (§3.4) |
| `#e8f1f2` | gelo | texto; preenchimento chapado — Projetos |
| `#9f0e5d` | magenta | sombra deslocada; preenchimento — Pessoas |
| `#380f2e` | vinho | **fora** — pertence à paleta Educacional do guia |

Neutros derivados: o gelo em alfa sobre a tinta, nunca cinza puro. Alfa mínimo
de `.55` para texto, medido — `.40` dá 3,49:1 e reprova em AA.

### 3.3 Tipografia

A malha manda, então o padrão é o peso leve. O 900 é exclusividade dos cards de
moldura, o que faz eles lerem como componente estrangeiro de propósito.

| Papel | Especificação |
| --- | --- |
| Wordmark da dobra | `inteli` em Montserrat **300**, tracking `.34em`; `Blockchain` em **700**, `clamp(2.5rem, 8.6vw, 7rem)` |
| Tese da dobra | Montserrat **300**, `clamp(1rem, 2.2vw, 1.5rem)`, tracking `.05em`, caixa alta; termo-chave em 700 |
| Título de seção | Montserrat **300**, `clamp(1.5rem, 3.4vw, 2.5rem)`, tracking `.035em`, caixa alta; última palavra em 700 |
| Nome de projeto | Montserrat **700**, `1.1rem`, tracking `.06em`, caixa alta |
| Rótulo de calha | Montserrat **700**, `.6875rem`, tracking `.28em`, caixa alta |
| Número grande | Montserrat **300**, `clamp(2.4rem, 5.4vw, 4rem)` |
| Corpo | Open Sans 400, `1rem`/1.75, máximo **60 caracteres** por linha |
| Nome da área | Montserrat **900** — **único lugar da página inteira** |

### 3.4 Orçamento de cor

A avareza é o que faz a malha funcionar, então vira regra contável e verificável.
Os três papéis abaixo são disjuntos: uma cor usada como sombra não desconta do
orçamento de acento, e vice-versa.

**Acento — `#1b98e0`, exatamente 5 lugares:**

1. o ponto quadrado do kicker da dobra
2. o traço sob o link secundário no fim dos projetos ("ver os 25 no GitHub")
3. o hover das linhas do retículo de projetos
4. o anel de `:focus-visible`
5. o ano corrente na linha do tempo

A ação principal **não** recebe acento: ela é uma moldura, e a identidade da
moldura é borda branca + preenchimento + sombra colorida. Somar ciano ali
embaralharia os dois componentes.

Qualquer sexto uso de ciano precisa de decisão nova. Nenhum outro elemento da
página recebe cor de acento.

**Sombra deslocada — só nos cinco componentes de moldura**, alternando ciano e
magenta conforme a tabela abaixo. É o único lugar onde o magenta aparece como
sombra.

**Preenchimento chapado — só nos quatro cards de área.** A cor *é* a taxonomia:
cada uma é um departamento do enum `Department` da plataforma de gestão
(`EDUCATIONAL`, `PROJECTS`, `MARKETING`, `PEOPLE`). Nenhuma outra superfície da
página recebe preenchimento chapado.

| Componente | Preenchimento | Sombra |
| --- | --- | --- |
| Ação principal da dobra | `#e8f1f2` gelo | magenta |
| Área Educacional | `#247ba0` aço | magenta |
| Área Projetos | `#e8f1f2` gelo | magenta |
| Área Marketing | `#13293d` noite | ciano |
| Área Pessoas | `#9f0e5d` magenta | ciano |

Nenhuma sombra deslocada usa cor fora deste par. O deslocamento é o mesmo em
todos os cinco, para o gesto de encaixe da §3.6 ler como uma regra e não como
cinco animações parecidas.

### 3.5 Onde a moldura é permitida

Exatamente cinco elementos. Qualquer sexto precisa de decisão nova.

1. A ação principal da dobra
2. Card da área Educacional
3. Card da área Projetos
4. Card da área Marketing
5. Card da área Pessoas

### 3.6 Movimento

Quatro momentos orquestrados, não efeitos espalhados:

1. **A malha se desenha** ao carregar, linha a linha, adensando da esquerda para
   a direita como no fundo do guia.
2. **O wordmark dá glitch** — na entrada e depois uma vez a cada 11 segundos,
   enquanto a dobra estiver na tela. Detalhe na §4.
3. **As seções sobem** ao entrar na viewport.
4. **O card de moldura encaixa na própria sombra** no hover — translada pelo
   deslocamento da sombra enquanto a sombra colapsa.

Tudo desligado sob `prefers-reduced-motion: reduce`. Em `hover: none` os
estados de 1 e 3 ficam no valor final; o 4 fica no estado de repouso, porque
colapsar a sombra esconderia justamente o que define aquele componente.

## 4. As seções

Ordem de evidência. A 2 diz quem constrói, a 3 é a prova, a 4 mostra a disciplina
que sustenta, a 5 mostra a estrutura. Quem chegou por curiosidade já viu o que
importa antes de precisar saber o que é uma "área".

| | Seção | Gramática | Conteúdo |
| --- | --- | --- | --- |
| 1 | Dobra | malha + **moldura ¹** | O nó em slot, o wordmark com glitch, a tese, a ação para os projetos |
| 2 | Quem constrói | painel reto | Universitários engajados: hackathons e projetos internos, e como um alimenta o outro |
| 3 | Os projetos | retículo 1px | **12** com nome, descrição e link, e o caminho para os 25 |
| 4 | O ritmo | painel reto | Aula toda semana (Educacional), ciclo de projeto todo mês — a disciplina por trás |
| 5 | As quatro áreas | **moldura ² ³ ⁴ ⁵** | Os quatro departamentos, cor como taxonomia |
| 6 | Os números | hairline | O bloco editável da §5 |
| 7 | Linha do tempo | hairline | 2022 até agora |
| 8 | Parceiros | carrossel | Logos em P&B, cor cheia sob o ponteiro |
| 9 | Rodapé | hairline | Onde encontrar o clube, contato como fato |

**Revisão de 9 de agosto de 2026.** A ordem mudou depois da primeira v1: a
engajamento vem antes da cadência, porque o argumento é "somos universitários
que constroem" e não "temos um calendário". As áreas deixaram de ser
apresentadas como calendário e passaram a ser apresentadas como as frentes de
que uma comunidade web3 precisa. A seção de identidade saiu — ver §6.

**Por que 12 projetos e não 6:** numa página que existe para expor qualidade,
seis parece amostra e doze parece acervo.

**Quais 12:** saem de `client/src/components/Projetos.js`, que tem os 25 com
descrição em português e inglês já escritas — conteúdo real, nada inventado. O
critério é ter link próprio e descrição que se sustente sozinha. Os seis já
usados nos modelos entram (DeVolt, CarbonTracker, High Block, SkillPass,
PólenChain, Docs³) e os outros seis saem da mesma lista na implementação. Se
menos de 12 passarem no critério, a seção mostra quantos passarem — o número
não justifica esticar descrição.

**A dobra, revisão de 9 de agosto.** O nome do clube virou a manchete —
`inteli` em Montserrat 300 com tracking largo sobre `Blockchain` em **700**, em
corpo grande, com halo apertado de ciano a 28% de alfa. O 700 e não o 900 é
deliberado: a §3.3 reserva o 900 para os cards de área, e um corpo desse tamanho
já pesa o suficiente em 700. A tese vem logo abaixo, em Montserrat 300 caixa
alta: *"O clube universitário que o **ecossistema web3** chama."*

**O glitch.** É animação, não estilo: duas cópias do wordmark deslocadas em
fatias horizontais, uma em `#1b98e0` e outra em `#9f0e5d`, mais um tremor de
poucos pixels no texto principal. Usar o ciano e o magenta do guia em vez do
vermelho/ciano de monitor é o que separa isso do glitch de prateleira que toda
landing de cripto tem. Três salvaguardas, todas obrigatórias:

- o ruído ocupa **4% de um ciclo de 11 segundos** — dispara uma vez a cada onze
  segundos e some em menos de meio segundo;
- **para de rodar quando a dobra sai da tela**, por `IntersectionObserver`;
- **não existe** sob `prefers-reduced-motion: reduce`, onde nem o observador é
  registrado.

**A dobra assume posição, não só identidade.** "Blockchain universitário, do
Inteli para a América Latina" sustenta a afirmação com evidência no lead: 25
projetos desde 2022, em Stellar, Solana, Bitcoin, Celo e Chiliz, ao lado de
Ethereum Brasil, Chainlink Labs e Starknet Foundation. **Superlativo ("o maior",
"um dos maiores") não entrou** porque não é verificável a partir deste
workspace — se a gestão quiser afirmar, é decisão dela, não minha.

**O carrossel de parceiros** roda em loop, com os logos em escala de cinza a 58%
e cor cheia sob o ponteiro. Ele é `aria-hidden` e existe uma lista dos nomes em
texto logo abaixo, porque marquee não é navegável por teclado. Pausa no hover e
no foco, e para de vez sob `prefers-reduced-motion`.

## 5. Dados do clube

O `CLAUDE.md` do workspace avisa: *"Não invente dados do clube. Número de
membros, datas, nomes e decisões de gestão não estão neste workspace."*

Os quatro números abaixo **vieram do site atual** (`client/src/components/App.js`,
array `achievements`) e foram confirmados pelo Messias em **8 de agosto de 2026**.
Só o `25` foi contado de verdade contra a lista de projetos do repositório; os
outros três são herdados.

| Número | Rótulo | Origem |
| --- | --- | --- |
| `30+` | membros ativos | site atual, não recontado |
| `25` | projetos entregues | contado em `Projetos.js` |
| `20+` | eventos realizados | site atual, não recontado |
| `10+` | parceiros | site atual, não recontado |

**Requisito de implementação:** os quatro moram num único bloco no HTML, com um
comentário-faixa de aviso, e não aparecem duplicados em nenhum outro lugar.
São o dado com maior chance de envelhecer.

## 6. O que fica de fora, e por quê

- **Seção de membros ou diretoria.** As fotos do site atual são 41 hotlinks para
  `media.licdn.com` com token expirado — quarenta em 4 de setembro de 2025 e um
  em 12 de agosto do mesmo ano. Entra quando houver fotos próprias.
- **Seção de identidade (o mascote).** Em stand-by por decisão do Messias em
  9 de agosto de 2026: existe um PNG só do ornitorrinco, e uma seção inteira
  apoiada numa imagem única fica pobre. Volta quando houver mais material
  gráfico dele.
- **"Conectar carteira".** Era a ação principal da navbar do site atual, numa liga
  estudantil, e a página que ela destrava está sempre vazia (`Conquistas.js` abre
  com `const mockNfts = []`). Se o sistema de NFT voltar, cabe em página própria.
- **Modo claro.** O guia é integralmente escuro. O `light-mode` do site atual foi
  inventado do zero e não tem paleta definida em lugar nenhum.
- **Grid de logos de parceiros.** Os arquivos no repositório são JPEGs de
  qualidades e formatos diferentes e ficam sujos lado a lado. Os nomes em tipo
  resolvem melhor.
- **`#380f2e`.** Pertence à paleta Educacional do guia, não à institucional.

## 7. Refinamento futuro — o nó interativo

Pedido do Messias, para uma etapa posterior: o nó da dobra em 3D, seguindo o
ponteiro como a raposa da MetaMask.

**O que a v1 já garante:** o nó da dobra é construído como **slot** — um
contêiner com geometria própria que hoje segura o PNG. Trocar o conteúdo não
exige refazer o hero.

**Caminho recomendado quando chegar a hora**, do mais barato para o mais caro:

1. **Empilhamento em CSS 3D.** O nó é uma forma chapada de espessura constante,
   o que a extrusão por cópias com `translateZ` progressivo resolve bem. Um
   contêiner com `perspective` e `rotateX/rotateY` seguindo o ponteiro. Sem
   dependência.
2. **Modelo 3D de verdade** só se o empilhamento não convencer. Custo real: a
   CSP do artifact bloqueia CDN, então Three.js teria que ser embutido (~600 KB).

**Requisitos em qualquer caminho:** morre sob `prefers-reduced-motion: reduce`,
e não roda em `hover: none`, onde não existe ponteiro para seguir.

## 8. Acessibilidade

Piso obrigatório, verificado e não estimado:

- Contraste de texto normal ≥ **4,5:1** e de texto grande ≥ **3:1**, calculado
  para cada par usado. O alfa `.40` que herdamos do modelo C dá 3,49:1 e reprova.
- `:focus-visible` em tudo que é focável, e nada focável sem ele.
- `prefers-reduced-motion: reduce` cobrindo as três transições da §3.6.
- Hierarquia de títulos sem pular nível.
- Toda imagem decorativa com `aria-hidden="true"`; toda imagem informativa com
  descrição.
- Layout íntegro de 320 px a 1600 px, sem estouro horizontal em nenhuma largura.
- Nenhuma informação existindo só no `:hover`.

## 9. Pendências

Registradas para não se perderem. Nenhuma bloqueia a v1.

1. **Onde isto vive no fim.** Os arquivos de `design-concepts/` são exploração.
   Escolhida a direção, decidir se a landing substitui o app React atual ou vira
   projeto novo. O app atual usa `parcel-bundler@1.12`, sem manutenção desde 2021.
2. **`tokens.css`.** Extrair a paleta e a escala tipográfica do guia para um
   arquivo só, antes de portar para componentes.
3. **O nó interativo.** §7.
6. **Fotos por projeto.** O retículo de projetos hoje é só tipo. Com uma imagem
   por projeto cada card ganha identidade própria — pedido do Messias para uma
   etapa futura.
7. **A seção do mascote**, quando houver mais arte dele.
4. **Fotos próprias dos membros**, se a seção de time for entrar algum dia.
5. **`design-concepts/` não está commitado.** Continua untracked no repositório.
