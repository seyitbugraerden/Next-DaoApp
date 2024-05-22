import React from "react";

function Mission() {
  return (
    <div className="w-100 overflow-hidden position-relative bg-black text-white" >
    <div className="position-absolute w-100 h-100 bg-black opacity-75 top-0 start-0"></div>
    <div className="container py-vh-4 position-relative mt-5 px-vw-5 text-center">
      <div className="row d-flex align-items-center justify-content-center py-vh-5">
        <div className="col-12 col-xl-10">
          <span className="h5 text-secondary fw-lighter">Our Mission</span>
          <h1 className="display-huge mt-3 mb-3 lh-1">We do ordinary stuff for cool people</h1>
        </div>
        <div className="col-12 col-xl-8">
          <p className="lead text-secondary">We are some sort of DAO working with AI, NFT´s, web 4.0 and the so called
            blockchain...in the Metaverse. You don´t understand a word? No problem, we neither!</p>
        </div>
        <div className="col-12 text-center">
          <a href="#" className="btn btn-xl btn-light">Join us
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

  </div>
  );
}

export default Mission;
