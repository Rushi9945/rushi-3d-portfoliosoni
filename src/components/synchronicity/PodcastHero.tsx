import { FadeIn } from "../../components/ui/FadeIn";

export default function PodcastHero() {
  return (
    <section className="py-16 md:py-24 border-b border-text-primary/10 flex flex-col items-center text-center">
      <FadeIn>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 uppercase">
          Synchronicity
        </h1>
      </FadeIn>
      
      <FadeIn delay={0.2} className="w-full max-w-4xl aspect-video bg-surface rounded-sm border border-text-primary/10 relative overflow-hidden flex flex-col items-center justify-center my-8">
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-bg-base opacity-50" />
        <span className="text-xs uppercase tracking-widest text-text-primary/40 font-medium z-10 mb-4">
          [ 3D Podcast Scene Area ]
        </span>
        <div className="text-xs text-text-primary/30 max-w-md z-10">
          Two 3D figures at a table with microphones. Left: Rushi model. Right: Question-mark guest. Warm studio lighting.
        </div>
      </FadeIn>
      
      <FadeIn delay={0.4}>
        <p className="text-xl md:text-2xl text-text-primary/80 font-display italic">
          "Meaningful connections. Mindful conversations."
        </p>
      </FadeIn>
    </section>
  );
}
