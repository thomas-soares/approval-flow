export async function startAppMocks() {
  if (!import.meta.env.DEV) {
    return;
  }

  const { worker } = await import('@approval-flow/mocks/browser');

  await worker.start({
    onUnhandledRequest: 'bypass'
  });
}