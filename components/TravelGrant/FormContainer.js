import Image from "next/image";
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
              <h2>Travel grant application form</h2>
              <div className="line-decor is-hidden-touch">
                <img src="/dots.svg" alt="Futures Leaders Summit" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section travel-grant intro">
        <div className="container">
          <p>
            All STEM students and recent graduates (a graduate who left
            full-time education within five years of the event date) who are
            unemployed coming from any faculty from Bosnia and Herzegovina are
            eligible to apply for the travel grant.
          </p>
          <p>
            Travel grants are divided in the following three tiers, there are
            multiple travel grant tiers where we cover:
          </p>
          <ul className="fls-list">
            <li className="fls-list-item">TIER #1: only the Summit ticket (90 KM)</li>
            <li className="fls-list-item">
              TIER #2: the Summit Ticket and travel expenses (90 KM +
              ticket/fuel reimbursement)
            </li>
            <li className="fls-list-item">
              TIER #3: the Summit Ticket, travel expenses, and accommodation
              (90 KM + ticket/fuel reimbursement + costs of max. three nights
              stay).
            </li>
          </ul>
          <p>
            In accordance with the needs and requirements, the FLS Organizing
            Team will provide as much as possible TIER #3 grants. In case of
            limited capacity, priority will be given to applicants with a strong
            application form and applications coming from a low-income
            household. We will endeavor to provide grants based on geographic
            diversity to enable individuals from smaller communities to also
            attend the Summit.
          </p>
          <p>
            Application result details will be shared with all applicants.
            Deadline for applying is 30th November. We strongly encourage all
            interested applicants to apply as soon as possible due to the
            limited capacity of travel grants available.
          </p>
          <p>
            After the submission of your application, our team will reach out to
            you in a couple of weeks.
          </p>
          <div className="line-decor is-hidden-touch">
            <img src="/dots.svg" alt="Futures Leaders Summit" />
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
