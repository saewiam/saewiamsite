FROM node:25-alpine AS base


FROM base as deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci


FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build


FROM base AS runner

USER node
WORKDIR /home/node/app
ENV NODE_ENV=production

COPY --from=builder --chown=node /app/.next/standalone .
COPY --from=builder --chown=node /app/.next/static ./.next/static

EXPOSE 3000
CMD HOSTNAME="0.0.0.0" node server.js
