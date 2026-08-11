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
    ├── data.js              links, imagens, dimensões e ordem (sem idioma)
    ├── i18n/pt.js           todo o texto em português
    ├── i18n/en.js           todo o texto em inglês
    ├── i18n/index.js        contexto de idioma, detecção e persistência
    ├── knot3d.js            a marca em 3D (Three.js sob demanda)
    ├── SectionHeader.js     cabeçalho de seção, usado sete vezes
    ├── PanelPair.js         a grade de dois painéis, usada duas vezes
    ├── Emphasis.js          o negrito dentro de um texto traduzido
    ├── assets/
    └── sections/            uma seção por arquivo
```

Para trocar **um link, uma imagem ou a ordem**: `data.js`.
Para trocar **qualquer texto**: `i18n/pt.js` e `i18n/en.js`, sempre os dois.
Nenhuma seção precisa ser aberta em nenhum dos dois casos.

Código, nomes de arquivo, classes CSS e chaves são em **inglês**; comentários e
documentação em **português**, como manda a convenção do workspace. O texto que
o visitante lê não é código: mora em `i18n/`, nos dois idiomas.

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
Sem registry, sem GitHub Actions e **sem token**: o repositório é público, e o
Easypanel clona direto. Não há segredo nenhum envolvido no deploy.

**Create Service → App**, e então:

| Campo | Valor |
| --- | --- |
| Source | GitHub → `InteliBlockchain-IBC/ib-club-website`, branch `main` |
| Build method | Dockerfile |
| Port | `3000` (container), exposta |
| Domains | `inteliblockchain.org` e `www.`, com HTTPS |

Na tela do serviço aparece um **Deploy Webhook**. Cadastrando essa URL em
GitHub → Settings → Webhooks, todo push em `main` reconstrói o site.

**O build precisa de 1 GB de RAM; o site rodando precisa de 18 MB.**
Os dois números foram medidos, e a distância entre eles é o Parcel
empacotando o React — não o site.

| | Medido |
| --- | --- |
| Build (pico) | 849 MiB — falha abaixo de 1 GB |
| Contêiner rodando | **17,5 MiB** |
| Imagem no disco / na rede | 173 MB / 56 MB comprimida |

Uma VPS pequena **roda** o site folgado e pode não conseguir **construí-lo**.
Se o build morrer com `Aborted (core dumped)`, é isto. Duas saídas: subir a
máquina para o build, ou construir a imagem fora e só puxar pronta — havia um
workflow para isso em `c517e76`.

O `ENV NODE_OPTIONS=--max-old-space-size=768` no Dockerfile existe por causa
disso: dentro de um contêiner o V8 dimensiona o heap pela RAM do **host**, não
pelo limite do contêiner, e sem esse teto ele nem tenta coletar lixo antes de
estourar. Com o teto, o build passa em 1 GB; sem ele, aborta até com 1 GB.

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
reescrever `knot3d.js`, não só trocar o número.

**3 · O `import('three')` em `knot3d.js` é dinâmico de propósito.** É ele que
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
`client/src/landing/assets/photos/` são 1x — gerar 2x e `srcset` continua
pendente.

## Contribuir

A `main` é protegida por ruleset: **não aceita push direto**. Toda mudança
entra por pull request, com uma aprovação — e o GitHub não deixa o autor
aprovar o próprio PR. Force push e exclusão da branch estão bloqueados.

O ruleset **não tem lista de bypass**, de propósito: com bypass de admin ele
não protegeria nada, porque quase todo mundo com escrita aqui é admin.

```bash
git switch -c feat/minha-mudanca
# ... commits ...
git push -u origin feat/minha-mudanca
gh pr create --base main
```

Conventional commits, com a descrição em português.

## Licença

MIT — ver [LICENSE](LICENSE).
