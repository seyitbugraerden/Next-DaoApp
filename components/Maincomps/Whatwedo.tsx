import React from "react";
import Container from "../Container";
import Link from "next/link";

function Whatwedo() {
  return (
    <div className="bg-mainColor py-28">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <span className="text-lg text-right text-white opacity-50">
              What we do
            </span>
            <h2 className="text-5xl text-white text-right">
              We are a team of passionate writers, thinkers, and creators who
              believe in the power of storytelling and knowledge sharing
            </h2>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-2xl mt-4">
              Blog Contents For Anything Else
            </h3>
            <p className="text-white opacity-50 text-xl">
              where we dive into a diverse range of topics that defy
              conventional categories. From unique insights and personal stories
              to thought-provoking discussions and practical tips, this section
              is dedicated to exploring the unexpected and the extraordinary.
              Join us as we venture into new ideas and perspectives that enrich
              our understanding of the world.
            </p>
            <Link
              href="/blogs"
              className="text-white mt-3 hover:opacity-50 transition duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-arrow-right-circle inline-block"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>{" "}
              <span className="ms-2">Blogs Page</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Whatwedo;
