import PageContainer from "../../components/layout/PageContainer";
import CareerTimeline from "../../components/work/CareerTimeline";
import SkillsMatrix from "../../components/work/SkillsMatrix";
import SectorsScaled from "../../components/work/SectorsScaled";

export default function Work() {
  return (
    <PageContainer>
      <CareerTimeline />
      <SkillsMatrix />
      <SectorsScaled />
    </PageContainer>
  );
}
