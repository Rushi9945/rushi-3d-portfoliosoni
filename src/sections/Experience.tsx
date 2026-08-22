import Reveal from '../components/Reveal'
import { Briefcase, GraduationCap } from 'lucide-react'

const TIMELINE = [
  {
    period: 'Dec 2024 — Present',
    role: 'Business Development Executive — International Sales',
    org: 'Jenika Enterprise (Clearzone & Jundalo Technologies)',
    icon: Briefcase,
    points: [
      'Led end-to-end B2B outreach for hygiene products across India and 15+ countries.',
      'Conducted 50+ one-to-one BNI meetings across Africa, Middle East, Europe and Americas.',
      'Managed a global BNI lead tracker with 200+ prospects, converting relationships into live partnerships.',
      'Drove digital marketing and IT services outreach targeting hotels and agencies globally.',
    ],
    current: true,
  },
  {
    period: 'Mar 2026 — Jul 2026',
    role: 'Sales Partner — Construction Chemicals',
    org: 'Entrac Eco Solutions',
    icon: Briefcase,
    points: [
      'Generated ₹5,00,000+ in confirmed sales revenue for Sika construction products within 3 months.',
      'Built ICP outreach strategy targeting contractors, builders and dealers across India and international markets.',
      'Managed complete order-to-delivery cycle including pipeline, quotations, invoicing, and logistics.',
    ],
    current: false,
  },
  {
    period: 'Jan 2023 — Dec 2023',
    role: 'B2B Telecalling & Outreach Executive',
    org: 'Prabal',
    icon: Briefcase,
    points: [
      'Identified and researched target ICPs across the B2B market, acquiring verified contact data.',
      'Conducted one-on-one B2B telecalling campaigns pitching Prabal’s product range.',
      'Scheduled qualified meetings between interested prospects and the Founder for deal closure.',
    ],
    current: false,
  },
  {
    period: 'Jun 2023 — May 2026',
    role: 'Diploma in Mechatronics, Robotics & Automation',
    org: 'Government Polytechnic Ahmedabad',
    icon: GraduationCap,
    points: [
      'Built a strong technical foundation in engineering systems and automation.',
      'Developed analytical problem-solving skills which translate into structured B2B sales strategies.'
    ],
    current: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-cyan-300">03 — The journey so far</p>
        <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">
          Career <span className="text-gradient">timeline</span>
        </h2>
      </Reveal>

      <div className="relative mt-14">
        <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-violet-500 via-cyan-400 to-transparent md:left-1/2" />

        {TIMELINE.map((item, i) => (
          <Reveal key={item.role} delay={i * 100}>
            <div className={`relative mb-12 flex flex-col gap-4 pl-14 md:w-1/2 md:pl-0 ${
              i % 2 === 0 ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'
            }`}>
              <span className={`timeline-dot absolute top-1 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-[#0a0a16] ${
                i % 2 === 0 ? 'left-0 md:-right-5 md:left-auto' : 'left-0 md:-left-5'
              }`}>
                <item.icon size={16} className="text-cyan-300" />
              </span>

              <div className="glass rounded-3xl p-6 text-left transition-all hover:border-violet-400/40">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono2 text-[11px] uppercase tracking-widest text-cyan-300">{item.period}</span>
                  {item.current && (
                    <span className="rounded-full bg-emerald-400/15 px-2.5 py-0.5 font-mono2 text-[10px] uppercase tracking-widest text-emerald-300">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="font-display mt-2 text-xl font-bold text-white">{item.role}</h3>
                <p className="text-sm font-medium text-violet-300">{item.org}</p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {item.points.map((pt) => (
                    <li key={pt} className="text-sm leading-relaxed text-white/60 before:mr-2 before:text-cyan-400 before:content-['▹']">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
