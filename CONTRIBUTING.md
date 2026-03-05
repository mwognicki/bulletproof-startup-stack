# Contributing Guidelines

## Scope
Contributions should improve reliability, maintainability, and clarity across the monorepo (`apps/backend`, `apps/frontend`, `docs`).

## Workflow
1. Create a branch from `main` with a focused name (example: `feat/backend-healthcheck`).
2. Keep PRs small and scoped to one concern.
3. Update docs when behavior, architecture, or setup changes.
4. For non-trivial technical choices, add or update an ADR in `docs/adr/`.

## Development Checks
Run relevant checks before opening a PR:
- `pnpm --filter @bulletproof/backend test`
- `pnpm --filter @bulletproof/backend build`
- `pnpm --filter @bulletproof/frontend build`

## GitHub Workflows
CI/CD automation lives in `.github/workflows` and is path-filtered:
- `backend-pr-tests.yml`: runs backend tests on PR (`opened`, `synchronize`) when backend-relevant files change.
- `frontend-pr-build.yml`: runs frontend build on PR (`opened`, `synchronize`) when frontend/graphql-client files change.
- `backend-docker-ghcr.yml`: on push to `main`, builds/publishes backend Docker image to GHCR.
- `frontend-docker-ghcr.yml`: on push to `main`, builds/publishes frontend Docker image to GHCR.

If your change affects backend/frontend build inputs (app code, Dockerfiles, workspace lock/config files), expect the corresponding workflow to run.

## Commit Guidelines
Use short, imperative, scoped commit messages:
- `feat(frontend): add dashboard route`
- `fix(backend): handle missing config`
- `docs(adr): document tanstack ecosystem decision`

## Issue Tracking
Open an issue before major work unless it is a small fix.
Use clear reproduction steps or concrete acceptance criteria.

Suggested issue title format:
- `bug: backend startup fails when ENV is missing`
- `feat: add typed API client for frontend`
- `docs: add architecture context diagram`

## Pull Request Expectations
- Link related issue(s).
- Explain what changed and why.
- Include screenshots for UI changes.
- Note trade-offs and follow-up work.
- If architecture changed, link the ADR.
