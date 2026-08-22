import type { CSSProperties } from 'react'
import Reveal from '../components/Reveal'
import { Palette, Terminal, Boxes, Cpu } from 'lucide-react'

const SKILLS = [
  { name: 'B2B Sales & Outreach', level: 92, color: 'from-cyan-400 to-sky-500' },
  { name: 'BNI Networking & Client Acquisition', level: 88, color: 'from-violet-400 to-purple-600' },
  { name: 'Lead Generation & Research', level: 86, color: 'from-fuchsia-400 to-pink-500' },
  { name: 'Pipeline Management & CRM', level: 85, color: 'from-emerald-400 to-teal-500' },
  { name: 'International Sales', level: 80, color: 'from-amber-400 to-orange-500' },
  { name: 'Construction & Hygiene Products Sales', level: 78, color: 'from-blue-400 to-indigo-500' },
]

const PILLARS = [
  { icon: Terminal, title: 'Scale-Driven Outreach', desc: 'Building extensive lead pipelines and directly targeting decision-makers globally.' },
  { icon: Palette, title: 'International Markets', desc: 'Experience selling in 15+ countries across Africa, Middle East, Europe and the Americas.' },
  { icon: Boxes, title: 'Relationship Building', desc: 'Turning cold contacts into long-term strategic partnerships and confirmed revenue.' },
  { icon: Cpu, title: 'Data-Backed Strategies', desc: 'Identifying accurate ICPs and tracking KPIs to consistently improve conversion rates.' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-cyan-300">02 — Judge for yourself</p>
        <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">
          Skills, <span className="text-gradient">measured honestly</span>
        </h2>
        <p className="mt-4 max-w-xl text-white/60">
          No inflated 100% bars here — this is a truthful snapshot of where I stand and where I'm growing.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <Reveal delay={100}>
          <div className="glass rounded-3xl p-8">
            <div className="flex flex-col gap-6">
              {SKILLS.map((s) => (
                <div key={s.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-white/85">{s.name}</span>
                    <span className="font-mono2 text-xs text-cyan-300">{s.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/8">
                    <div
                      className={`skill-fill h-full rounded-full bg-gradient-to-r ${s.color}`}
                      style={{ '--level': `${s.level}%` } as CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={150 + i * 80}>
              <div className="glass group h-full rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-cyan-300/40">
                <p.icon size={24} className="text-violet-400 transition-transform group-hover:scale-110" />
                <h3 className="font-display mt-4 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
