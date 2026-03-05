# Getting Started

This guide covers local setup for the current monorepo.

## Prerequisites
- Node.js `>= 22`
- `pnpm` `10.x` (recommended and used by this repository)

Check versions:
```bash
node -v
pnpm -v
```

## Setup
```bash
git clone git@github.com:mwognicki/bulletproof-startup-stack.git
cd bulletproof-startup-stack
pnpm install
```

`npm` or `yarn` can work technically, but `pnpm` is the supported workflow.

## Run Locally
Start backend:
```bash
pnpm --filter @bulletproof/backend start:dev
```

Start frontend (in a separate terminal):
```bash
pnpm --filter @bulletproof/frontend dev
```

## Useful Commands
```bash
pnpm turbo run build
pnpm --filter @bulletproof/backend test
pnpm --filter @bulletproof/backend test:cov
pnpm --filter @bulletproof/frontend build
```
