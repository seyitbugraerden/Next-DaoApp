import { fetchAboutUs } from "@/components/fetch/fetch";
import MainText from "@/components/MainText";
import React from "react";
import Loader from "../settings/components/loader";

async function AboutUs() {
  const aboutData = await fetchAboutUs();
  return (
    <>
      <Loader />
      <MainText
        title={aboutData.title}
        description={aboutData.description}
        subject={aboutData.subject}
      />
    </>
  );
}

export default AboutUs;
