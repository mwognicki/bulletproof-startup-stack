# Backend Application (`@bulletproof/backend`)

This app is the backend service layer of the monorepo, built with NestJS and TypeScript.

## Core Stack
- NestJS (`@nestjs/*`) as the application framework
- TypeScript for typed service/module development
- Jest for unit/integration testing

## Significant Libraries
- `nestjs-pino` + `pino-http` for structured HTTP logging
- `@nestjs/config` for configuration management
- `reflect-metadata` and `rxjs` as standard NestJS runtime dependencies

## Current Architecture Shape
- Entry point: `src/main.ts`
- Root module: `src/main.module.ts`
- Logging configuration: `src/config/logger.config.ts`
- TypeScript path alias: `@bulletproof/backend/*` (see ADR 0004)

The backend is organized around NestJS modules and is intended to evolve toward clear domain/service boundaries as features grow.

## Development Commands
Run from repository root:
```bash
pnpm --filter @bulletproof/backend start:dev
pnpm --filter @bulletproof/backend build
pnpm --filter @bulletproof/backend test
pnpm --filter @bulletproof/backend test:cov
```

## Containerization
- Dockerfile: `docker/backend/Dockerfile`
- Base image: `ghcr.io/mwognicki/nodejs-pnpm:22-10`
- Build strategy: multistage (`installer` -> `builder` -> `prune` -> `runtime`) to keep runtime image small.

Build from repository root:
```bash
docker build -f docker/backend/Dockerfile -t bulletproof-backend:local .
```

## Maintenance Note
Treat this file as living documentation. Update it when major backend architecture, runtime libraries, or operational conventions change.
