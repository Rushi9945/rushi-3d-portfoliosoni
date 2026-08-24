import { FadeIn } from "../../components/ui/FadeIn";
import { H2 } from "../../components/ui/Typography";

export default function SynchronicityCTA() {
  return (
    <section className="py-24 text-center">
      <FadeIn>
        <H2 className="mb-8">Am I credible enough to talk with you?</H2>
        <p className="text-text-primary/70 mb-12">If yes → Let's connect</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="mailto:[To be filled]" 
            className="px-8 py-3 bg-accent text-bg-base rounded-sm hover:bg-accent-hover transition-colors font-medium tracking-wide w-full sm:w-auto"
          >
            Mail me
          </a>
          <a 
            href="https://wa.me/[To be filled]" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-accent text-accent rounded-sm hover:bg-accent hover:text-bg-base transition-colors font-medium tracking-wide w-full sm:w-auto"
          >
            WhatsApp me
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
