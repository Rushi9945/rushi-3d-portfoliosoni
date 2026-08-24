import { FadeIn } from "../../components/ui/FadeIn";
import { H2 } from "../../components/ui/Typography";
import ArrowLink from "../../components/ui/ArrowLink";

const timelineEvents = [
  "Birth",
  "School",
  "Diploma (Govt. Polytechnic)",
  "Prabal",
  "Entrac",
  "Clearzone"
];

export default function PersonalTimeline() {
  return (
    <section className="py-24">
      <FadeIn>
        <H2 className="mb-16">Personal Timeline</H2>
      </FadeIn>
      <div className="relative border-l border-text-primary/10 ml-3 md:ml-4 space-y-12 mb-24">
        {timelineEvents.map((event, i) => (
          <FadeIn key={i} delay={i * 0.1} className="relative pl-8 md:pl-12">
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-1.5" />
            <h3 className="font-display text-xl md:text-2xl text-text-primary">{event}</h3>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.4}>
        <div className="bg-surface p-8 md:p-12 rounded-sm border border-text-primary/5 flex flex-col items-start gap-4">
          <span className="text-text-primary/60 font-medium">Curious about what drives me?</span>
          <ArrowLink href="/synchronicity">Go to Hobby</ArrowLink>
        </div>
      </FadeIn>
    </section>
  );
}
