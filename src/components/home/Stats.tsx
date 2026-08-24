import { FadeIn } from "../ui/FadeIn";

export default function Stats() {
  const stats = [
    { value: "50+", label: "International meetings" },
    { value: "15+", label: "Countries" },
    { value: "3", label: "Business verticals" },
    { value: "19", label: "Years old" },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-text-primary/10">
      <FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-3">
              <span className="font-display text-4xl md:text-5xl text-text-primary tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm text-text-primary/70 font-medium tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
