# 0003 - Choose TanStack Ecosystem Over Next.js

## Date
2026-03-05

## Problem
The frontend foundation needs a long-term direction that avoids fragmented tooling choices. In many projects, teams start with one framework and later introduce TanStack libraries (for example Query or Table) anyway, which can create ecosystem sprawl.

## Decision
Use the TanStack ecosystem as the primary frontend direction instead of adopting Next.js as the baseline framework.

## Trade-Offs
- Benefits:
  - Strong, cohesive ecosystem across routing, data fetching, and advanced UI/data use cases.
  - Natural path to adopt more TanStack tools (`@tanstack/react-query`, `@tanstack/react-router`, `@tanstack/react-table`) without mixing paradigms.
  - Better consistency in architecture and developer mental model.
- Costs:
  - Less out-of-the-box convention compared to Next.js defaults.
  - More responsibility to define project structure and delivery patterns directly.

## Alternatives Considered
- Next.js baseline: mature and popular, but likely to still adopt TanStack libraries for key frontend concerns, increasing stack heterogeneity.
- Mixed ecosystem from the start: flexible, but raises maintenance and onboarding complexity.

## References
- Related docs/links:
  - `apps/frontend/package.json`
  - `apps/frontend/src/router.tsx`
