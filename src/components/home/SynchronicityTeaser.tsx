import { FadeIn } from "../ui/FadeIn";
import { H2, P } from "../ui/Typography";
import ArrowLink from "../ui/ArrowLink";

export default function SynchronicityTeaser() {
  const themes = ["Psycho-Spiritual", "Business", "Top 1% Mindset"];

  return (
    <section className="py-24 md:py-32 my-16 bg-surface rounded-sm px-8 md:px-16 border border-text-primary/5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="w-full md:w-1/2 space-y-8">
          <FadeIn>
            <H2>Synchronicity</H2>
            <P className="text-lg mt-6 max-w-md">
              Connecting the dots between abstract philosophies and practical execution.
            </P>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ul className="space-y-4 mb-10">
              {themes.map((theme, i) => (
                <li key={i} className="flex items-center gap-4 text-text-primary/80 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                  {theme}
                </li>
              ))}
            </ul>
            <ArrowLink href="/synchronicity">Explore Synchronicity</ArrowLink>
          </FadeIn>
        </div>
        
        {/* Placeholder for 3D Experience Circle */}
        <FadeIn delay={0.3} className="w-full md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-dashed border-text-primary/20 flex items-center justify-center relative">
            <div className="absolute inset-4 rounded-full border border-text-primary/5 animate-pulse" />
            <span className="text-xs text-text-primary/30 uppercase tracking-widest text-center px-4 leading-relaxed">
              [ 3D Experience <br/> Placeholder ]
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
