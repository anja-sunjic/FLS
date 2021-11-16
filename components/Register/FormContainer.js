import Image from "next/image";
import Link from "next/link";
import heroimg from "../../public/hero.webp";

import Form from "./Form";

export default function FormContainer() {
  return (
    <>
      <div className="hero small-hero">
        <div className="hero-img blur">
          <Image
            src={heroimg}
            alt="Futures Leaders Summit"
            layout="fill"
            priority="true"
            placeholder="blur"
            quality={60}
            loading="eager"
          />
        </div>
        <div className="container">
          <div className="inner">
            <div className="title-line">
              <h2>Registration form</h2>
              <div className="line-decor is-hidden-touch">
                <img src="/dots.svg" alt="Futures Leaders Summit" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section register intro">
        <div className="columns">
          <div className="column is-4">
            <div className="left">
              <p className="price">90 BAM</p>
              <div className="line-decor is-hidden-touch">
                <img src="/dots.svg" alt="Futures Leaders Summit" />
              </div>
            </div>
          </div>
          <div className="column is-3">
            <div className="center">
              <p className="line">8 Keynote Speakers</p>
              <p className="line">2 Panel Discussions</p>
              <p className="line">12 Workshops</p>
              <p className="line">6 Company Visits</p>
            </div>
          </div>
          <div className="column is-5">
            <div className="right">
              In case you missed it, we are giving away travel grants for
              promising STEM students from Bosnia and Herzegovina, covering
              Summit tickets, accommodation and travel.
              <Link href="/registration/travel-grant-application">
                <a className="contact-button">
                  <span>Learn More</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="section form-container register">
        <div className="hex-decor">
          <img src="/hex.svg" alt="Futures Leaders Summit" />
        </div>
        <div className="container">
          {/* <h2>Contact Us</h2>
          <p className="sub">
            Fill in the form below and we will get back to you as soon as
            possible
          </p> */}
          <Form />
        </div>
      </section>
    </>
  );
}
