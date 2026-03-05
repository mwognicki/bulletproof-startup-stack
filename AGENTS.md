# Repository Guidelines

## Repository Purpose
This repo is a startup engineering foundation template and professional systems-design reference. Contributions should prioritize reusable foundations, explicit trade-offs, and maintainability over short-term hacks.

## Project Structure & Module Organization
This repository is a `pnpm` workspace with a Turborepo layout:
- `apps/backend`: NestJS API (`src/main.ts`, `src/main.module.ts`, `src/config/*`), build output in `dist/`.
- `apps/frontend`: TanStack React app (`src/router.tsx`, `src/routes/*`), generated route tree in `src/routeTree.gen.ts`.
- Root config: `pnpm-workspace.yaml`, `turbo.json`, and shared lockfile.

Keep new code inside the appropriate app and colocate modules by feature.

## Build, Test, and Development Commands
Run commands from repo root:
- `pnpm --filter @bulletproof/frontend dev`: Start frontend dev server (Vite).
- `pnpm --filter @bulletproof/frontend build`: Build frontend for production.
- `pnpm --filter @bulletproof/backend start:dev`: Run backend in watch mode.
- `pnpm --filter @bulletproof/backend build`: Compile backend to `apps/backend/dist`.
- `pnpm --filter @bulletproof/backend test`: Run backend Jest tests.
- `pnpm turbo run build`: Run cached builds across workspace tasks.

## Coding Style & Naming Conventions
- Formatting is enforced by Prettier (`printWidth: 80`, `tabWidth: 4`, semicolons, double quotes).
- Use `PascalCase` for classes/components, `camelCase` for functions/variables, and `kebab-case` for file names unless framework conventions require otherwise (for example `__root.tsx`).
- Prefer explicit, feature-based names (`logger.config.ts`, `main.module.ts`).

## Testing Guidelines
- Backend uses Jest (`apps/backend/jest.config.json`) with `*.spec.ts` naming.
- Coverage output goes to `apps/coverage`.
- Run `pnpm --filter @bulletproof/backend test:cov` before opening major backend PRs.
- Frontend tests are not set up yet; if you add them, colocate near the feature and document the command in `apps/frontend/package.json`.

## Architecture & Decision Notes
- For non-trivial changes, include a short decision note in the PR description: context, options considered, chosen approach, and trade-offs.
- Prefer changes that improve typed boundaries, modularity, CI/CD readiness, and developer experience.
- When relevant, add or update diagrams/docs that explain system interactions across frontend, backend, and infrastructure.

## Commit & Pull Request Guidelines
- Current history is minimal (`Initial commit`), so keep commits short, imperative, and scoped (example: `feat(frontend): add auth guard`).
- Never continue ongoing feature work on `main`; if branch context is lost, switch back to the dedicated feature branch before editing or committing.
PRs should include:
- A clear summary of behavior changes.
- Linked issue/task ID.
- Screenshots or short recordings for UI changes.
- Notes on env/config changes and local verification steps.
- Explanation of maintenance/reusability impact.
