import { fetchLegal } from "@/components/fetch/fetch";
import MainText from "@/components/MainText";
import React from "react";
import Loader from "../settings/components/loader";

async function LegalPage() {
  const legalData = await fetchLegal();
  return (
    <>
      <Loader />
      <MainText
        title={legalData.title}
        description={legalData.description}
        subject={legalData.subject}
      />
    </>
  );
}

export default LegalPage;
