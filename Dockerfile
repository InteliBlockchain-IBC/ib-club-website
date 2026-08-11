# ─────────── build ───────────
# Precisa das devDependencies: o Parcel, o React e o Three são ferramentas e
# código de front — entram no bundle e não são requeridos em tempo de execução.
FROM node:22-alpine AS build
WORKDIR /app
# Dentro de um contêiner o V8 dimensiona o heap pela RAM do HOST, não pelo
# limite do contêiner — então sem este teto ele não coleta lixo a tempo e
# aborta mesmo com 1 GB disponível. Medido: com o teto passa em 1 GB.
ENV NODE_OPTIONS=--max-old-space-size=768
COPY package.json package-lock.json ./
RUN npm ci
COPY client ./client
COPY scripts ./scripts
RUN npm run build-client

# ─────────── runtime ───────────
# `--omit=dev` deixa só o express instalado. Sem isto, o Parcel arrastaria
# ~1500 pacotes para dentro de uma imagem que só serve arquivo estático.
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY index.js ./
COPY --from=build /app/client/dist ./client/dist

USER node
EXPOSE 3000
CMD ["node", "index.js"]
