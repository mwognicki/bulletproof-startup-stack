# Frontend Application (`@bulletproof/frontend`)

This app is the frontend layer of the monorepo, built around the TanStack ecosystem, React, and Vite.

## Core Stack
- React 19 for UI rendering
- Vite for fast local development and builds
- TanStack Router + React Start for routing/application structure
- TanStack Query for server-state and async data flows
- Tailwind CSS v4 for utility-first styling

## Significant Libraries
- `@tanstack/react-router`
- `@tanstack/react-start`
- `@tanstack/react-query`
- `tailwindcss` + `@tailwindcss/vite`
- `tailwind-merge`
- `nitro` (runtime/server output integration for current setup)

## Current Architecture Shape
- App router setup: `src/router.tsx`
- Route files: `src/routes/*`
- Generated route tree: `src/routeTree.gen.ts`
- Global style entry: `src/styles/app.css`
- Root stylesheet injection: `src/routes/__root.tsx`

The frontend intentionally aligns with TanStack-first patterns (see ADR 0003) and avoids custom path-alias setup that may conflict with common UI-kit workflows (see ADR 0004).

## Styling
Tailwind is enabled through Vite (`@tailwindcss/vite`) and loaded from `src/styles/app.css` via the root route head links. This keeps styling global setup explicit while allowing feature-level component styles to remain colocated.

## Development Commands
Run from repository root:
```bash
pnpm --filter @bulletproof/frontend dev
pnpm --filter @bulletproof/frontend build
```

## Containerization
- Dockerfile: `docker/frontend/Dockerfile`
- Base image: `ghcr.io/mwognicki/nodejs-pnpm:22-10`
- Build strategy: multistage (`installer` -> `builder` -> `runtime`) to keep runtime image focused on build output.

Build from repository root:
```bash
docker build -f docker/frontend/Dockerfile -t bulletproof-frontend:local .
```

## Maintenance Note
Treat this file as living documentation. Update it when routing strategy, state/data model, or core frontend runtime/tooling decisions change.
