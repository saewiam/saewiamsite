FROM node:25-alpine AS base


FROM base AS deps

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci


FROM base AS files

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .


FROM base AS builder

USER node
WORKDIR /home/node

COPY --from=files --chown=node /app ./app

WORKDIR /home/node/app

CMD npm run build
