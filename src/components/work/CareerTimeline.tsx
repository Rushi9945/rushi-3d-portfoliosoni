import { FadeIn } from "../../components/ui/FadeIn";
import { H1, H2, H3, P } from "../../components/ui/Typography";

const careerData = [
  {
    id: 1,
    company: "Jenika Enterprise (Clearzone & Jundalo)",
    role: "Business Development Executive — International Sales",
    duration: "Dec 2024 – Present",
    responsibilities: [
      "Led end-to-end B2B outreach for hygiene products across India and 15+ countries",
      "Conducted 50+ one-to-one BNI meetings across Africa, Middle East, Europe, Americas",
      "Managed global BNI lead tracker with 200+ prospects",
      "Converted relationships into live partnerships",
      "Drove digital marketing and IT services outreach targeting hotels and agencies globally"
    ],
    skills: ["International Sales", "BNI Networking", "Pipeline Management", "Digital Marketing", "CRM"],
    metrics: "15+ countries, 50+ BNI meetings, 200+ prospects"
  },
  {
    id: 2,
    company: "Entrac Eco Solutions",
    role: "Sales Partner — Construction Chemicals",
    duration: "Mar 2026 – Jul 2026",
    responsibilities: [
      "Generated ₹5,00,000+ in confirmed sales revenue within 3 months",
      "Built ICP outreach strategy targeting contractors, builders, dealers",
      "Managed complete order-to-delivery cycle",
      "Handled pipeline, quotations, invoicing, logistics"
    ],
    skills: ["B2B Sales", "Construction Chemicals", "Pipeline Management", "Invoicing"],
    metrics: "₹5,00,000+ revenue in 3 months"
  },
  {
    id: 3,
    company: "Prabal",
    role: "B2B Telecalling & Outreach Executive",
    duration: "Jan 2023 – Dec 2023",
    responsibilities: [
      "Identified and researched target ICPs across B2B market",
      "Acquired verified contact data",
      "Conducted one-on-one B2B telecalling campaigns",
      "Pitched Prabal’s product range",
      "Scheduled qualified meetings between prospects and Founder"
    ],
    skills: ["Cold Calling", "Lead Research", "ICP Identification", "CRM"],
    metrics: "[Number of meetings scheduled]"
  }
];

export default function CareerTimeline() {
  return (
    <section className="py-16 md:py-24">
      <FadeIn>
        <H1 className="mb-16">The Journey So Far</H1>
      </FadeIn>
      
      <div className="relative border-l-2 border-accent/30 ml-3 md:ml-4 space-y-24">
        {careerData.map((job, i) => (
          <FadeIn key={job.id} delay={i * 0.1} className="relative pl-8 md:pl-12">
            <div className="absolute w-4 h-4 bg-bg-base border-2 border-accent rounded-full -left-[9px] top-2" />
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
              <h3 className="font-display text-2xl md:text-3xl text-text-primary">{job.company}</h3>
              <span className="text-text-primary/50 text-sm font-mono tracking-wide">{job.duration}</span>
            </div>
            
            <div className="text-accent font-medium mb-6">{job.role}</div>
            
            <ul className="list-disc list-outside ml-4 space-y-2 mb-8 text-text-primary/80 leading-relaxed">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="pl-2">{resp}</li>
              ))}
            </ul>
            
            <div className="mb-6">
              <div className="text-xs uppercase tracking-widest text-text-primary/50 mb-3">Key Metrics</div>
              <div className="font-medium text-text-primary bg-surface inline-block px-4 py-2 rounded-sm border border-text-primary/5">
                {job.metrics}
              </div>
            </div>
            
            <div>
              <div className="text-xs uppercase tracking-widest text-text-primary/50 mb-3">Skills Applied</div>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs bg-text-primary/5 text-text-primary px-3 py-1.5 rounded-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
