# Site do Inteli Blockchain

Landing page do clube. React 18 servido por Express, empacotado com Parcel.

```bash
npm install
npm run dev      # Parcel em watch + nodemon
npm start        # build de produção + servidor
```

O servidor lê `PORT` do ambiente e cai para 3000 em desenvolvimento.

## Estrutura

```
index.js                     Express servindo client/dist
client/src/
├── index.html               fontes do Google, favicon, #root
├── index.js                 monta <Landing/>
└── landing/
    ├── Landing.js           compõe as seções, na ordem da evidência
    ├── landing.css          a folha inteira — ver aviso abaixo
    ├── dados.js             links, imagens, dimensões e ordem (sem idioma)
    ├── textos/pt.js         todo o texto em português
    ├── textos/en.js         todo o texto em inglês
    ├── textos/index.js      contexto de idioma, detecção e persistência
    ├── no3d.js              a marca em 3D (Three.js sob demanda)
    ├── Cabeca.js            cabeçalho de seção, usado sete vezes
    ├── Paineis.js           a grade de dois painéis, usada duas vezes
    ├── Realce.js            o negrito dentro de um texto traduzido
    ├── assets/
    └── secoes/              uma seção por arquivo
```

Para trocar **um link, uma imagem ou a ordem**: `dados.js`.
Para trocar **qualquer texto**: `textos/pt.js` e `textos/en.js`, sempre os dois.
Nenhuma seção precisa ser aberta em nenhum dos dois casos.

## Os dois idiomas

A página existe inteira em português e inglês, sem biblioteca de i18n — são
dois objetos e um contexto. O idioma é decidido nesta ordem: **`?lang=en` na
URL**, depois a escolha salva no navegador, depois o idioma do sistema.

O parâmetro na URL existe para a página ser compartilhável em inglês: o
público que mais importa é o parceiro em potencial, e boa parte dele não lê
português.

Uma chave presente num idioma e ausente no outro **estoura em
desenvolvimento**, com o caminho da chave no erro. Em produção não estoura —
texto faltando não vale uma tela branca para quem está visitando.

## Deploy

O Easypanel constrói o `Dockerfile` deste repositório e serve o contêiner.
Sem registry, sem GitHub Actions, sem token: o repositório é público e o
Easypanel clona direto.

**Create Service → App**, e então:

| Campo | Valor |
| --- | --- |
| Source | GitHub → `InteliBlockchain-IBC/ib-club-website`, branch `main` |
| Build method | Dockerfile |
| Port | `3000` (container), exposta |
| Domains | `inteliblockchain.org` e `www.`, com HTTPS |

Na tela do serviço aparece um **Deploy Webhook**. Cadastrando essa URL em
GitHub → Settings → Webhooks, todo push em `main` reconstrói o site.

**O build precisa de ~1 GB de RAM livre.** Medido: pico de **849 MiB**, quase
tudo do Parcel empacotando o React. Numa VPS de 1 GB isso divide espaço com o
sistema e com o próprio Easypanel, e o build morre por OOM sem dizer o
motivo. Se for o caso, a saída é construir a imagem fora e só puxar pronta —
tinha um workflow para isso em `c517e76`, removido quando escolhemos deixar o
Easypanel construir.

Sobre variáveis: existe **uma**, `PORT`, e o Easypanel injeta sozinha. Sem
ela o Express usa 3000. Não há banco, segredo nem chamada de API. Se aparecer
uma segunda variável, ela é a primeira coisa a desconfiar.

⚠️ O DNS é o trabalho que sobra: enquanto `inteliblockchain.org` estiver
estacionado na Hostinger, nada disso aparece no domínio. Os registros `A` de
`@` e `www` precisam apontar para o IP da VPS.

## Três coisas que quebram se você não souber

**1 · A ordem das regras em `landing.css` é significativa.** Os blocos
responsivos ficam no fim de propósito: regras de mesma especificidade são
decididas por ordem, e essas precisam vencer as bases. Já quebrou duas vezes.
Não reordene a folha, e não a divida em arquivos por componente.

**2 · `three` está pregado em `0.140.0`.** O código usa `outputEncoding` e
`sRGBEncoding`, removidos em versões posteriores. Subir a versão exige
reescrever `no3d.js`, não só trocar o número.

**3 · O `import('three')` em `no3d.js` é dinâmico de propósito.** É ele que
faz o Parcel gerar um bundle separado, baixado só quando o 3D vai mesmo
renderizar — com ponteiro, com WebGL e sem `prefers-reduced-motion`. Trocar
por um import estático no topo manda 680 KB para todo celular que nunca vai
montar o canvas.

## Design

A folha de estilo obedece a um sistema fechado, e as regras abaixo são as que
mais parecem arbitrárias quando se lê o CSS sem contexto:

- **Paleta:** as oito cores do Guia de Estilos 2026, sem invenção.
- **Regra do canto:** arredondamento `0` no painel de malha, `20px` no card
  de moldura, e **nenhum valor intermediário existe na folha**.
- **Orçamento de cor:** o ciano `#1b98e0` tem **cinco usos contáveis**, todos
  marcados no CSS como `CIANO 1..5`. Um sexto uso é decisão nova, não detalhe.
- **Preenchimento chapado** só nos quatro cards de área: a cor *é* a
  taxonomia, uma por departamento do enum `Department` da plataforma de
  gestão.
- **Montserrat 900** existe num lugar só: o nome das áreas.

As specs completas (o porquê de cada uma, as nove seções, o protótipo
estático aprovado de onde este código foi portado) **não estão versionadas** —
ficam na máquina do Messias, em `design-concepts/`. Quem precisar delas as
encontra no histórico, no commit `11b5b48`.

As fotos originais em alta resolução também **não estão no git** (8,4 MB).
Ficam no Canva do clube. As derivadas web em
`client/src/landing/assets/fotos/` são 1x — gerar 2x e `srcset` continua
pendente.

## Licença

MIT — ver [LICENSE](LICENSE).
