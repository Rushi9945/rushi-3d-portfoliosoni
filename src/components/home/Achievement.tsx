import { FadeIn } from "../ui/FadeIn";
import { ArrowRight } from "lucide-react";

export default function Achievement() {
  return (
    <section className="py-16 md:py-24">
      <FadeIn>
        <div className="group block relative max-w-3xl border-l-2 border-accent pl-6 md:pl-8 py-2">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold mb-3 block">Featured Achievement</span>
          <h4 className="font-display text-2xl md:text-3xl mb-4 text-text-primary">
            Engineering students made plastic from corn flour
          </h4>
          <p className="text-text-primary/70 mb-6 max-w-xl leading-relaxed">
            [Short description of the diploma laboratory achievement. This serves as an editorial footnote to the professional journey without overwhelming the page.]
          </p>
          <a 
            href="https://gujarati.news18.com/photogallery/ahmedabad/engineering-students-made-a-miracle-made-plastic-from-corn-flour-az-1855744-page-3.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
          >
            Read Source <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
