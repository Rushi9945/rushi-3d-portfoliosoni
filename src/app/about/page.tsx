import PageContainer from "../components/layout/PageContainer";
import AboutHero from "../components/about/AboutHero";
import EngineeringBackground from "../components/about/EngineeringBackground";
import PersonalTimeline from "../components/about/PersonalTimeline";

export default function About() {
  return (
    <PageContainer>
      <AboutHero />
      <EngineeringBackground />
      <PersonalTimeline />
    </PageContainer>
  );
}
