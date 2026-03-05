# Current Architecture Overview

## Monorepo Layout
The repository is a `pnpm` workspace orchestrated by Turborepo:
- `apps/backend`: NestJS API app (TypeScript, Jest).
- `apps/frontend`: TanStack + Vite frontend app (TypeScript, React).
- Root-level workspace orchestration via `pnpm-workspace.yaml` and `turbo.json`.

## Backend (`apps/backend`)
- Framework: NestJS.
- API style: GraphQL with Nest Apollo driver (code-first schema).
- Entry points: `src/main.ts`, `src/main.module.ts`.
- Logging config: `src/config/logger.config.ts`.
- Basic resolver: `src/main.resolver.ts` (`health` query).
- TypeScript path alias enabled: `@bulletproof/backend/*` (see ADR 0004).
- Tests: Jest with `*.spec.ts`.
- Containerization: dedicated multistage Dockerfile at `docker/backend/Dockerfile`.

## Frontend (`apps/frontend`)
- Stack: TanStack ecosystem + React + Vite + Tailwind CSS v4.
- Routing: TanStack Router (`src/router.tsx`, `src/routes/*`).
- Route tree generation: `src/routeTree.gen.ts`.
- Styling: Tailwind loaded from `src/styles/app.css`, linked in root route (`src/routes/__root.tsx`), with Vite integration via `@tailwindcss/vite`.
- Uses frontend conventions compatible with UI-kit workflows (see ADR 0004, ADR 0003).
- Containerization: dedicated multistage Dockerfile at `docker/frontend/Dockerfile`.

## Turborepo Usage
Turbo is used as the monorepo task engine:
- Graph-aware task scheduling for builds/tests.
- Per-app task definitions in:
  - `apps/backend/turbo.json`
  - `apps/frontend/turbo.json`
- Global turbo config in `turbo.json`.

Primary command:
```bash
pnpm turbo run build
```

## Linting Rules
Both apps keep separate ESLint configs (see ADR 0002):
- `apps/backend/eslint.config.js`
- `apps/frontend/eslint.config.js`

Current linting approach:
- TypeScript-focused recommended rules.
- Prettier integration.
- Import hygiene via:
  - `eslint-plugin-unused-imports` (auto-remove unused imports)
  - `eslint-plugin-simple-import-sort` (stable import ordering)
- Additional React/TanStack rules in frontend config.

This setup favors clean diffs, low review noise, and predictable IDE autofix behavior.
