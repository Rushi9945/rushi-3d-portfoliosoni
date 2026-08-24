"use client";

import PageContainer from "../components/layout/PageContainer";
import { H1, P } from "../components/ui/Typography";

export default function Home() {
  return (
    <PageContainer className="flex flex-col justify-center min-h-[60vh]">
      <div className="max-w-2xl space-y-6">
        <H1>Engineer Minded.<br/>Sales Driven.<br/>Human First.</H1>
        <P className="text-xl">
          [CONTENT TO BE PROVIDED]
        </P>
      </div>
    </PageContainer>
  );
}
