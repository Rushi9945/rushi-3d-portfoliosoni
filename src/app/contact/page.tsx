"use client";

import PageContainer from "../../components/layout/PageContainer";
import SectionHeading from "../../components/ui/SectionHeading";
import { P } from "../../components/ui/Typography";
import ArrowLink from "../../components/ui/ArrowLink";

export default function Contact() {
  return (
    <PageContainer>
      <SectionHeading title="Contact" subtitle="Let's talk." />
      <div className="max-w-2xl space-y-8">
        <P>[CONTENT TO BE PROVIDED]</P>
        <ArrowLink href="mailto:rushisoni25@gmail.com">rushisoni25@gmail.com</ArrowLink>
      </div>
    </PageContainer>
  );
}
