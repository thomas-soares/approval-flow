export function HomePage() {
  return (
    <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Scaffold base</p>
        <h2 className="text-4xl font-semibold text-white">Fundação pronta para login, dashboard e aprovações.</h2>
        <p className="text-lg leading-8 text-slate-300">
          O monorepo já nasceu separado por responsabilidade: app, UI compartilhada, tipos centrais e mocks da API.
        </p>
      </div>
    </section>
  );
}