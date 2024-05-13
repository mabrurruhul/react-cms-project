import React from 'react'

export default function Testimonial() {
  return (
    <div>
      <>
  <div className="container-xxl py-5 bg-primary hero-header">
    <div className="container my-5 py-5 px-lg-5">
      <div className="row g-5 py-5">
        <div className="col-12 text-center">
          <h1 className="text-white animated slideInDown">Testimonial</h1>
          <hr className="bg-white mx-auto mt-0" style={{ width: 90 }} />
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Testimonial
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5 px-lg-5">
      <p className="section-title text-secondary justify-content-center">
        <span />
        Testimonial
        <span />
      </p>
      <h1 className="text-center mb-5">What Say Our Clients!</h1>
      <div className="owl-carousel testimonial-carousel">
        <div className="testimonial-item bg-light rounded my-4">
          <p className="fs-5">
            <i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3" />
            Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
            ipsum et lorem et sit sed stet lorem sit clita duo justo.
          </p>
          <div className="d-flex align-items-center">
            <img
              className="img-fluid flex-shrink-0 rounded-circle"
              src="img/testimonial-1.jpg"
              style={{ width: 65, height: 65 }}
            />
            <div className="ps-4">
              <h5 className="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
        <div className="testimonial-item bg-light rounded my-4">
          <p className="fs-5">
            <i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3" />
            Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
            ipsum et lorem et sit sed stet lorem sit clita duo justo.
          </p>
          <div className="d-flex align-items-center">
            <img
              className="img-fluid flex-shrink-0 rounded-circle"
              src="img/testimonial-2.jpg"
              style={{ width: 65, height: 65 }}
            />
            <div className="ps-4">
              <h5 className="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
        <div className="testimonial-item bg-light rounded my-4">
          <p className="fs-5">
            <i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3" />
            Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
            ipsum et lorem et sit sed stet lorem sit clita duo justo.
          </p>
          <div className="d-flex align-items-center">
            <img
              className="img-fluid flex-shrink-0 rounded-circle"
              src="img/testimonial-3.jpg"
              style={{ width: 65, height: 65 }}
            />
            <div className="ps-4">
              <h5 className="mb-1">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</>

    </div>
  )
}
