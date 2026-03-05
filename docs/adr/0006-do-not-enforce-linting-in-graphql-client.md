# 0006 - Do Not Enforce Linting In GraphQL Client

## Date
2026-03-05

## Problem
`packages/graphql-client` is primarily generated code (schema/client artifacts and related output). Enforcing full linting guardrails there adds maintenance noise but brings limited quality benefit.

## Decision
Do not enforce linting rules in `@bulletproof/graphql-client` for generated code paths.

## Trade-Offs
- Benefits:
  - Less maintenance overhead for generated files.
  - Avoids churn from lint fixes on machine-produced code.
  - Keeps team attention focused on hand-written application logic.
- Costs:
  - Reduced style consistency checks inside this package.
  - Potential minor readability differences in generated outputs.

## Alternatives Considered
- Full lint enforcement: consistent standards, but high noise/low value for generated artifacts.
- Partial lint enforcement with many ignores: possible, but still adds config complexity for limited practical gain.

## References
- Related docs/links:
  - `packages/graphql-client/README.md`
  - `packages/graphql-client/src/gql/*`
