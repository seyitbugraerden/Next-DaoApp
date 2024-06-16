import React from "react";
import Container from "../Container";
import Button from "../Button";
import Link from "next/link";
import { cookies } from "next/headers";

function Charge() {
  const token: any = cookies().get("DaoAuth")?.value;
  return [
    token ? (
      ""
    ) : (
      <div className="bg-black pb-14 pt-32">
        <Container>
          <div className="flex flex-col xl:flex-row items-center gap-16">
            <div className="text-right min-w-[40%]">
              <span className="text-2xl opacity-50 text-white">
                What we charge
              </span>
              <h2 className="font-bold text-5xl text-white">
                If you are interested in to being an admin you should check
              </h2>
            </div>
            <div className="bg-bgColor flex justify-center items-center flex-col px-8 py-12 rounded-[36px] gap-14">
              <h2 className=" text-white">
                <span className="text-2xl">$</span>
                <span className="text-6xl font-bold underline mx-3">499</span>
                <span className="fs-6 fw-light">/ month</span>
              </h2>
              <p className="text-center text-2xl font-thin text-white opacity-50">
                To obtain admin privileges, you must pay the specified fee.
                Admin privileges grant additional responsibilities and expanded
                access within the system, hence the fee policy. If you wish to
                acquire admin privileges, please proceed with the payment of the
                designated amount. First of all sign and text us an e-mail!
              </p>

              <Link href="/user">
                <Button>
                  Sign up
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
            </div>
          </div>
        </Container>
      </div>
    ),
  ];
}

export default Charge;
