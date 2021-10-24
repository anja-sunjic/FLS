import Image from "next/image";
import heroimg from "../../public/hero.webp";
export default function Intro() {
  return (
    <>
      <div className="_speakers hero small-hero">
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
              <h2>Speakers</h2>
              <div className="line-decor is-hidden-touch">
                <img src="/dots.svg" alt="Futures Leaders Summit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
