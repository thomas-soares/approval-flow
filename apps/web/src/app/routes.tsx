import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { DashboardPage } from '@/features/dashboard/pages/DashboardPage';
import { HomePage } from '@/features/home/pages/HomePage';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { OperatorsPage } from '@/features/operators/pages/OperatorsPage';
import { TransfersPage } from '@/features/transfers/pages/TransfersPage';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/transfers', element: <TransfersPage /> },
      { path: '/operators', element: <OperatorsPage /> },
      { path: '*', element: <Navigate replace to="/" /> }
    ]
  }
]);