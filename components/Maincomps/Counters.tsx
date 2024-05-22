import React from 'react'
import img1 from '@/public/images/abstract12.webp'
import img2 from '@/public/images/person103.webp'
import Image from 'next/image'
function Counters() {
  return (
    <div className="container-fluid px-vw-5 position-relative bg-dark">
      <div className="position-absolute w-100 h-50 bg-black top-0 start-0"></div>
      <div className="position-relative py-vh-5 bg-cover bg-center rounded-5"
        style={{ backgroundImage: `url(${img1.src})` }}>
        <div className="container bg-black px-vw-5 py-vh-3 rounded-5 shadow">
          <div className="row d-flex align-items-center">

            <div className="col-6 d-flex align-items-center bg-dark shadow rounded-5 p-0">
              <div className="row d-flex justify-content-center">
                <div className="col-12">
                  <Image src={img2} width="684" height="457" alt="our CEO with some nice numbers"
                    className="img-fluid rounded-5" loading="lazy"/>
                </div>
                <div className="col-12 col-lg-10 col-xl-8 text-center my-5">
                  <p className="lead border-bottom pb-4 border-secondary text-white">Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet.</p>
                  <p className="text-secondary text-center">Jane Doe, CEO</p>
                </div>
              </div>
            </div>
            <div className="col-5 offset-1">
              <span className="h5 text-secondary fw-lighter">The numbers</span>
              <h2 className="display-huge fw-bolder">+400</h2>
              <p className="h4 fw-lighter text-secondary">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>

              <h2 className="display-huge fw-bolder border-top border-secondary pt-5 mt-5" >78.981
              </h2>
              <p className="h4 fw-lighter text-secondary">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
              <h2 className="display-huge fw-bolder border-top border-secondary pt-5 mt-5" >98%</h2>
              <p className="h4 fw-lighter text-secondary">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Counters