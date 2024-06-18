import Image from "next/image";
import React from "react";
import img1 from "@/public/images/img1.webp";
import img2 from "@/public/images/img2.webp";
import img3 from "@/public/images/img3.webp";

function TripleImages() {
  return (
    <div className="bg-mainColor">
      <div className="flex flex-col xl:flex-row justify-start items-center gap-10 max-w-[80%] mx-auto pb-5">
        <Image
          src={img1}
          width="2280"
          height="2232"
          alt="abstract image"
          className="rounded-xl  xl:max-w-[35vw] md:h-[70vh] h-[30vh] object-cover"
        />
        <Image
          src={img2}
          width="1116"
          height="1578"
          alt="abstract image"
          className="rounded-xl xl:max-w-[25vw] md:h-[50vh] h-[30vh] object-cover"
        />
        <Image
          src={img3}
          width="1116"
          height="848"
          alt="abstract image"
          className="rounded-xl xl:max-w-[20vw] h-[30vh] object-cover"
        />
      </div>
    </div>
  );
}

export default TripleImages;
