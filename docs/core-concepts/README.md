# Core Concepts

This section explains the foundational technical choices in this repository and why they fit the project goals.

## Project Objectives (Architecture Lens)
- Build a startup-ready foundation that can evolve without early technical collapse.
- Keep decisions explicit, with visible trade-offs and maintainability in mind.
- Enable fast iteration across backend and frontend in one coherent workflow.

## Turborepo Monorepo Model
The repository uses `pnpm` workspaces + Turborepo for task orchestration.

Keeping backend and frontend in one repository makes day-to-day work easier to coordinate and reduces cross-repo overhead. Turbo runs tasks with dependency awareness, so builds and tests avoid unnecessary work and stay fast as the project grows. The setup also leaves room for distributed caching in CI (for example with Vercel), while still allowing each app to keep its own local conventions where needed.

Related docs:
- [Current Architecture Overview](../architecture/current-architecture.md)
- [ADR 0005 - Choose Turbo for monorepo orchestration](../adr/0005-choose-turbo-for-monorepo-orchestration.md)

## Chosen Application Stacks
### Backend Core
- NestJS + TypeScript
- Jest for testing

NestJS gives a practical modular structure that supports clear service boundaries as the backend evolves. Combined with TypeScript and Jest, it provides a reliable base for production-focused development, with straightforward extension points for configuration, logging, and future API capabilities.

### Frontend Core
- TanStack ecosystem + React + Vite + Tailwind CSS v4

On the frontend, the TanStack ecosystem keeps routing and data-heavy UI concerns in a consistent model, which helps avoid fragmentation over time. React + Vite keeps local development fast, and Tailwind provides a scalable, utility-first styling layer that works well with component-driven workflows and UI-kit conventions.

Related docs:
- [ADR 0003 - Choose TanStack ecosystem over Next.js](../adr/0003-choose-tanstack-ecosystem-over-nextjs.md)
- [ADR 0004 - Use tsconfig path aliases only in backend](../adr/0004-use-tsconfig-path-aliases-only-in-backend.md)

## Engineering Hygiene As A Core Concept
Detailed linting and formatting are treated as collaboration tooling, not only style enforcement.

In practice, this keeps diffs cleaner, reduces review noise, and makes IDE-assisted editing more predictable across contributors. The goal is not strictness for its own sake, but preserving momentum and clarity when multiple changes are happening in parallel.

Related docs:
- [ADR 0002 - Keep ESLint configs separate](../adr/0002-keep-eslint-configs-separate.md)
