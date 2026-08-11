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

Ver **[DEPLOY.md](DEPLOY.md)**. Resumo: é um contêiner com Express servindo
estático em `PORT`, sem banco e sem segredo. O push em `main` publica a
imagem no GHCR pelo GitHub Actions; o `DEPLOY.md` também descreve o caminho
mais curto, em que o Easypanel constrói direto do repositório e dispensa
registry e workflow.

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

O sistema (paleta, tipografia, regra do canto, orçamento de cor, as nove
seções) está em `design-concepts/`:

- `SPEC-landing-hibrida.md` — o sistema de design
- `SPEC-rodada-2.md` — parceria/hackathon, o nó 3D, as fotos
- `PLANO-rodada-2.md` — armadilhas de verificação já pagas em tempo
- `hibrido-v1-central.html` — o protótipo estático aprovado, de onde este
  código foi portado. Fica como registro; não é servido.

As fotos originais em alta resolução **não estão no git** (8,4 MB). Ficam no
Canva do clube. As derivadas web em `client/src/landing/assets/fotos/` são 1x
— gerar 2x e `srcset` continua pendente (SPEC-rodada-2 §3.7).

## Licença

MIT — ver [LICENSE](LICENSE).
