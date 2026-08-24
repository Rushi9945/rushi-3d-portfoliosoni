import { H1, P } from "../ui/Typography";
import ArrowLink from "../ui/ArrowLink";
import { FadeIn } from "../ui/FadeIn";

export default function Hero() {
  return (
    <section className="min-h-[75vh] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 py-16 md:py-20">
      <div className="w-full md:w-3/5 space-y-10">
        <FadeIn>
          <H1 className="leading-[1.15]">
            Engineer Minded.<br />
            <span className="text-text-primary/70">Sales Driven.</span><br />
            Human First.
          </H1>
        </FadeIn>
        <FadeIn delay={0.2} className="max-w-md">
          <P className="text-lg leading-relaxed">
            [Short editorial introduction placeholder. This will contain the real Rushi's story, setting the tone for the rest of the website.]
          </P>
        </FadeIn>
        <FadeIn delay={0.3}>
          <ArrowLink href="/work">Explore my work</ArrowLink>
        </FadeIn>
      </div>
      <FadeIn delay={0.4} className="w-full md:w-2/5">
        <div className="relative w-full aspect-[4/5] bg-surface rounded-sm border border-text-primary/10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-surface to-bg-base opacity-40" />
          <span className="text-text-primary/40 text-xs uppercase tracking-[0.2em] font-medium z-10">Portrait / Reserved</span>
        </div>
      </FadeIn>
    </section>
  );
}
