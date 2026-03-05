# Base image with Node.js + pnpm preinstalled.
FROM ghcr.io/mwognicki/nodejs-pnpm:22-10 AS base

LABEL org.opencontainers.image.authors="Marek Ognicki <marek@ognicki.ooo>"
LABEL org.opencontainers.image.title="Bulletproof Startup Stack Frontend Docker Image"

# Install dependencies using only manifest files for better Docker layer caching.
FROM base AS installer

WORKDIR /app

RUN mkdir -p apps/frontend

COPY package.json pnpm-lock.yaml \
     pnpm-workspace.yaml turbo.json \
     ./
COPY apps/frontend/package.json apps/frontend/turbo.json ./apps/frontend/

RUN pnpm --frozen-lockfile --filter @bulletproof/frontend... install

# Build frontend app through Turbo workspace pipeline.
FROM installer AS builder

WORKDIR /app

COPY apps/frontend ./apps/frontend

RUN pnpm turbo build --filter @bulletproof/frontend

# Final runtime image with only frontend build output.
FROM base AS runtime

WORKDIR /app

# Nitro output contains server entrypoint and required runtime assets.
COPY --from=builder /app/apps/frontend/.output .

ENV PORT=3000

EXPOSE $PORT

# Start the built frontend server.
CMD ["node", "./server/index.mjs"]
