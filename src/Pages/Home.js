import React from 'react'
//import Mainmenu from './includes/Mainmenu';

export default function Home() {
    return (

        
<>
{/* Navbar & Hero Start */}
<div className="container-xxl position-relative p-0">
  <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
    <a href="" className="navbar-brand p-0">
      <h1 className="m-0">DGital</h1>
      {/* <img src="img/logo.png" alt="Logo"> */}
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="fa fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav mx-auto py-0">
        <a href="index.html" className="nav-item nav-link active">
          Home
        </a>
        <a href="about.html" className="nav-item nav-link">
          About
        </a>
        <a href="service.html" className="nav-item nav-link">
          Service
        </a>
        <a href="project.html" className="nav-item nav-link">
          Project
        </a>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Pages
          </a>
          <div className="dropdown-menu m-0">
            <a href="team.html" className="dropdown-item">
              Our Team
            </a>
            <a href="testimonial.html" className="dropdown-item">
              Testimonial
            </a>
            <a href="404.html" className="dropdown-item">
              404 Page
            </a>
          </div>
        </div>
        <a href="contact.html" className="nav-item nav-link">
          Contact
        </a>
      </div>
      <a
        href=""
        className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
      >
        Get Started
      </a>
    </div>
  </nav>
  <div className="container-xxl bg-primary hero-header">
    <div className="container px-lg-5">
      <div className="row g-5 align-items-end">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="text-white mb-4 animated slideInDown">
            A Digital Agency Of Inteligents &amp; Creative People
          </h1>
          <p className="text-white pb-3 animated slideInDown">
            Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet
            dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam
            sit justo amet ipsum vero ipsum clita lorem
          </p>
          <a
            href=""
            className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
          >
            Read More
          </a>
          <a
            href=""
            className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
          >
            Contact Us
          </a>
        </div>
        <div className="col-lg-6 text-center text-lg-start">
          <img
            className="img-fluid animated zoomIn"
            src="img/hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</div>
{/* Navbar & Hero End */}
{/* Feature Start */}
<div className="container-xxl py-5">
  <div className="container py-5 px-lg-5">
    <div className="row g-4">
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="feature-item bg-light rounded text-center p-4">
          <i className="fa fa-3x fa-mail-bulk text-primary mb-4" />
          <h5 className="mb-3">Digital Marketing</h5>
          <p className="m-0">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
            sed diam stet diam sed stet lorem.
          </p>
        </div>
      </div>
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="feature-item bg-light rounded text-center p-4">
          <i className="fa fa-3x fa-search text-primary mb-4" />
          <h5 className="mb-3">SEO &amp; Backlinks</h5>
          <p className="m-0">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
            sed diam stet diam sed stet lorem.
          </p>
        </div>
      </div>
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
        <div className="feature-item bg-light rounded text-center p-4">
          <i className="fa fa-3x fa-laptop-code text-primary mb-4" />
          <h5 className="mb-3">Design &amp; Development</h5>
          <p className="m-0">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
            sed diam stet diam sed stet lorem.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Feature End */}
{/* About Start */}
<div className="container-xxl py-5">
  <div className="container py-5 px-lg-5">
    <div className="row g-5 align-items-center">
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
        <p className="section-title text-secondary">
          About Us
          <span />
        </p>
        <h1 className="mb-5">
          #1 Digital solution with 10 years of experience
        </h1>
        <p className="mb-4">
          Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
          labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
          sit clita duo justo eirmod magna dolore erat amet
        </p>
        <div className="skill mb-4">
          <div className="d-flex justify-content-between">
            <p className="mb-2">Digital Marketing</p>
            <p className="mb-2">85%</p>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              aria-valuenow={85}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
        <div className="skill mb-4">
          <div className="d-flex justify-content-between">
            <p className="mb-2">SEO &amp; Backlinks</p>
            <p className="mb-2">90%</p>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-secondary"
              role="progressbar"
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
        <div className="skill mb-4">
          <div className="d-flex justify-content-between">
            <p className="mb-2">Design &amp; Development</p>
            <p className="mb-2">95%</p>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-dark"
              role="progressbar"
              aria-valuenow={95}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
        <a
          href=""
          className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3"
        >
          Read More
        </a>
      </div>
      <div className="col-lg-6">
        <img
          className="img-fluid wow zoomIn"
          data-wow-delay="0.5s"
          src="img/about.png"
        />
      </div>
    </div>
  </div>
</div>
{/* About End */}
{/* Facts Start */}
<div
  className="container-xxl ms-5  bg-primary fact py-5 wow fadeInUp"
  data-wow-delay="0.1s"
>
  <div className="container py-5 px-lg-5">
    <div className="row g-4">
      <div
        className="col-md-6 col-lg-3 text-center wow fadeIn"
        data-wow-delay="0.1s"
      >
        <i className="fa fa-certificate fa-3x text-secondary mb-3" />
        <h1 className="text-white mb-2" data-toggle="counter-up">
          1234
        </h1>
        <p className="text-white mb-0">Years Experience</p>
      </div>
      <div
        className="col-md-6 col-lg-3 text-center wow fadeIn"
        data-wow-delay="0.3s"
      >
        <i className="fa fa-users-cog fa-3x text-secondary mb-3" />
        <h1 className="text-white mb-2" data-toggle="counter-up">
          1234
        </h1>
        <p className="text-white mb-0">Team Members</p>
      </div>
      <div
        className="col-md-6 col-lg-3 text-center wow fadeIn"
        data-wow-delay="0.5s"
      >
        <i className="fa fa-users fa-3x text-secondary mb-3" />
        <h1 className="text-white mb-2" data-toggle="counter-up">
          1234
        </h1>
        <p className="text-white mb-0">Satisfied Clients</p>
      </div>
      <div
        className="col-md-6 col-lg-3 text-center wow fadeIn"
        data-wow-delay="0.7s"
      >
        <i className="fa fa-check fa-3x text-secondary mb-3" />
        <h1 className="text-white mb-2" data-toggle="counter-up">
          1234
        </h1>
        <p className="text-white mb-0">Compleate Projects</p>
      </div>
    </div>
  </div>
</div>
{/* Facts End */}
{/* Service Start */}
<div className="container-xxl py-5">
  <div className="container py-5 px-lg-5">
    <div className="wow fadeInUp" data-wow-delay="0.1s">
      <p className="section-title text-secondary justify-content-center">
        <span />
        Our Services
        <span />
      </p>
      <h1 className="text-center mb-5">What Solutions We Provide</h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item d-flex flex-column text-center rounded">
          <div className="service-icon flex-shrink-0">
            <i className="fa fa-search fa-2x" />
          </div>
          <h5 className="mb-3">SEO Optimization</h5>
          <p className="m-0">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
            sed diam stet diam sed stet lorem.
          </p>
          <a className="btn btn-square" href="">
            <i className="fa fa-arrow-right" />
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="service-item d-flex flex-column text-center rounded">
          <div className="service-icon flex-shrink-0">
            <i className="fa fa-laptop-code fa-2x" />
          </div>
          <h5 className="mb-3">Web Design</h5>
          <p className="m-0">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
            sed diam stet diam sed stet lorem.
          </p>
          <a className="btn btn-square" href="">
            <i className="fa fa-arrow-right" />
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item d-flex flex-column text-center rounded">
          <div className="service-icon flex-shrink-0">
            <i className="fab fa-facebook-f fa-2x" />
          </div>
          <h5 className="mb-3">Social Media Marketing</h5>
          <p className="m-0">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
            sed diam stet diam sed stet lorem.
          </p>
          <a className="btn btn-square" href="">
            <i className="fa fa-arrow-right" />
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item d-flex flex-column text-center rounded">
          <div className="service-icon flex-shrink-0">
            <i className="fa fa-mail-bulk fa-2x" />
          </div>
          <h5 className="mb-3">Email Marketing</h5>
          <p className="m-0">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
            sed diam stet diam sed stet lorem.
          </p>
          <a className="btn btn-square" href="">
            <i className="fa fa-arrow-right" />
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="service-item d-flex flex-column text-center rounded">
          <div className="service-icon flex-shrink-0">
            <i className="fa fa-thumbs-up fa-2x" />
          </div>
          <h5 className="mb-3">PPC Advertising</h5>
          <p className="m-0">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
            sed diam stet diam sed stet lorem.
          </p>
          <a className="btn btn-square" href="">
            <i className="fa fa-arrow-right" />
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item d-flex flex-column text-center rounded">
          <div className="service-icon flex-shrink-0">
            <i className="fab fa-android fa-2x" />
          </div>
          <h5 className="mb-3">App Development</h5>
          <p className="m-0">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
            sed diam stet diam sed stet lorem.
          </p>
          <a className="btn btn-square" href="">
            <i className="fa fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Service End */}
{/* Newsletter Start */}
<div
  className="container-xxl bg-primary newsletter py-5 wow fadeInUp"
  data-wow-delay="0.1s"
>
  <div className="container py-5 px-lg-5">
    <div className="row justify-content-center">
      <div className="col-lg-7 text-center">
        <p className="section-title text-white justify-content-center">
          <span />
          Newsletter
          <span />
        </p>
        <h1 className="text-center text-white mb-4">Stay Always In Touch</h1>
        <p className="text-white mb-4">
          Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
          labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita
          duo justo
        </p>
        <div className="position-relative w-100 mt-3">
          <input
            className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
            type="text"
            placeholder="Enter Your Email"
            style={{ height: 48 }}
          />
          <button
            type="button"
            className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
          >
            <i className="fa fa-paper-plane text-primary fs-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Newsletter End */}
{/* Projects Start */}
<div className="container-xxl py-5">
  <div className="container py-5 px-lg-5">
    <div className="wow fadeInUp" data-wow-delay="0.1s">
      <p className="section-title text-secondary justify-content-center">
        <span />
        Our Projects
        <span />
      </p>
      <h1 className="text-center mb-5">Recently Completed Projects</h1>
    </div>
    <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
      <div className="col-12 text-center">
        <ul className="list-inline mb-5" id="portfolio-flters">
          <li className="mx-2 active" data-filter="*">
            All
          </li>
          <li className="mx-2" data-filter=".first">
            Web Design
          </li>
          <li className="mx-2" data-filter=".second">
            Graphic Design
          </li>
        </ul>
      </div>
    </div>
    <div className="row g-4 portfolio-container">
      <div
        className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="rounded overflow-hidden">
          <div className="position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="img/portfolio-1.jpg"
              alt=""
            />
            <div className="portfolio-overlay">
              <a
                className="btn btn-square btn-outline-light mx-1"
                href="img/portfolio-1.jpg"
                data-lightbox="portfolio"
              >
                <i className="fa fa-eye" />
              </a>
              <a className="btn btn-square btn-outline-light mx-1" href="">
                <i className="fa fa-link" />
              </a>
            </div>
          </div>
          <div className="bg-light p-4">
            <p className="text-primary fw-medium mb-2">UI / UX Design</p>
            <h5 className="lh-base mb-0">
              Digital Agency Website Design And Development
            </h5>
          </div>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <div className="rounded overflow-hidden">
          <div className="position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="img/portfolio-2.jpg"
              alt=""
            />
            <div className="portfolio-overlay">
              <a
                className="btn btn-square btn-outline-light mx-1"
                href="img/portfolio-2.jpg"
                data-lightbox="portfolio"
              >
                <i className="fa fa-eye" />
              </a>
              <a className="btn btn-square btn-outline-light mx-1" href="">
                <i className="fa fa-link" />
              </a>
            </div>
          </div>
          <div className="bg-light p-4">
            <p className="text-primary fw-medium mb-2">UI / UX Design</p>
            <h5 className="lh-base mb-0">
              Digital Agency Website Design And Development
            </h5>
          </div>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
        data-wow-delay="0.5s"
      >
        <div className="rounded overflow-hidden">
          <div className="position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="img/portfolio-3.jpg"
              alt=""
            />
            <div className="portfolio-overlay">
              <a
                className="btn btn-square btn-outline-light mx-1"
                href="img/portfolio-3.jpg"
                data-lightbox="portfolio"
              >
                <i className="fa fa-eye" />
              </a>
              <a className="btn btn-square btn-outline-light mx-1" href="">
                <i className="fa fa-link" />
              </a>
            </div>
          </div>
          <div className="bg-light p-4">
            <p className="text-primary fw-medium mb-2">UI / UX Design</p>
            <h5 className="lh-base mb-0">
              Digital Agency Website Design And Development
            </h5>
          </div>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="rounded overflow-hidden">
          <div className="position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="img/portfolio-4.jpg"
              alt=""
            />
            <div className="portfolio-overlay">
              <a
                className="btn btn-square btn-outline-light mx-1"
                href="img/portfolio-4.jpg"
                data-lightbox="portfolio"
              >
                <i className="fa fa-eye" />
              </a>
              <a className="btn btn-square btn-outline-light mx-1" href="">
                <i className="fa fa-link" />
              </a>
            </div>
          </div>
          <div className="bg-light p-4">
            <p className="text-primary fw-medium mb-2">UI / UX Design</p>
            <h5 className="lh-base mb-0">
              Digital Agency Website Design And Development
            </h5>
          </div>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <div className="rounded overflow-hidden">
          <div className="position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="img/portfolio-5.jpg"
              alt=""
            />
            <div className="portfolio-overlay">
              <a
                className="btn btn-square btn-outline-light mx-1"
                href="img/portfolio-5.jpg"
                data-lightbox="portfolio"
              >
                <i className="fa fa-eye" />
              </a>
              <a className="btn btn-square btn-outline-light mx-1" href="">
                <i className="fa fa-link" />
              </a>
            </div>
          </div>
          <div className="bg-light p-4">
            <p className="text-primary fw-medium mb-2">UI / UX Design</p>
            <h5 className="lh-base mb-0">
              Digital Agency Website Design And Development
            </h5>
          </div>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
        data-wow-delay="0.5s"
      >
        <div className="rounded overflow-hidden">
          <div className="position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src="img/portfolio-6.jpg"
              alt=""
            />
            <div className="portfolio-overlay">
              <a
                className="btn btn-square btn-outline-light mx-1"
                href="img/portfolio-6.jpg"
                data-lightbox="portfolio"
              >
                <i className="fa fa-eye" />
              </a>
              <a className="btn btn-square btn-outline-light mx-1" href="">
                <i className="fa fa-link" />
              </a>
            </div>
          </div>
          <div className="bg-light p-4">
            <p className="text-primary fw-medium mb-2">UI / UX Design</p>
            <h5 className="lh-base mb-0">
              Digital Agency Website Design And Development
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Projects End */}
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
{/* Team Start */}
<div className="container-xxl py-5">
  <div className="container py-5 px-lg-5">
    <div className="wow fadeInUp" data-wow-delay="0.1s">
      <p className="section-title text-secondary justify-content-center">
        <span />
        Our Team
        <span />
      </p>
      <h1 className="text-center mb-5">Our Team Members</h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="team-item bg-light rounded">
          <div className="text-center border-bottom p-4">
            <img
              className="img-fluid rounded-circle mb-4"
              src="img/team-1.jpg"
              alt=""
            />
            <h5>John Doe</h5>
            <span>CEO &amp; Founder</span>
          </div>
          <div className="d-flex justify-content-center p-4">
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-instagram" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="team-item bg-light rounded">
          <div className="text-center border-bottom p-4">
            <img
              className="img-fluid rounded-circle mb-4"
              src="img/team-2.jpg"
              alt=""
            />
            <h5>Jessica Brown</h5>
            <span>Web Designer</span>
          </div>
          <div className="d-flex justify-content-center p-4">
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-instagram" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="team-item bg-light rounded">
          <div className="text-center border-bottom p-4">
            <img
              className="img-fluid rounded-circle mb-4"
              src="img/team-3.jpg"
              alt=""
            />
            <h5>Tony Johnson</h5>
            <span>SEO Expert</span>
          </div>
          <div className="d-flex justify-content-center p-4">
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-instagram" />
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Team End */}
{/* Footer Start */}
<div
  className="container-fluid bg-primary text-light footer wow fadeIn"
  data-wow-delay="0.1s"
