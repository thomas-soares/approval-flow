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

## Fase 0 - Setup e fundação

- [x] Criar repo + estrutura de pastas feature-based (`features/auth`, `features/dashboard`, `features/transfers`, `features/operators`).
- [x] Configurar Vite + React + TypeScript + ESLint/Prettier.
- [x] Configurar Tailwind.
- [x] Subir Storybook.
- [x] Configurar MSW com os endpoints principais mapeados: `/auth/login`, `/account/balance`, `/account/statement`, `/transfers`, `/operators`.
- [x] Definir os tipos TS centrais (`User`, `Operator`, `Transfer`, `ApprovalStatus`, `Account`).

## Fase 1 - Autenticação e permissões

- [ ] Tela de login com formulário e validação.
- [ ] JWT mock com refresh token flow.
- [ ] Store de sessão no Zustand com usuário logado, role e permissões.
- [ ] Rotas protegidas por role para admin, aprovador e operador comum.
- [ ] Testes unitários do fluxo de login e do store de auth.

## Fase 2 - Design System base

- [ ] Componentes essenciais no Storybook: Button, Input, Select, Badge, Table, Modal e Toast.
- [ ] Checklist de acessibilidade em cada componente: foco visível, aria-labels, contraste e navegação por teclado.
- [ ] Tokens de cores, spacing e tipografia documentados no próprio Storybook.

## Fase 3 - Dashboard e extrato

- [ ] Tela de saldo com TanStack Query consumindo o mock.
- [ ] Tela de extrato com filtros de período e tipo de transação.
- [ ] Estados de loading, erro e vazio bem tratados.
- [ ] Testes de integração com RTL do dashboard.

## Fase 4 - Fluxo de aprovação transacional

- [ ] Tela de solicitação de PIX/TED para o operador comum.
- [ ] Fila de aprovações para o aprovador.
- [ ] Ação de aprovar e rejeitar com justificativa.
- [ ] Máquina de estados da transferência: pendente, aprovada, rejeitada e executada.
- [ ] Notificação toast de mudança de status.
- [ ] Testes unitários da state machine e testes de integração do fluxo completo.

## Fase 5 - Gestão de operadores

- [ ] Tela de listagem de operadores.
- [ ] Criar e editar operador com permissões, aprovação e limite de valor.
- [ ] Regras de UI condicionadas à role, com botões aparecendo e sumindo conforme permissão.
- [ ] Testes cobrindo os diferentes níveis de permissão.

## Fase 6 - E2E e qualidade

- [ ] Playwright cobrindo os fluxos críticos: login, solicitar transferência, aprovar e ver no extrato.
- [ ] Revisão de cobertura de testes com report de coverage.
- [ ] Lighthouse e axe-core para acessibilidade.
