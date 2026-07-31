export type Role = 'admin' | 'approver' | 'operator';

export type ApprovalStatus = 'pending' | 'approved' | 'rejected' | 'executed';

export type TransferType = 'PIX' | 'TED';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  permissions: string[];
}

export interface Operator {
  id: string;
  name: string;
  email: string;
  active: boolean;
  canApprove: boolean;
  approvalLimit: number;
  permissions: string[];
}

export interface Transfer {
  id: string;
  type: TransferType;
  amount: number;
  status: ApprovalStatus;
  requestedBy: string;
  approvedBy?: string;
  rejectionReason?: string;
  createdAt: string;
  updatedAt: string;
  description?: string;
}

export interface Account {
  id: string;
  balance: number;
  currency: string;
  owner: string;
  updatedAt: string;
}