>
  <div className="container py-5 px-lg-5">
    <div className="row g-5">
      <div className="col-md-6 col-lg-3">
        <p className="section-title text-white h5 mb-4">
          Address
          <span />
        </p>
        <p>
          <i className="fa fa-map-marker-alt me-3" />
          123 Street, New York, USA
        </p>
        <p>
          <i className="fa fa-phone-alt me-3" />
          +012 345 67890
        </p>
        <p>
          <i className="fa fa-envelope me-3" />
          info@example.com
        </p>
        <div className="d-flex pt-2">
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-twitter" />
          </a>
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-instagram" />
          </a>
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <p className="section-title text-white h5 mb-4">
          Quick Link
          <span />
        </p>
        <a className="btn btn-link" href="">
          About Us
        </a>
        <a className="btn btn-link" href="">
          Contact Us
        </a>
        <a className="btn btn-link" href="">
          Privacy Policy
        </a>
        <a className="btn btn-link" href="">
          Terms &amp; Condition
        </a>
        <a className="btn btn-link" href="">
          Career
        </a>
      </div>
      <div className="col-md-6 col-lg-3">
        <p className="section-title text-white h5 mb-4">
          Gallery
          <span />
        </p>
        <div className="row g-2">
          <div className="col-4">
            <img
              className="img-fluid"
              src="img/portfolio-1.jpg"
              alt="Image"
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid"
              src="img/portfolio-2.jpg"
              alt="Image"
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid"
              src="img/portfolio-3.jpg"
              alt="Image"
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid"
              src="img/portfolio-4.jpg"
              alt="Image"
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid"
              src="img/portfolio-5.jpg"
              alt="Image"
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid"
              src="img/portfolio-6.jpg"
              alt="Image"
            />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <p className="section-title text-white h5 mb-4">
          Newsletter
          <span />
        </p>
        <p>
          Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur
          facilisis ornare velit non vulpu
        </p>
        <div className="position-relative w-100 mt-3">
          <input
            className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
            type="text"
            placeholder="Your Email"
            style={{ height: 48 }}
          />
          <button
            type="button"
            className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
          >
            <i className="fa fa-paper-plane text-primary fs-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="container px-lg-5">
    <div className="copyright">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          ©{" "}
          <a className="border-bottom" href="#">
            Your Site Name
          </a>
          , All Right Reserved.
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed By{" "}
          <a className="border-bottom" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <div className="footer-menu">
            <a href="">Home</a>
            <a href="">Cookies</a>
            <a href="">Help</a>
            <a href="">FQAs</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Footer End */}
{/* Back to Top */}
<a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top">
  <i className="bi bi-arrow-up" />
</a>

            </>
      
    )
}