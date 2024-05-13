import React from 'react'

export default function NoPage() {
  return (
    <div>
      <>
  <div className="container-xxl py-5 bg-primary hero-header">
    <div className="container my-5 py-5 px-lg-5">
      <div className="row g-5 py-5">
        <div className="col-12 text-center">
          <h1 className="text-white animated slideInDown">Not Found</h1>
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
                404
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* 404 Start */}
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container px-lg-5 text-center">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <i className="bi bi-exclamation-triangle display-1 text-primary" />
          <h1 className="display-1">404</h1>
          <h1 className="mb-4">Page Not Found</h1>
          <p className="mb-4">
            We’re sorry, the page you have looked for does not exist in our
            website! Maybe go to our home page or try to use a search?
          </p>
          <a className="btn btn-primary rounded-pill py-3 px-5" href="">
            Go Back To Home
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* 404 End */}
</>

    </div>
  )
}
