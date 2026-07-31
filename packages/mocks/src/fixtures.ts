import type { Account, Operator, Transfer, User } from '@approval-flow/shared';

export const mockUser: User = {
  id: 'user-1',
  name: 'Ana Souza',
  email: 'ana@approvalflow.dev',
  role: 'approver',
  permissions: ['approve-transfer', 'view-dashboard']
};

export const mockAccount: Account = {
  id: 'account-1',
  balance: 245930.55,
  currency: 'BRL',
  owner: 'Approval Flow LTDA',
  updatedAt: new Date().toISOString()
};

export const mockTransfers: Transfer[] = [
  {
    id: 'transfer-1',
    type: 'PIX',
    amount: 4800,
    status: 'pending',
    requestedBy: 'user-2',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    description: 'Pagamento fornecedor'
  }
];

export const mockOperators: Operator[] = [
  {
    id: 'operator-1',
    name: 'Bruno Lima',
    email: 'bruno@approvalflow.dev',
    active: true,
    canApprove: true,
    approvalLimit: 50000,
    permissions: ['view-dashboard', 'approve-transfer']
  }
];