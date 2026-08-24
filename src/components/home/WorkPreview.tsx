import Link from "next/link";
import { FadeIn } from "../ui/FadeIn";
import { ArrowRight } from "lucide-react";
import { H2 } from "../ui/Typography";

const previewData = [
  { id: 1, company: "[Company/Org Name]", role: "[Role Title]", year: "202X - Present", desc: "[Very short descriptor of the role]" },
  { id: 2, company: "[Company/Org Name]", role: "[Role Title]", year: "202X - 202X", desc: "[Very short descriptor of the role]" },
  { id: 3, company: "[Company/Org Name]", role: "[Role Title]", year: "202X - 202X", desc: "[Very short descriptor of the role]" },
];

export default function WorkPreview() {
  return (
    <section className="py-24 border-t border-text-primary/10">
      <FadeIn className="mb-16">
        <H2>Experience</H2>
      </FadeIn>
      <div className="flex flex-col">
        {previewData.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.1}>
            <Link href="/work" className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-text-primary/10 hover:border-accent transition-colors">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4 md:mb-0 w-full md:w-2/3">
                <h3 className="font-display text-2xl md:text-3xl text-text-primary group-hover:text-accent transition-colors">{item.company}</h3>
                <span className="text-text-primary/60 text-sm md:text-base">{item.role}</span>
              </div>
              <div className="flex items-center justify-between w-full md:w-1/3 md:justify-end gap-8">
                <span className="text-text-primary/50 text-sm font-mono tracking-wider">{item.year}</span>
                <ArrowRight className="w-5 h-5 text-text-primary/30 group-hover:text-accent group-hover:-rotate-45 transition-all duration-300" />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
