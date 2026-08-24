import PageContainer from "../components/layout/PageContainer";
import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import Achievement from "../components/home/Achievement";
import Stats from "../components/home/Stats";
import WorkPreview from "../components/home/WorkPreview";
import SynchronicityTeaser from "../components/home/SynchronicityTeaser";

export default function Home() {
  return (
    <PageContainer className="pt-8 md:pt-16 pb-0">
      <Hero />
      <Intro />
      <Stats />
      <Achievement />
      <WorkPreview />
      <SynchronicityTeaser />
    </PageContainer>
  );
}
