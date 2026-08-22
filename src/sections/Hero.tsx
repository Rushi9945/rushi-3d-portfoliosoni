import { ChevronDown, MapPin, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden">
      {/* Backdrop */}
      <div className="bg-grid absolute inset-0" />
      <div className="orb absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="orb absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" style={{ animationDelay: '-5s' }} />

      {/* Overlay content */}
      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-between py-24">
        <div className="flex flex-col items-center gap-3 pt-6 text-center">
          <span className="glass flex items-center gap-2 rounded-full px-4 py-1.5 font-mono2 text-[11px] uppercase tracking-[0.25em] text-cyan-300">
            <Sparkles size={12} />
            Hello World, I am
          </span>
        </div>

        {/* Name flanking the model */}
        <div className="flex w-full max-w-6xl items-center justify-between px-6 md:px-12">
          <h1 className="font-display text-[13vw] font-extrabold leading-none tracking-tight text-white/95 drop-shadow-[0_0_40px_rgba(139,92,246,0.35)] md:text-[7.5rem]">
            RUSHI
          </h1>
          <h1 className="text-gradient font-display text-[13vw] font-extrabold leading-none tracking-tight md:text-[7.5rem]">
            SONI
          </h1>
        </div>

        <div className="pointer-events-auto flex flex-col items-center gap-5 text-center">
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-white/60 md:text-sm">
            Engineer Minded. Sales Driven. <span className="text-violet-400">·</span> B2B Outreach
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#experience"
              className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-[#05050a] transition-transform hover:scale-105"
            >
              View Experience
            </a>
            <a
              href="#about"
              className="glass rounded-full px-7 py-3 text-sm font-medium text-white/85 transition-colors hover:border-cyan-300/40 hover:text-cyan-300"
            >
              Get To Know Me
            </a>
          </div>
          <span className="flex items-center gap-1.5 font-mono2 text-[11px] text-white/40">
            <MapPin size={12} className="text-violet-400" /> Ahmedabad, Gujarat, India
          </span>
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about" className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 text-white/50 transition-colors hover:text-cyan-300">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <div className="scroll-dot h-1.5 w-1.5 rounded-full bg-cyan-300" />
        </div>
        <ChevronDown size={16} className="mx-auto mt-1" />
      </a>
    </section>
  )
}
