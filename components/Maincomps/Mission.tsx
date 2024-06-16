import React from "react";
import Container from "../Container";
import Button from "../Button";
import Link from "next/link";

function Mission() {
  return (
    <div className="bg-mainColor text-white text-center py-60">
      <Container>
        <span className="opacity-50">Our Mission</span>
        <h1 className="text-6xl font-bold xl:max-w-[50vw] mx-auto">
          Ordinary Stuff for Cool People: A Blog for the Extraordinary{" "}
        </h1>
        <p className="text-xl opacity-50 xl:max-w-[40vw] mx-auto mt-10 mb-5">
          Here we go. Our mission is to inspire, educate, and entertain through
          insightful and meaningful content. We believe in the power of
          knowledge to transform lives, which is why we deliver high-quality
          articles that spark curiosity and encourage exploration of new ideas.{" "}
          <br /> In this website, we value authenticity, creativity, and
          community. We aim to create a welcoming space where diverse voices are
          heard, and everyone feels empowered to share their thoughts. Join us
          on this journey of discovery and growth. Together, let's make every
          read a step towards a more informed and inspired life.
        </p>
        <Link href="/about-us">
          <Button>
            About Us
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
        </Link>
      </Container>
    </div>
  );
}

export default Mission;
