import type { Meta, StoryObj } from '@storybook/react';
import { tokens } from '../tokens';

const meta = {
  title: 'Foundations/Tokens',
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div className="min-h-screen bg-slate-950 p-8 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Design tokens</p>
          <h1 className="text-3xl font-semibold">Base visual system</h1>
          <p className="max-w-2xl text-slate-300">
            Cores, raio, espaçamento e tipografia compartilhados entre o app e os componentes do Storybook.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(tokens.colors.brand).map(([key, value]) => (
            <div key={key} className="space-y-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              <div className="h-20 rounded-xl" style={{ backgroundColor: value }} />
              <div>
                <p className="text-sm text-slate-400">brand-{key}</p>
                <p className="font-mono text-sm text-slate-100">{value}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
};