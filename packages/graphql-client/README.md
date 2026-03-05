# GraphQL Client Package (`@bulletproof/graphql-client`)

This package provides generated, typed GraphQL artifacts and shared client-facing types for consumers in the monorepo.

## Purpose
- Keep GraphQL schema/client generation centralized.
- Expose reusable typed documents and operation types.
- Reduce frontend/backend integration drift by deriving client artifacts from a single GraphQL source.

## Architecture
- Source entrypoint: `src/index.ts`
- Generated artifacts: `src/gql/*`
- Schema snapshot: `schema.graphql`
- Build output: `dist/*` (ESM/CJS/types exports)

The package is intended to be consumed by app layers (for example frontend) as a shared typed GraphQL integration layer.

## Codegen Flow
- `gql:schema`: fetch/generate schema into `schema.graphql`
- `gql:client`: generate typed client artifacts in `src/gql/`
- `gql:all`: run schema + client generation in sequence

Run from repository root:
```bash
pnpm --filter @bulletproof/graphql-client gql:all
pnpm --filter @bulletproof/graphql-client build
```

## Environment
Codegen reads GraphQL endpoint config from `GRAPH_URL` (`.env` / `.env.example`).

## Maintenance Note
Treat this file as living documentation. Update it when codegen strategy, exports, or consumer integration conventions change.
