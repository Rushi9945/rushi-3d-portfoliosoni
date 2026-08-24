import PageContainer from "../components/layout/PageContainer";
import PodcastHero from "../components/synchronicity/PodcastHero";
import BranchingInterests from "../components/synchronicity/BranchingInterests";
import SynchronicityCTA from "../components/synchronicity/SynchronicityCTA";

export default function Synchronicity() {
  return (
    <PageContainer>
      <PodcastHero />
      <BranchingInterests />
      <SynchronicityCTA />
    </PageContainer>
  );
}
