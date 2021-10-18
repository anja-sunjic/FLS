import Image from "next/image";
import heroimg from "../../public/hero.webp";
export default function Intro() {
  return (
    <>
      <div className="intro hero _about">
        <div className="hero-img blur">
          <Image
            src={heroimg}
            alt="Futures Leaders Summit"
            layout="fill"
            priority="true"
            placeholder="blur"
          />
        </div>

        <div className="container">
          <div className="inner">
            <div className="title-line">
              <h2>About the Summit</h2>
              <div className="line-decor is-hidden-touch">
                <img src="/dots.svg" alt="" />
              </div>
            </div>
            <p>
              Futures Leaders Summit (FLS) gathers future STEM leaders from
              Bosnia and Herzegovina. By establishing an event that will
              annually gather prospective change makers in the field of STEM, we
              aim to create a strong network that will change the way we
              perceive the industry and the future of our country&#39;s
              development.
            </p>
            <p className="accented">
              This year, the big idea behind the event is the importance of
              interdisciplinarity in STEM, and we will welcome STEM students and
              recent graduates in person in Tuzla combined with an opportunity
              for numerous other enthusiasts to follow the keynote speakers
              online. Become a part of a story that will shape today into a new
              tomorrow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
