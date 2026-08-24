"use client";

import PageContainer from "../../components/layout/PageContainer";
import SectionHeading from "../../components/ui/SectionHeading";
import { P } from "../../components/ui/Typography";

export default function About() {
  return (
    <PageContainer>
      <SectionHeading title="About" subtitle="The Journey So Far" />
      <div className="max-w-2xl space-y-6">
        <P>[CONTENT TO BE PROVIDED]</P>
      </div>
    </PageContainer>
  );
}
