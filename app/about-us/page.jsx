import { fetchAboutUs } from "@/components/fetch/fetch";
import MainText from "@/components/MainText";
import React from "react";

async function AboutUs() {
  const aboutData = await fetchAboutUs();
  return (
    <>
      <MainText
        title={aboutData.title}
        description={aboutData.description}
        subject={aboutData.subject}
      />
    </>
  );
}

export default AboutUs;
