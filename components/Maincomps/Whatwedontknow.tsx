import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "@/public/images/abstract3.webp";
import img2 from "@/public/images/abstract2.webp";
import img3 from "@/public/images/abstract17.webp";
import img4 from "@/public/images/abstract4.webp";
import Container from "../Container";

function Whatwedontknow() {
  return (
    <div className="bg-black py-36">
      <Container>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(2,1fr)",
            alignItems: "start",
            gap: "5rem",
            gridAutoFlow: "dense",
          }}
        >
          <div className="flex flex-col gap-24">
            <div className="bg-bgColor rounded-[36px]">
              <Image
                src={img1}
                width="582"
                height="327"
                alt="abstract image"
                className="rounded-t-[36px]"
                loading="lazy"
              />
              <div className="px-10 pb-24 pt-10">
                <h2 className="text-white text-4xl font-medium">
                  Ipsum dolor est
                </h2>
                <p className="text-white opacity-50 mt-2 text-lg">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat.
                </p>
                <Link
                  href="#"
                  className="text-white underline text-xl relative top-12"
                >
                  Read more
                </Link>
              </div>
            </div>
            <div className="bg-bgColor rounded-[36px]">
              <div className="bg-dark shadow rounded-5 p-0">
                <Image
                  src={img3}
                  width="582"
                  height="390"
                  alt="abstract image"
                  className="img-fluid rounded-5 no-bottom-radius"
                  loading="lazy"
                />
                <div className="px-10 pb-24 pt-10">
                  <h2 className="text-white text-4xl font-medium">
                    Ipsum dolor est
                  </h2>
                  <p className="text-white opacity-50 mt-2 text-lg">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.
                  </p>
                  <Link
                    href="#"
                    className="text-white underline text-xl relative top-12"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-24">
            <div className="rounded-[36px]" >
              <div className="bg-dark shadow rounded-5 p-0">
                <div className="flex justify-center items-start flex-col p-10">
                  <span className="text-white text-4xl opacity-50">
                    What we don´t know
                  </span>
                  <h2 className="text-white text-6xl">
                    There is a lot we don´t know. Here is a small sneak peek
                  </h2>
                </div>
                <div className="rounded-5 bg-bgColor rounded-[36px]">
                  <Image
                    src={img2}
                    width="582"
                    height="327"
                    alt="abstract image"
                    className="rounded-t-[36px] max-h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="px-10 pb-24 pt-10 h-full">
                  <h2 className="text-white text-4xl font-medium">
                    Ipsum dolor est
                  </h2>
                  <p className="text-white opacity-50 mt-2 text-lg">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.
                  </p>
                  <Link
                    href="#"
                    className="text-white underline text-xl relative top-12"
                  >
                    Read more
                  </Link>
                </div>
                </div>
              </div>
            </div>
            <div className="bg-bgColor rounded-[36px]">
              <div className="bg-dark shadow rounded-5 p-0">
                <Image
                  src={img4}
                  width="582"
                  height="327"
                  alt="abstract image"
                  className="img-fluid rounded-5 no-bottom-radius"
                  loading="lazy"
                />
                <div className="px-10 pb-24 pt-10 h-full">
                  <h2 className="text-white text-4xl font-medium">
                    Ipsum dolor est
                  </h2>
                  <p className="text-white opacity-50 mt-2 text-lg">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.
                  </p>
                  <Link
                    href="#"
                    className="text-white underline text-xl relative top-12"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Whatwedontknow;
