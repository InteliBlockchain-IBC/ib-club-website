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

**A imagem é construída no GitHub Actions e publicada no GHCR; o Easypanel só
puxa a imagem pronta.** A VPS não compila nada.

Isso não foi a primeira escolha: começamos deixando o Easypanel construir a
partir do repositório, que tem menos peças. Mas o build é pesado para uma
máquina pequena — 849 MiB de pico e CPU no talo por quase um minuto — e
derrubava o resto. Os números explicam a troca:

| | Medido |
| --- | --- |
| Build (pico de memória) | 849 MiB — falha abaixo de 1 GB |
| Contêiner rodando | **17,5 MiB** |
| Imagem | 173 MB no disco, **56 MB** na rede |

Construir custa 50× mais que servir. Faz sentido pagar isso no runner do
GitHub, que é grátis para repositório público, e não na VPS que atende as
visitas.

### O que o workflow faz

A cada push em `main` (ignorando mudanças só de documentação): constrói a
imagem, **sobe o contêiner e confere que ele responde** — que o HTML tem
`#root` e que o bundle referenciado nele é servido de verdade —, e só então
publica em `ghcr.io/inteliblockchain-ibc/ib-club-website`, com as tags
`latest` e o SHA do commit. Por fim chama o webhook do Easypanel, se houver.

Nenhum segredo precisa ser criado à mão para publicar: o `GITHUB_TOKEN` que o
Actions injeta já tem escrita em pacotes.

### Configurar

1. **Deixe o pacote público.** Ele nasce privado. Em Packages →
   `ib-club-website` → Package settings → Change visibility → Public. Com o
   repositório já público não há o que proteger, e evita gastar a cota de
   pacote privado do plano Free da organização (500 MB de armazenamento e
   1 GB/mês de tráfego — a 56 MB por pull, isso acaba em ~18 deploys).
2. **No Easypanel:** Create Service → App → **Source: Docker Image** →
   `ghcr.io/inteliblockchain-ibc/ib-club-website:latest`. Port `3000`
   exposta, domínios com HTTPS.
3. **Redeploy automático:** copie o Deploy Webhook da tela do serviço e
   cadastre em GitHub → Settings → Secrets → Actions como
   `EASYPANEL_WEBHOOK`. Sem ele o workflow não falha — publica a imagem e
   avisa no log que o redeploy automático está desligado.

Para poder voltar atrás num deploy, aponte o serviço para a tag
`sha-<commit>` em vez de `latest`: o workflow publica as duas.

Sobre variáveis: existe **uma**, `PORT`, e o Easypanel injeta sozinha. Sem
ela o Express usa 3000. Não há banco, segredo nem chamada de API.

⚠️ O DNS é o trabalho que sobra: enquanto `inteliblockchain.org` estiver
estacionado na Hostinger, nada disso aparece no domínio. Os registros `A` de
`@` e `www` precisam apontar para o IP da VPS.

## SEO

A página é montada por React, e isso é um problema de indexação que meta tag
nenhuma resolve: rastreadores de rede social, de mensageiro e de buscador de
IA **não executam JavaScript**, e a passada de renderização do Googlebot é
atrasada e limitada. Para todos eles, uma SPA sem tratamento é uma página em
branco com um `<script>` dentro.

Por isso o build termina em `scripts/prerender.js`, que renderiza a página
com `react-dom/server` e grava o HTML pronto. O shell de 824 B virou **27 KB
com 905 palavras**, e o React apenas hidrata o que já está lá.

**Cada idioma tem URL própria** — `/` e `/en/` —, cada uma canônica de si
mesma, amarradas por `hreflang` (incluindo `x-default`) no cabeçalho e no
sitemap. Sem isso a versão em inglês não existe para um buscador. **Não há
redirecionamento automático** por idioma do navegador: ele atrapalha o
rastreamento e tira a escolha do visitante. Quem decide é a URL, e o seletor
da navbar é um link de verdade — é assim que o robô descobre a outra versão.

O `prerender.js` também gera `robots.txt`, `sitemap.xml` com os alternates, e
os dados estruturados (`Organization` + `WebSite` em JSON-LD) que descrevem o
clube para o buscador: fundação em 2022, vínculo com o Inteli, redes, contato
e os temas que ele domina.

O texto de título e descrição de cada idioma fica em `i18n/*.js`, em `seo`.

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

Branch a partir da `main`, PR para a `main`. Conventional commits, com a
descrição em português.

```bash
git switch -c feat/minha-mudanca
git push -u origin feat/minha-mudanca
gh pr create --base main
```

A `main` tem um ruleset chamado **Protect Main**, criado em junho de 2025.
Ele exige pull request com **uma aprovação**, e bloqueia force push e exclusão
da branch. O autor não pode aprovar o próprio PR — isso o GitHub garante.

Ele ficou inerte enquanto o repositório era privado, porque ruleset não
funciona em repositório privado no plano Free da organização. Voltou a valer
sozinho quando o repositório foi aberto.

**O bypass é `OrganizationAdmin`**, e a organização tem oito owners. Para eles
a regra não vale: continuam podendo dar push direto na `main`. Se a intenção
for que a revisão valha para todo mundo, o que precisa mudar é a lista de
bypass do ruleset ou a quantidade de owners — não o ruleset em si.

## Licença

MIT — ver [LICENSE](LICENSE).
