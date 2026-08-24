import Reveal from '../components/Reveal'
import { ArrowUpRight } from 'lucide-react'

const ACHIEVEMENTS = [
  {
    title: 'Global BNI Network Expansion',
    desc: 'Built a pipeline of 200+ prospects across the Middle East, Africa, Europe, and the Americas, converting these relationships into active partnerships.',
    tags: ['BNI', 'Networking', 'Global'],
    gradient: 'from-violet-600/40 via-purple-500/20 to-transparent',
    accent: 'text-violet-300',
  },
  {
    title: 'Hygiene & Export Operations',
    desc: 'Managed international outreach and distribution strategy for Clearzone hygiene products across 15+ countries.',
    tags: ['B2B Sales', 'Exports', 'FMCG'],
    gradient: 'from-cyan-500/40 via-sky-500/20 to-transparent',
    accent: 'text-cyan-300',
  },
  {
    title: 'Sika Construction Chemicals',
    desc: 'Generated ₹5,00,000+ in confirmed sales within 3 months, developing a robust pipeline targeting contractors and builders.',
    tags: ['Construction', 'Pipeline', 'Sales'],
    gradient: 'from-fuchsia-500/40 via-pink-500/20 to-transparent',
    accent: 'text-fuchsia-300',
  },
  {
    title: 'Digital Marketing & IT Sales',
    desc: 'Drove strategic outreach for Jundalo Technologies, securing interest from hotel groups, spas, and agencies globally.',
    tags: ['B2B Services', 'Marketing', 'Outreach'],
    gradient: 'from-emerald-500/40 via-teal-500/20 to-transparent',
    accent: 'text-emerald-300',
  },
]

export default function Projects() {
  return (
    <section id="achievements" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-cyan-300">04 — Key achievements</p>
        <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">
          Sectors I've <span className="text-gradient">scaled & sold</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {ACHIEVEMENTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="glass group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className={`font-mono2 text-xs uppercase tracking-[0.25em] ${p.accent}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex gap-2 text-white/40">
                    <ArrowUpRight size={18} className="cursor-pointer transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300" />
                  </div>
                </div>
                <h3 className="font-display mt-6 text-2xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-white/60">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-3 py-1 font-mono2 text-[11px] text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
