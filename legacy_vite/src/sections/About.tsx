import Reveal from '../components/Reveal'
import { Globe, Target, BriefcaseBusiness, Handshake } from 'lucide-react'

const STATS = [
  { icon: Globe, value: '15+', label: 'Countries' },
  { icon: BriefcaseBusiness, value: '3', label: 'Industries' },
  { icon: Target, value: '200+', label: 'Global Prospects' },
  { icon: Handshake, value: '50+', label: 'BNI Meetings' },
]

const TAGS = ['B2B Sales', 'International Outreach', 'Pipeline Management', 'Lead Generation', 'CRM', 'Networking']

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-cyan-300">01 — Who am I</p>
        <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">
          The human behind <span className="text-gradient">the outreach</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3" delay={100}>
          <div className="glass glow-ring rounded-3xl p-8">
            <p className="text-lg leading-relaxed text-white/80">
              I'm <span className="font-semibold text-white">Rushi Soni</span> — a business development professional with years of real-world B2B sales experience across 3 industries and 15+ countries.
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              At an age when most people are still in college, I was simultaneously managing international outreach for hygiene products, construction chemicals, and services — generating revenue and building a global network of qualified business contacts through BNI.
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              I specialize in cold outreach at scale, full pipeline management from first contact to closed deal, and building business relationships that convert into long-term partnerships. I thrive in fast-paced, target-driven environments.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono2 text-[11px] text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={150 + i * 80}>
              <div className="glass group flex h-full flex-col items-center justify-center gap-2 rounded-3xl p-6 text-center transition-all hover:border-violet-400/40 hover:shadow-[0_0_36px_-10px_rgba(139,92,246,0.6)]">
                <s.icon size={22} className="text-cyan-300 transition-transform group-hover:scale-110" />
                <span className="font-display text-3xl font-bold text-white">{s.value}</span>
                <span className="font-mono2 text-[10px] uppercase tracking-widest text-white/50">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
