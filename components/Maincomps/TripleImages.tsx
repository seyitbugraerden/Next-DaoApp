import Image from "next/image";
import React from "react";
import img1 from '@/public/images/img1.webp'
import img2 from '@/public/images/img2.webp'
import img3 from '@/public/images/img3.webp'

function TripleImages() {
  return (
    <div className="w-100 position-relative bg-black text-white bg-cover d-flex align-items-center">
      <div className="container-fluid px-vw-5">
        <div className="position-absolute w-100 h-50 bg-dark bottom-0 start-0"></div>
        <div className="row d-flex align-items-center position-relative justify-content-center px-0 g-5">
          <div className="col-12 col-lg-6">
            <Image
              src={img1}
              width="2280"
              height="1732"
              alt="abstract image"
              className="img-fluid position-relative rounded-5 shadow"
              
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Image
              src={img2}
              width="1116"
              height="1578"
              alt="abstract image"
              className="img-fluid position-relative rounded-5 shadow"
              
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Image
              src={img3}
              width="1116"
              height="848"
              alt="abstract image"
              className="img-fluid position-relative rounded-5 shadow"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripleImages;
