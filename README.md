# approval-flow

Monorepo do projeto de aprovação transacional em React + TypeScript.

## Estrutura

- `apps/web`: app principal com Vite, React Router, TanStack Query, Zustand, Tailwind e integração com MSW.
- `packages/shared`: tipos centrais do domínio.
- `packages/ui`: tokens do design system e stories iniciais do Storybook.
- `packages/mocks`: handlers e fixtures do mock da API.

## Scripts

- `pnpm dev`: sobe o app web.
- `pnpm storybook`: sobe o Storybook.
- `pnpm build`: executa os builds dos workspaces com script de build.
- `pnpm lint`: roda ESLint no repositório.
- `pnpm install`: instala as dependências usando o workspace do pnpm.

## Fase 0 entregue

- Monorepo com pastas feature-based.
- Vite + React + TypeScript.
- Tailwind configurado no app e no Storybook.
- Storybook com tokens base.
- MSW com os endpoints `/auth/login`, `/auth/refresh`, `/account/balance`, `/account/statement`, `/transfers` e `/operators`.
- Tipos centrais para `User`, `Operator`, `Transfer`, `ApprovalStatus`, `Account`.