import { Shield, Rocket, Cpu, Video, LineChart, Lock } from 'lucide-react'

const features = [
  { icon: Shield, title: 'Enterprise security', desc: 'RLS, encryption at rest, 2FA, and audit trails by default.' },
  { icon: Video, title: 'Video-first profiles', desc: 'Video resumes and professional reels with robust analytics.' },
  { icon: Cpu, title: 'AI assistant', desc: 'Content generation and profile optimization with usage controls.' },
  { icon: LineChart, title: 'Real-time analytics', desc: 'Live engagement metrics, trending content, and insights.' },
  { icon: Rocket, title: 'Blazing performance', desc: 'Partitioned tables, materialized views, and smart indexing.' },
  { icon: Lock, title: 'Zero-trust ready', desc: 'JWT auth, refresh tokens, secure sessions and CSRF protection.' }
]

export default function FeatureGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-700/60 bg-slate-800/50 p-6 hover:bg-slate-800/70 transition">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-blue-200/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
