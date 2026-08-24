import { FadeIn } from "../../components/ui/FadeIn";
import { H2 } from "../../components/ui/Typography";

const skills = [
  { name: "B2B Sales & Outreach", level: 92 },
  { name: "BNI Networking & Client Acquisition", level: 88 },
  { name: "Lead Generation & Research", level: 86 },
  { name: "Pipeline Management & CRM", level: 85 },
  { name: "International Sales", level: 80 },
  { name: "Construction & Hygiene Products Sales", level: 78 }
];

export default function SkillsMatrix() {
  return (
    <section className="py-24 border-t border-text-primary/10">
      <FadeIn>
        <H2 className="mb-4">Honest Assessment</H2>
        <p className="text-text-primary/60 mb-16 max-w-xl">
          Real metrics based on actual execution. No inflated 100% bars, just transparent capabilities built through practice.
        </p>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl">
        {skills.map((skill, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex justify-between mb-3">
              <span className="font-medium text-text-primary">{skill.name}</span>
              <span className="font-mono text-sm text-text-primary/60">{skill.level}%</span>
            </div>
            <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
              {/* Static width for now, animation could be added via Framer Motion */}
              <div 
                className="h-full bg-accent rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
