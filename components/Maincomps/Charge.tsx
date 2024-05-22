import React from "react";

function Charge() {
  return (
    <div className="bg-black">
      <div className="container px-vw-5 py-vh-5">
        <div className="row d-flex align-items-center">
          <div
            className="col-12 col-lg-5 text-center text-lg-end"
          >
            <span className="h5 text-secondary fw-lighter">What we charge</span>
            <h2 className="display-4 text-white">
              You get all our knowledge for one simple price
            </h2>
          </div>
          <div
            className="col-12 col-lg-7 bg-dark rounded-5 py-vh-3 text-center my-5"
            
          >
            <h2 className="display-huge mb-5 text-white">
              <span className="fs-4 me-2 fw-light">$</span>
              <span className="border-bottom border-5">499</span>
              <span className="fs-6 fw-light">/day</span>
            </h2>
            <p className="lead text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" className="btn btn-xl btn-light">
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charge;
