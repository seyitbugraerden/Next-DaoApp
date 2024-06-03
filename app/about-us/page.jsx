import { fetchAboutUs } from "@/components/fetch/fetch";
import MainText from "@/components/MainText";
import React from "react";

async function AboutUs() {
  const aboutData = await fetchAboutUs();
  return (
    <>
      {aboutData.map((item, index) => (
        <MainText key={index} title={item.title} description={item.description} />
      ))}
    </>
  );
}

export default AboutUs;
