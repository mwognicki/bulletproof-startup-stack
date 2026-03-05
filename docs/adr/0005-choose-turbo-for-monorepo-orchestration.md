# 0005 - Choose Turbo For Monorepo Orchestration

## Date
2026-03-05

## Problem
The project needs a monorepo engine that keeps frontend/backend Node.js code in one repository while reducing build/test overhead and keeping workflow manageable as the codebase grows.

## Decision
Use Turborepo (`turbo`) as the monorepo orchestration engine.

## Trade-Offs
- Benefits:
  - Dependency-graph-aware task execution improves build/test efficiency.
  - Access to advanced scaling options such as distributed caching (for example Vercel remote cache).
  - Keeps Node.js applications in one repo, reducing cross-repo coordination chaos.
- Costs:
  - Deployment setup is more complex than single-app repos.
  - Containerization usually requires multistage Docker builds.
  - Good Docker image optimization requires deliberate implementation and maintenance.

## Alternatives Considered
- Separate repositories per app: simpler per-repo deployment but more coordination overhead and weaker shared evolution.
- Minimal workspace without a task orchestrator: lower setup complexity, but weaker cross-project optimization and caching capabilities.

## References
- Related docs/links:
  - `turbo.json`
  - `apps/backend/turbo.json`
  - `apps/frontend/turbo.json`
