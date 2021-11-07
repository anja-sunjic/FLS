import Image from "next/image";
import heroimg from "../../public/hero.webp";

export default function Intro() {
  return (
    <>
      <div className="intro hero registration">
        <div className="hero-img blur">
          <Image
            src={heroimg}
            alt="Futures Leaders Summit"
            layout="fill"
            priority="true"
            placeholder="blur"
          />
        </div>
        <div className="registration_container">
          <h1 className="registration_heading">
            Join a community of future STEM leaders that are shaping their and
            the future of Bosnia and Herzegovina!
          </h1>
          <h3>
            8 Keynote Speakers <br />
            2 Panel Discussions <br />
            12 Workshops <br />
            6 Company Visits <br />
          </h3>
          <div className="contact-button">
            <span> Get your ticket now</span>
          </div>
          <h4>Have a discount code?</h4>
        </div>
      </div>
    </>
  );
}
