FROM node:25-alpine AS base


FROM base as deps

WORKDIR /app

COPY package*.json ./
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

COPY --from=builder --chown=node /app/dist .
COPY --from=builder --chown=node /app/public .
COPY --from=builder --chown=node /app/package*.json .
COPY --from=deps --chown=node /app/node_modules .

EXPOSE 4321
CMD ["npm", "run", "preview"]
