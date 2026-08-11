# Deploy

O site é um contêiner: Express servindo o build estático do Parcel na porta
que vier em `PORT` (3000 se não vier nada). Não tem banco, não tem segredo,
não faz chamada de API. A única variável que existe é a porta.

---

## Antes de tudo: existem três caminhos, e o mais completo não é o melhor

Vale escolher com o custo à vista. Todos os três chegam no mesmo lugar.

| | Peças que você mantém | Quando compensa |
| --- | --- | --- |
| **A · Easypanel constrói do GitHub** | 1 — o Dockerfile | Quase sempre. É o mais simples que funciona. |
| **B · GHCR + Actions** *(o que está configurado)* | 3 — Dockerfile, workflow, registry | Quando você quer a imagem versionada, testada no CI e reutilizável fora do Easypanel |
| **C · Estático puro** | 0 | Se um dia o Express sair do caminho |

### A · O caminho mais curto — Easypanel constrói sozinho

O Easypanel clona o repositório e constrói o `Dockerfile` que já está aqui.
**Não precisa de GHCR, nem de GitHub Actions, nem de token nenhum.**

1. Easypanel → **Create Service** → **App**
2. **Source: GitHub** → repositório `InteliBlockchain-IBC/ib-club-website`,
   branch `main`
3. **Build method: Dockerfile**
4. **Deploy**

Na tela do serviço aparece um **Deploy Webhook**. Cole essa URL em
GitHub → Settings → Webhooks, e todo push em `main` reconstrói o site.

O que você perde em relação ao B: a imagem só existe dentro do Easypanel, e o
build roda na sua VPS (consome CPU e RAM dela). Para uma landing, isso é
irrelevante — o build leva uns 40 segundos.

### C · Sem contêiner nenhum

O Express aqui só faz `express.static`. Se um dia não fizer mais nada além
disso, `npm run build-client` e jogar `client/dist/` em qualquer hospedagem
estática resolve — sem Node em produção, sem imagem, sem registry. Está
registrado aqui como saída, não como recomendação: enquanto o `index.js`
existir, o contêiner é o caminho coerente com o repositório.

---

## B · GHCR + GitHub Actions → Easypanel

É o que está no repositório, em `.github/workflows/publicar-imagem.yml`.

### 1 · O que o workflow faz

A cada push em `main` (ignorando mudanças só de documentação):

1. constrói a imagem e **carrega no daemon local sem publicar**;
2. **sobe o contêiner e prova que ele responde** — confere que o HTML tem
   `#root` e que o bundle referenciado nele é realmente servido. Uma imagem
   que sobe mas não serve os assets responde 200 na raiz e mesmo assim está
   quebrada; é por isso que o teste busca o `.js` também;
3. só então publica em `ghcr.io/inteliblockchain-ibc/ib-club-website`, com as
   tags `latest` e o SHA completo do commit;
4. chama o webhook do Easypanel, se ele estiver configurado.

Nada disso precisa de segredo criado à mão: o `GITHUB_TOKEN` que o Actions já
injeta tem permissão de escrita em pacotes, declarada no próprio workflow.

### 2 · Deixar a imagem visível para o Easypanel

Recém-criado, **o pacote no GHCR nasce privado**. Duas saídas:

**Pública** (mais simples, e o repositório já é público):
GitHub → aba **Packages** → `ib-club-website` → *Package settings* →
**Change visibility** → *Public*. O Easypanel puxa sem credencial.

**Privada:** criar um *fine-grained token* com `read:packages` e cadastrar no
Easypanel em **Settings → Registries**: servidor `ghcr.io`, usuário o seu
login do GitHub, senha o token.

### 3 · O serviço no Easypanel

1. **Create Service** → **App**
2. **Source: Docker Image** →
   `ghcr.io/inteliblockchain-ibc/ib-club-website:latest`
3. **Ports:** container `3000`, e marcar como exposta
4. **Domains:** `inteliblockchain.org` e `www.inteliblockchain.org`, com
   HTTPS ligado (o Easypanel emite o Let's Encrypt sozinho)
5. **Deploy**

Copie o **Deploy Webhook** da tela do serviço e cadastre em GitHub →
Settings → Secrets and variables → Actions → **New repository secret**, com
o nome `EASYPANEL_WEBHOOK`.

Sem esse secret o workflow **não falha** — ele publica a imagem e avisa no log
que o redeploy automático está desligado.

### 4 · Usar o SHA em vez de `latest`

`latest` é conveniente e não deixa rastro: dois deploys diferentes têm o mesmo
nome. Para poder voltar atrás, aponte o serviço para
`ghcr.io/inteliblockchain-ibc/ib-club-website:sha-<commit>` — o workflow
publica essa tag em todo build. Reverter passa a ser trocar o texto da tag.

---

## O DNS, que é o trabalho que sobra

Em 11 de agosto de 2026 o `inteliblockchain.org` estava **estacionado na
Hostinger** — respondia com a página de domínio parqueado, não com o site.
Enquanto isso não mudar, nada do que está acima aparece no domínio.

No painel da Hostinger, apontar para o IP da VPS onde roda o Easypanel:

```
A     @      <IP da VPS>
A     www    <IP da VPS>
```

Removendo antes os registros de parking. A propagação costuma levar minutos,
mas o TTL antigo manda — pode demorar horas.

---

## Rodar a imagem na sua máquina

```bash
docker build -t ib-club-website .
docker run --rm -p 3000:3000 ib-club-website
```

Verificado em 11 de agosto de 2026: imagem de **173 MB**, roda como usuário
`node` (não root), com 75 pacotes em runtime. O `--omit=dev` do segundo
estágio é o que garante isso: o Parcel sozinho arrasta ~1500 pacotes, e ele
não tem nada que fazer numa imagem que só serve arquivo pronto.

## Variáveis de ambiente

| Nome | Obrigatória | Para quê |
| --- | --- | --- |
| `PORT` | não | Porta do Express. O Easypanel injeta sozinho; sem ela, 3000. |

Não existe outra. Se aparecer uma, ela é a primeira coisa a desconfiar.
