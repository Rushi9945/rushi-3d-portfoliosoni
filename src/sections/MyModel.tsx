import Reveal from '../components/Reveal'
import Avatar3D from '../components/Avatar3D'

export default function MyModel() {
  return (
    <section id="model" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-cyan-300">01.5 — Meet Me</p>
        <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">
          My <span className="text-gradient">3D Digital Twin</span>
        </h2>
      </Reveal>

      <div className="mt-12 flex items-center justify-center">
        <Reveal delay={100} className="w-full">
          <div className="glass glow-ring relative mx-auto h-[400px] w-full max-w-md overflow-hidden rounded-3xl p-2">
             <div className="absolute inset-0 bg-grid opacity-30" />
             <div className="absolute inset-0">
               <Avatar3D />
             </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
