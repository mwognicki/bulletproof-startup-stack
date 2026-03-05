# Base image with Node.js + pnpm preinstalled.
FROM ghcr.io/mwognicki/nodejs-pnpm:22-10 AS base

LABEL org.opencontainers.image.authors="Marek Ognicki <marek@ognicki.ooo>"
LABEL org.opencontainers.image.title="Bulletproof Startup Stack Backend Docker Image"

# Install dependencies using only manifest files for better Docker layer caching.
FROM base AS installer

WORKDIR /app

RUN mkdir -p apps/backend

COPY package.json pnpm-lock.yaml \
     pnpm-workspace.yaml turbo.json \
     ./
COPY apps/backend/package.json apps/backend/turbo.json ./apps/backend/

RUN pnpm --frozen-lockfile --filter @bulletproof/backend... install

# Build backend app through Turbo workspace pipeline.
FROM installer AS builder

WORKDIR /app

COPY apps/backend ./apps/backend

RUN pnpm turbo build --filter @bulletproof/backend

# Remove development dependencies before runtime image assembly.
FROM builder AS prune

ENV CI="true"

WORKDIR /app

RUN cd ./apps/backend && pnpm prune --prod

# Final runtime image: only production artifacts and runtime deps.
FROM base AS runtime

WORKDIR /app

COPY --from=prune /app /app

ENV PORT=8080

EXPOSE $PORT

# Launch compiled NestJS application.
CMD ["node", "/app/apps/backend/dist/main.js"]
