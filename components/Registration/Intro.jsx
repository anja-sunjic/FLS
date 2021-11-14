import Image from "next/image";
import Link from "next/link";
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
          <h3>8 Keynote Speakers</h3>
          <h3>2 Panel Discussions</h3>
          <h3>10 Workshops</h3>
          <h3>5 Tech Tutorials/Company Visits</h3>
          <Link href="/registration/register">
            <div className="contact-button reg">
              <span>Get your ticket now</span>
            </div>
          </Link>
          <Link href="/registration/register">
            <h4 className="_link">Have a discount code?</h4>
          </Link>
        </div>
      </div>
    </>
  );
}
