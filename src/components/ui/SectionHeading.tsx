import { H2 } from "./Typography";
import Divider from "./Divider";

export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-16">
      <H2 className="mb-4">{title}</H2>
      {subtitle && <p className="text-accent text-lg mb-8">{subtitle}</p>}
      <Divider />
    </div>
  );
}
