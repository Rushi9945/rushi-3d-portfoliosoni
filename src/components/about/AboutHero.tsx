import { FadeIn } from "../../components/ui/FadeIn";
import { H1, P } from "../../components/ui/Typography";

export default function AboutHero() {
  return (
    <section className="py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 border-b border-text-primary/10">
      <div className="w-full md:w-1/2 space-y-6">
        <FadeIn>
          <H1>The Human Behind.</H1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <P className="text-lg">
            I'm Rushi Soni, an engineer turned sales professional, BNI networker, and plastic-from-corn innovator. 
            I enjoy deep conversations about business, psychology, and spirituality.
          </P>
        </FadeIn>
      </div>

      <FadeIn delay={0.3} className="w-full md:w-1/2 flex justify-center">
        {/* Placeholder for 3D Cartoon Model + Orbiting Dots */}
        <div className="w-full aspect-square max-w-md bg-surface rounded-sm border border-text-primary/10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-bg-base opacity-50" />
          <div className="text-center z-10 space-y-4">
            <span className="text-xs uppercase tracking-widest text-text-primary/40 font-medium">
              [ 3D Cartoon Model Area ]
            </span>
            <div className="text-xs text-text-primary/30 flex flex-col gap-2">
              <span>Orbiting dots will display:</span>
              <span>• Birthdate & Age</span>
              <span>• Current Role</span>
              <span>• Education</span>
              <span>• Achievement</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
