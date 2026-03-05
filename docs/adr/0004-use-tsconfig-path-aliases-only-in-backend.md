# 0004 - Use Tsconfig Path Aliases Only In Backend

## Date
2026-03-05

## Problem
Path alias strategy is not equally beneficial across backend and frontend in this repository. The backend benefits from explicit module aliases, while the frontend should remain compatible with common UI kit conventions.

## Decision
Use a custom TypeScript path alias in backend (`@bulletproof/backend/*`) and avoid introducing an equivalent custom alias in frontend for now.

## Trade-Offs
- Benefits:
  - Backend imports are clearer and less fragile than deep relative paths.
  - Frontend stays aligned with conventions used by UI kits such as shadcn.
  - Avoids extra alias synchronization work between tool config files and generated/component-scaffolded files.
- Costs:
  - Different import conventions between backend and frontend.
  - Slightly less symmetry across apps in the monorepo.

## Alternatives Considered
- Use custom aliases in both apps: more uniform structure, but can conflict with frontend UI-kit expectations and add integration overhead.
- Use no aliases anywhere: simpler setup, but weaker import ergonomics in backend modules.

## References
- Related docs/links:
  - `apps/backend/tsconfig.json`
  - `apps/frontend/tsconfig.json`

## Notes
Frontend intentionally leaves room for shadcn-style conventions (notably `@/*` usage tied to `components.json` and related tooling). If frontend tooling strategy changes later, revisit this decision.
