import React from "react";
import Container from "../Container";
import Button from "../Button";
import Link from "next/link";
import { pb } from "@/lib/pb";

async function Mission() {
  const mission = await pb.collection("mission").getOne("asdasdasdasdasd");
  console.log(mission);
  return (
    <div className="bg-mainColor text-white text-center py-60">
      <Container>
        <span className="opacity-50">{mission.subject}</span>
        <h1 className="text-6xl font-bold xl:max-w-[50vw] mx-auto">
          {mission.title}
        </h1>
        <p className="text-xl opacity-50 xl:max-w-[40vw] mx-auto mt-10 mb-5">
          {mission.description}
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
