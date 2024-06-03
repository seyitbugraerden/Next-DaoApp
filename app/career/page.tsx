import { fetchCareer } from "@/components/fetch/fetch";
import MainText from "@/components/MainText";
import React from "react";

async function page() {
  const careerData = await fetchCareer();
  return (
    <>
      <MainText
        title={careerData.title}
        description={careerData.description}
        subject={careerData.subject}
      />
    </>
  );
}

export default page;
