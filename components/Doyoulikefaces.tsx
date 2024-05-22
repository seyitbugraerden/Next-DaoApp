import Image from "next/image";
import React from "react";
import img1 from '@/public/images/person9.webp'
import img2 from '@/public/images/person11.webp'
function Doyoulikefaces() {
  return (
    <div className="bg-dark position-relative">
      <div className="container px-vw-5 py-vh-5">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-lg-7">
            <Image
              className="img-fluid rounded-5 mb-n5 shadow"
              src={img1}
              width="512"
              height="512"
              alt="a nice person"
              loading="lazy"
            />
            <Image
              className="img-fluid rounded-5 ms-5 mb-n5 shadow"
              src={img2}
              width="512"
              height="512"
              alt="another nice person"
              loading="lazy"
            />
          </div>
          <div
            className="col-12 col-lg-5 bg-dark rounded-5 py-5"
          >
            <span className="h5 text-secondary fw-lighter">
              Do you like faces?
            </span>
            <h2 className="display-4 text-white">
              We constantly adding new images to our website. Does it make
              sense? No!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doyoulikefaces;
