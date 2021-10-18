import Link from "next/link";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
export default function About() {
  return (
    <>
      <section className="section about" id="about" name="about">
        <div className="line-decor">
          <img src="/about-lines.svg" alt="decor" />
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-7">
              <div className="inner">
                <h2>About The Summit</h2>
                <p>
                  Futures Leaders Summit (FLS) gathers future STEM leaders from
                  Bosnia and Herzegovina. By establishing an event that will
                  annually gather prospective change makers in the field of
                  STEM, we aim to create a strong network that will change the
                  way we perceive the industry and the future of our
                  country&#39;s development.
                </p>
                <p className="accented">
                  This year, the big idea behind the event is the importance of
                  interdisciplinarity in STEM, and we will welcome STEM students
                  and recent graduates in person in Tuzla combined with an
                  opportunity for numerous other enthusiasts to follow the
                  keynote speakers online. Become a part of a story that will
                  shape today into a new tomorrow.
                </p>
                <Link href="/about">
                  <a className="contact-button">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hex-decor">
          <Image src="/hex.svg" alt="decor" layout="fill" />
        </div>
      </section>
    </>
  );
}
