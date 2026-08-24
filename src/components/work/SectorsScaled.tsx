import { FadeIn } from "../../components/ui/FadeIn";
import { H2 } from "../../components/ui/Typography";

const sectors = [
  "BNI Network Expansion",
  "Hygiene & Export Operations",
  "Sika Construction Chemicals",
  "Digital Marketing & IT Sales"
];

export default function SectorsScaled() {
  return (
    <section className="py-24 border-t border-text-primary/10">
      <FadeIn>
        <H2 className="mb-12">Sectors I've Scaled</H2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {sectors.map((sector, i) => (
          <FadeIn key={i} delay={i * 0.1} className="bg-surface p-8 rounded-sm border border-text-primary/5 h-full">
            <span className="block text-accent font-mono text-sm mb-4">0{i + 1}</span>
            <h3 className="font-medium text-text-primary leading-snug">{sector}</h3>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
