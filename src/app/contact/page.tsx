import PageContainer from "../../components/layout/PageContainer";
import { FadeIn } from "../../components/ui/FadeIn";
import { H1, P } from "../../components/ui/Typography";

export default function Contact() {
  return (
    <PageContainer className="pt-24 pb-32">
      <FadeIn className="max-w-2xl mx-auto text-center space-y-8">
        <H1 className="leading-tight">
          Let's build something together.<br />
          <span className="text-text-primary/50">Or just talk.</span>
        </H1>
      </FadeIn>
      
      <FadeIn delay={0.2} className="max-w-md mx-auto mt-20 space-y-12">
        <div className="flex flex-col items-center gap-6">
          <a href="mailto:[To be filled]" className="text-xl md:text-2xl font-medium hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1">
            Email Me
          </a>
          <a href="https://wa.me/[To be filled]" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-medium hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1">
            WhatsApp
          </a>
          <a href="https://linkedin.com/in/[To be filled]" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-medium hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1">
            LinkedIn
          </a>
        </div>
        
        <div className="pt-16 border-t border-text-primary/10 text-center">
          <div className="text-xs uppercase tracking-widest text-text-primary/50 mb-2">Location</div>
          <P className="font-medium">Ahmedabad, Gujarat, India</P>
        </div>
      </FadeIn>
    </PageContainer>
  );
}
