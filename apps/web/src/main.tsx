import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { App } from '@/app/App';
import { queryClient } from '@/app/queryClient';
import { startAppMocks } from '@/mocks/startAppMocks';
import '@/styles/globals.css';

async function bootstrap() {
  await startAppMocks();

  const rootElement = document.getElementById('root');

  if (!rootElement) {
    throw new Error('Root element #root not found');
  }

  createRoot(rootElement).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>
  );
}

void bootstrap();