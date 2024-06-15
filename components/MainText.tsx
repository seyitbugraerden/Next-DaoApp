import React from "react";
import { mainText } from "../types/mainText";
import Container from "./Container";

const MainText: React.FC<mainText> = ({ title, description, subject }) => {
  return (
    <>
      <div className="bg-mainColor text-white text-center py-60">
        <Container>
          <span className="opacity-50">{subject}</span>
          <h1 className="text-6xl font-bold xl:max-w-[50vw] mx-auto">
            {title}
          </h1>
          <p
            className="text-xl opacity-50 xl:max-w-[40vw] mx-auto mt-10 mb-5"
            aria-hidden="false"
          >
            {description.split("/n/")}
          </p>
        </Container>
      </div>
    </>
  );
};

export default MainText;
