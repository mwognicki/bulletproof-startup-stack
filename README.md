# bulletproof-startup-stack

Production-oriented startup stack foundations built as a `pnpm` workspace with Turborepo, NestJS backend services, and a TanStack-based frontend.

## Project Status
This repository is currently **WIP** and is being developed intensively.

## Why This Repository
- Establish practical engineering foundations for early product teams.
- Keep architecture and trade-offs explicit and easy to evolve.
- Demonstrate reusable patterns across backend, frontend, and delivery setup.
- Showcase good practices for working with coding companions (here: OpenAI Codex).

## Monorepo Structure
- `apps/backend` - NestJS API application.
- `apps/frontend` - TanStack + Vite frontend application.
- `packages/graphql-client` - shared typed GraphQL client/codegen package.
- `docs` - Project documentation, architecture notes, and ADRs.

## Quick Start
```bash
git clone git@github.com:mwognicki/bulletproof-startup-stack.git
cd bulletproof-startup-stack
pnpm install
pnpm --filter @bulletproof/backend start:dev
pnpm --filter @bulletproof/frontend dev
```

For this codebase, `pnpm` is recommended. `npm`/`yarn` can work technically, but are not recommended.

## Common Commands
```bash
# Build all configured workspaces/tasks
pnpm turbo run build

# Build individual apps
pnpm --filter @bulletproof/backend build
pnpm --filter @bulletproof/frontend build
pnpm --filter @bulletproof/graphql-client build

# Run backend tests
pnpm --filter @bulletproof/backend test
pnpm --filter @bulletproof/backend test:cov

# Generate GraphQL client artifacts
pnpm --filter @bulletproof/graphql-client gql:all

# Backend GraphQL endpoint (when running locally)
# http://localhost:8080/graphql

# Build backend Docker image
docker build -f docker/backend/Dockerfile -t bulletproof-backend:local .

# Build frontend Docker image
docker build -f docker/frontend/Dockerfile -t bulletproof-frontend:local .
```

## Documentation
- [Documentation Index](./docs/README.md)
- [Getting Started](./docs/getting-started/README.md)
- [Architecture](./docs/architecture/README.md)
- [Architecture Diagrams](./docs/architecture/diagrams/README.md)
- [Architecture Decision Records (ADR)](./docs/adr/README.md)
- [Backend App Architecture](./apps/backend/README.md)
- [Frontend App Architecture](./apps/frontend/README.md)
- [GraphQL Client Package Architecture](./packages/graphql-client/README.md)

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) for workflow, issue, and PR expectations.

## Repository Guidelines
See [AGENTS.md](./AGENTS.md) for repository contribution guidelines.
