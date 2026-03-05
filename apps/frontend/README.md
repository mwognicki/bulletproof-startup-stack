# Frontend Application (`@bulletproof/frontend`)

This app is the frontend layer of the monorepo, built around the TanStack ecosystem, React, and Vite.

## Core Stack
- React 19 for UI rendering
- Vite for fast local development and builds
- TanStack Router + React Start for routing/application structure
- TanStack Query for server-state and async data flows

## Significant Libraries
- `@tanstack/react-router`
- `@tanstack/react-start`
- `@tanstack/react-query`
- `nitro` (runtime/server output integration for current setup)

## Current Architecture Shape
- App router setup: `src/router.tsx`
- Route files: `src/routes/*`
- Generated route tree: `src/routeTree.gen.ts`

The frontend intentionally aligns with TanStack-first patterns (see ADR 0003) and avoids custom path-alias setup that may conflict with common UI-kit workflows (see ADR 0004).

## Development Commands
Run from repository root:
```bash
pnpm --filter @bulletproof/frontend dev
pnpm --filter @bulletproof/frontend build
```

## Maintenance Note
Treat this file as living documentation. Update it when routing strategy, state/data model, or core frontend runtime/tooling decisions change.
