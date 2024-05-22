import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "@/public/images/abstract3.webp";
import img2 from "@/public/images/abstract2.webp";
import img3 from "@/public/images/abstract17.webp";
import img4 from "@/public/images/abstract4.webp";

function Whatwedontknow() {
  return (
    <div className="bg-black py-vh-3">
      <div className="container bg-black px-vw-5 py-vh-3 rounded-5 shadow">
        <div className="row gx-5">
          <div className="col-12 col-md-6">
            <div className="card bg-transparent mb-5">
              <div className="bg-dark shadow rounded-5 p-0">
                <Image
                  src={img1}
                  width="582"
                  height="327"
                  alt="abstract image"
                  className="img-fluid rounded-5 no-bottom-radius"
                  loading="lazy"
                />
                <div className="p-5">
                  <h2 className="fw-lighter text-white">Ipsum dolor est</h2>
                  <p className="pb-4 text-secondary">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.
                  </p>
                  <Link href="#" className="link-fancy link-fancy-light">
                    Read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="card bg-transparent">
              <div className="bg-dark shadow rounded-5 p-0">
                <Image
                  src={img2}
                  width="582"
                  height="442"
                  alt="abstract image"
                  className="img-fluid rounded-5 no-bottom-radius"
                  loading="lazy"
                />
                <div className="p-5">
                  <h2 className="fw-lighter text-white">Ipsum dolor est</h2>
                  <p className="pb-4 text-secondary">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.
                  </p>
                  <Link href="#" className="link-fancy link-fancy-light">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="p-5 pt-0 mt-5">
              <span className="h5 text-secondary fw-lighter text-white">
                What we don´t know
              </span>
              <h2 className="display-4 text-white">
                There is a lot we don´t know. Here is a small sneak peek
              </h2>
            </div>
            <div className="card bg-transparent mb-5 mt-5">
              <div className="bg-dark shadow rounded-5 p-0">
                <Image
                  src={img3}
                  width="582"
                  height="390"
                  alt="abstract image"
                  className="img-fluid rounded-5 no-bottom-radius"
                  loading="lazy"
                />
                <div className="p-5">
                  <h2 className="fw-lighter text-white">Ipsum dolor est</h2>
                  <p className="pb-4 text-secondary">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.
                  </p>
                  <Link href="#" className="link-fancy link-fancy-light">
                    Read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="card bg-transparent">
              <div className="bg-dark shadow rounded-5 p-0">
                <Image
                  src={img4}
                  width="582"
                  height="327"
                  alt="abstract image"
                  className="img-fluid rounded-5 no-bottom-radius"
                  loading="lazy"
                />
                <div className="p-5">
                  <h2 className="fw-lighter text-white">Ipsum dolor est</h2>
                  <p className="pb-4 text-secondary">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.
                  </p>
                  <Link href="#" className="link-fancy link-fancy-light">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatwedontknow;
