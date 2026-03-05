# 0002 - Keep ESLint Configs Separate

## Date
2026-03-05

## Problem
The repository has two primary stacks (`apps/backend` and `apps/frontend`) with different runtime models, tooling, and linting needs. A shared ESLint config can create friction in IDE automation and introduce rule conflicts that slow down day-to-day work.

## Decision
Keep ESLint configuration separate per app for now. Do not introduce a shared ESLint package/config at this stage.

## Trade-Offs
- Benefits:
  - Better IDE automation reliability in each app.
  - Rules can match backend/frontend realities without compromise.
  - Detailed lint rules (for example auto-sorting imports and removing unused imports) keep diffs cleaner and reduce review noise, which helps team velocity.
- Costs:
  - Some duplicated configuration across apps.
  - Rule updates must be applied in more than one place.

## Alternatives Considered
- Shared ESLint config now: stronger centralization, but higher risk of IDE/tooling friction and cross-stack rule mismatch.
- Minimal linting now: less setup effort, but weaker code consistency and noisier git history.

## References
- Related docs/links:
  - `apps/backend/eslint.config.js`
  - `apps/frontend/eslint.config.js`

## Revisit
This remains an open question. Re-evaluate shared ESLint configuration when backend and frontend rule needs converge, IDE behavior is stable, or config duplication becomes a recurring maintenance cost.
