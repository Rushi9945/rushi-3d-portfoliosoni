import { FadeIn } from "../../components/ui/FadeIn";
import { H2, H3, P } from "../../components/ui/Typography";
import { ArrowRight } from "lucide-react";

export default function EngineeringBackground() {
  return (
    <section className="py-24 border-b border-text-primary/10">
      <FadeIn>
        <H2 className="mb-12">Engineering Background</H2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <FadeIn delay={0.1}>
          <H3 className="mb-4">Government Polytechnic Ahmedabad</H3>
          <P className="mb-6">
            Diploma in Mechatronics, Robotics & Automation. This foundational period taught me systems thinking—how individual components must work in perfect harmony to produce a reliable outcome.
          </P>
          <P>
            Today, I apply this exact same engineering logic to sales pipelines, relationship building, and business strategy.
          </P>
        </FadeIn>

        <FadeIn delay={0.2} className="border-l-2 border-accent pl-6 md:pl-8 py-2">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold mb-3 block">Innovation Highlight</span>
          <h4 className="font-display text-2xl md:text-3xl mb-4 text-text-primary">
            Corn-Plastic Innovation
          </h4>
          <p className="text-text-primary/70 mb-6 leading-relaxed">
            During my time at the polytechnic lab, our team successfully synthesized biodegradable plastic from corn flour. It was a practical lesson in sustainable engineering and problem-solving that garnered regional attention.
          </p>
          <a 
            href="https://gujarati.news18.com/photogallery/ahmedabad/engineering-students-made-a-miracle-made-plastic-from-corn-flour-az-1855744-page-3.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
          >
            Featured in News18 Gujarati <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
