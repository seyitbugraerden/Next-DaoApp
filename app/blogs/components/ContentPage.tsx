import Container from "@/components/Container";
import React from "react";

const ContentPage: React.FC<any> = ({ mainText }) => {
  return (
    <div className="bg-bgColor">
      <Container>
        <div className="text-white py-24 xl:max-w-[30vw] mx-auto">
          <h1 className="text-6xl">
            Main
            <span className="text-sm opacity-50">subject</span>
            <br />
            Of This Page
          </h1>
          <hr className="mt-8" />
          <p className="lead border-top pt-5 mt-5" data-aos="fade-up">
            {mainText}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ContentPage;
