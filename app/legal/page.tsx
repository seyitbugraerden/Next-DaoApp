import { fetchLegal } from "@/components/fetch/fetch";
import MainText from "@/components/MainText";
import React from "react";

async function LegalPage() {
  const legalData = await fetchLegal();
  return (
    <>
      <MainText
        title={legalData.title}
        description={legalData.description}
        subject={legalData.subject}
      />
    </>
  );
}

export default LegalPage;
