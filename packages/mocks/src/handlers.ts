import { http, HttpResponse } from 'msw';
import { mockAccount, mockOperators, mockTransfers, mockUser } from './fixtures';

const loginResponse = {
  accessToken: 'mock-access-token',
  refreshToken: 'mock-refresh-token',
  user: mockUser
};

export const handlers = [
  http.post('/auth/login', async () => HttpResponse.json(loginResponse)),
  http.post('/auth/refresh', async () => HttpResponse.json({ accessToken: 'mock-access-token-2' })),
  http.get('/account/balance', async () => HttpResponse.json(mockAccount)),
  http.get('/account/statement', async () => HttpResponse.json({ items: [] })),
  http.get('/transfers', async () => HttpResponse.json({ items: mockTransfers })),
  http.post('/transfers', async ({ request }) => {
    const body = (await request.json()) as Record<string, unknown>;

    return HttpResponse.json(
      {
        id: 'transfer-created',
        type: body.type ?? 'PIX',
        amount: body.amount ?? 0,
        status: 'pending',
        requestedBy: mockUser.id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        description: body.description ?? ''
      },
      { status: 201 }
    );
  }),
  http.get('/operators', async () => HttpResponse.json({ items: mockOperators })),
  http.post('/operators', async ({ request }) => {
    const body = (await request.json()) as Record<string, unknown>;

    return HttpResponse.json(
      {
        id: 'operator-created',
        name: body.name ?? 'Novo operador',
        email: body.email ?? 'novo@approvalflow.dev',
        active: true,
        canApprove: Boolean(body.canApprove),
        approvalLimit: Number(body.approvalLimit ?? 0),
        permissions: Array.isArray(body.permissions) ? body.permissions : []
      },
      { status: 201 }
    );
  })
];