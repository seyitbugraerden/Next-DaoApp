import Image from "next/image";
import React from "react";
import img1 from "@/public/images/person9.webp";
import img2 from "@/public/images/person11.webp";
import Container from "../Container";
function Doyoulikefaces() {
  return (
    <div className="bg-bgColor">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 pt-28 pb-14">
          <div>
            <Image
              className="rounded-[36px]"
              src={img1}
              width="512"
              height="512"
              alt="a nice person"
              loading="lazy"
            />
            <Image
              className="rounded-[36px] relative -top-[40px] xl:-right-[50px]"
              src={img2}
              width="512"
              height="512"
              alt="another nice person"
              loading="lazy"
            />
          </div>
          <div className="flex items-start flex-col justify-center md:p-16 py-16 px-4">
            <span className="text-white text-4xl opacity-50">
              Do you like blogs?
            </span>
            <h2 className="text-6xl text-white">
              Our users constantly adding new blogs to our website. Does it usefull? Definetly!
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Doyoulikefaces;
