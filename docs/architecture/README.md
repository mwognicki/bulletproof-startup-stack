# Architecture

This section explains how the repository is structured as a working system, not just a set of apps. It focuses on architectural boundaries, key decisions, and trade-offs that affect long-term maintainability.

## What You Should Read First
Start with the current-state overview to understand the present architecture:
- [Current Architecture Overview](./current-architecture.md)

Then review ADRs for the reasoning behind major choices:
- [Architecture Decision Records](../adr/README.md)

## Scope Of This Section
- Application boundaries (`apps/backend`, `apps/frontend`)
- Shared monorepo orchestration (Turbo + workspace setup)
- Cross-cutting engineering practices that shape architecture (for example linting strategy and typed boundaries)
- Evolving design notes and diagrams

## Current Index
- [Current Architecture Overview](./current-architecture.md)
- [Diagrams Index](./diagrams/README.md)

## How To Extend
When adding new architecture docs:
1. Document one concern per file (for example API boundary strategy, deployment topology, observability model).
2. Link related ADRs directly in the doc.
3. Update this index so the architecture section stays navigable.
