import { FadeIn } from "../../components/ui/FadeIn";
import { H2 } from "../../components/ui/Typography";

const interests = [
  {
    category: "Psycho-Spiritual",
    items: [
      "Psychology of life and human behavior",
      "Manifestation and conscious creation",
      "Astrology and cosmic patterns"
    ]
  },
  {
    category: "Business & Entrepreneurship",
    items: [
      "Different business mindsets",
      "Startup ecosystems",
      "B2B strategy and growth"
    ]
  },
  {
    category: "Top 1% Mindset",
    items: [
      "High-performance thinking",
      "Discipline and focus",
      "Growth mindset and continuous learning"
    ]
  }
];

export default function BranchingInterests() {
  return (
    <section className="py-24 border-b border-text-primary/10">
      <FadeIn>
        <H2 className="mb-16 text-center">Interests</H2>
      </FadeIn>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {interests.map((branch, i) => (
          <FadeIn key={i} delay={i * 0.1} className="relative">
            <h3 className="font-display text-2xl text-accent mb-8 text-center md:text-left">
              {branch.category}
            </h3>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-text-primary/10 before:to-transparent">
              {branch.items.map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-center">
                  <div className="hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-surface border border-text-primary/20 z-10">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  </div>
                  <div className="md:hidden absolute left-2 -translate-x-1/2 w-4 h-4 rounded-full bg-surface border border-text-primary/20 z-10 flex items-center justify-center">
                    <div className="w-1 h-1 bg-accent rounded-full" />
                  </div>
                  <div className="pl-8 md:pl-0 md:absolute md:left-full md:ml-4 w-full md:w-48 text-sm text-text-primary/80 leading-relaxed font-medium">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
