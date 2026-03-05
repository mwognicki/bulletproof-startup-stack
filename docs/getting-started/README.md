# Getting Started

This guide covers local setup for the current monorepo.

## Prerequisites
- Node.js `>= 22`
- `pnpm` `10.x` (recommended and used by this repository)

Check versions:
```bash
node -v
pnpm -v
```

## Setup
```bash
git clone git@github.com:mwognicki/bulletproof-startup-stack.git
cd bulletproof-startup-stack
pnpm install
```

`npm` or `yarn` can work technically, but `pnpm` is the supported workflow.

## Run Locally
Start backend:
```bash
pnpm --filter @bulletproof/backend start:dev
```

Start frontend (in a separate terminal):
```bash
pnpm --filter @bulletproof/frontend dev
```

Frontend styling is powered by Tailwind CSS v4. Global styles are configured in `apps/frontend/src/styles/app.css` and linked from `apps/frontend/src/routes/__root.tsx`.

Backend API is currently exposed as GraphQL at `http://localhost:8080/graphql` with a basic `health` query in place.

## Useful Commands
```bash
pnpm turbo run build
pnpm --filter @bulletproof/backend test
pnpm --filter @bulletproof/backend test:cov
pnpm --filter @bulletproof/frontend build
pnpm --filter @bulletproof/graphql-client gql:all
pnpm --filter @bulletproof/graphql-client build
```

## Backend Docker (Optional)
A production-oriented backend Dockerfile is available at `docker/backend/Dockerfile`.

Build image:
```bash
docker build -f docker/backend/Dockerfile -t bulletproof-backend:local .
```

Run container:
```bash
docker run --rm -p 8080:8080 bulletproof-backend:local
```

## Frontend Docker (Optional)
A production-oriented frontend Dockerfile is available at `docker/frontend/Dockerfile`.

Build image:
```bash
docker build -f docker/frontend/Dockerfile -t bulletproof-frontend:local .
```

Run container:
```bash
docker run --rm -p 3000:3000 bulletproof-frontend:local
```
