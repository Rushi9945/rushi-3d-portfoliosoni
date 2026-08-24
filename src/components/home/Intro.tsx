import { FadeIn } from "../ui/FadeIn";

export default function Intro() {
  return (
    <section className="py-24 md:py-32 border-t border-text-primary/10">
      <FadeIn className="max-w-4xl mx-auto text-center">
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl leading-relaxed md:leading-relaxed text-text-primary/90 font-light">
          [This is the three-line editorial personal statement placeholder. It should visually communicate who I am, what I have been doing, and where I am heading in a natural, mature tone.]
        </h3>
      </FadeIn>
    </section>
  );
}
