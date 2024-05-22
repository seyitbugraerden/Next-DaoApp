import React from 'react';

function Whatwedo() {
  return (
    <div className="bg-dark">
      <div className="container px-vw-5 py-vh-5">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-lg-7 text-lg-end">
            <span className="h5 text-secondary fw-lighter">What we do</span>
            <h2 className="display-4 text-white">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
          </div>
          <div className="col-12 col-lg-5">
            <h3 className="pt-5 text-white">Product Design & Strategy</h3>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.<br />
              <a href="#" className="link-fancy link-fancy-light me-2">Tell me more</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </p>
            <h3 className="border-top border-secondary pt-5 mt-5 text-white">Development & Engineering</h3>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.<br />
              <a href="#" className="link-fancy link-fancy-light me-2">Tell me more</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatwedo;
