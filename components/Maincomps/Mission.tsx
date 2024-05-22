import React from "react";
import Container from "../Container";
import Button from "../Button";

function Mission() {
  return (
    <div className="bg-mainColor text-white text-center py-60">
      <Container>
        <span className="opacity-50">Our Mission</span>
        <h1 className="text-6xl font-bold xl:max-w-[50vw] mx-auto">
          We do ordinary stuff for cool people
        </h1>
        <p className="text-xl opacity-50 xl:max-w-[40vw] mx-auto mt-10 mb-5">
          We are some sort of DAO working with AI, NFT´s, web 4.0 and the so
          called blockchain...in the Metaverse. You don´t understand a word? No
          problem, we neither!
        </p>
        <Button>
          Join us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </Button>
      </Container>
    </div>
  );
}

export default Mission;
