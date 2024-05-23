import Container from "@/components/Container";
import React from "react";

function ContentPage() {
  return (
    <div className="bg-bgColor">
      <Container>
        <div className="text-white py-24 xl:max-w-[30vw] mx-auto">
          <h1 className="text-6xl">
            Example
            <span className="text-sm opacity-50">of a</span>
            <br />
            content page
          </h1>
          <hr className="mt-8"/>
          <p className="lead border-top pt-5 mt-5" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default ContentPage;
