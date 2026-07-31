import { Link, Outlet } from 'react-router-dom';

const navigation = [
  { href: '/', label: 'Início' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/transfers', label: 'Transferências' },
  { href: '/operators', label: 'Operadores' }
];

export function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Approval Flow</p>
            <h1 className="text-lg font-semibold">Plataforma de aprovação transacional</h1>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
            {navigation.map((item) => (
              <Link key={item.href} className="rounded-full px-3 py-1 transition hover:bg-white/10 hover:text-white" to={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}